import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Modal, Form, Input, DatePicker, Button, Select } from 'antd';
import styled from 'styled-components';
import dayjs from 'dayjs';
import Tasks from './Tasks';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskThunk, deleteTaskThunk, updateTaskThunk } from '@redux/reducer/userThunks';

const Calendar = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.data.tasks);
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [editTask, setEditTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [selectDate, setSelectDate] = useState('');
  const [title, setTitle] = useState('');
  const handleDateClick = (values) => {
    form.setFieldsValue({
      start: dayjs(values.startStr),
      end: dayjs(values.endStr),
    });
    setModalVisible(true);
  };

  const handleDateUpdate = (values) => {
    const task = data.find((task) => task.id === values.id);
    form.setFieldsValue({
      title: values.title,
      start: dayjs(values.start),
      end: values.end ? dayjs(values.end) : dayjs(values.start),
    });
    setEditTask(task);
    setModalVisible(true);
    setTitle('이벤트 수정');
  };

  const handleDelete = (e, id) => {
    e.stopPropagation();
    dispatch(deleteTaskThunk(id));
  };

  const handleSubmit = (values) => {
    const newTask = {
      title: values.title,
      start: values.start.format('YYYY-MM-DD'),
      end: values.end.format('YYYY-MM-DD'),
      backgroundColor: values.color,
      borderColor: values.color,
    };

    if (editTask) {
      dispatch(updateTaskThunk({ taskId: editTask.id, data: newTask }));
    } else {
      dispatch(addTaskThunk(newTask));
    }
    setModalVisible(false);
    setSelectDate(newTask.start);
    setEditTask('');
    setTitle('');
    form.resetFields();
  };

  const handleEventDrop = (info) => {
    const { id, start, end } = info.event;

    const updatedData = {
      start: dayjs(start).format('YYYY-MM-DD'),
      end: dayjs(end).format('YYYY-MM-DD'),
    };

    dispatch(updateTaskThunk({ taskId: id, data: updatedData }));
  };

  const handleDateTask = useCallback(
    (date) => {
      const currentTask = data.filter((task) => task.start === date);
      setTasks(currentTask);
    },
    [data]
  );

  const colorOptions = [
    { label: 'Blue', value: '#5271D9' },
    { label: 'Green', value: '#17D085' },
    { label: 'Pumpkin', value: '#FF7710' },
    { label: 'Red', value: '#FA271B' },
    { label: 'Black', value: '#060606' },
  ];

  const colorOption = colorOptions.map((color) => ({
    label: <span style={{ color: color.value }}>{color.label}</span>,
    value: color.value,
  }));

  const formItem = [
    {
      name: 'title',
      label: '제목',
      rules: [{ required: true, message: '제목을 입력해주세요' }],
      component: <Input />,
    },
    {
      name: 'start',
      label: '시작 날짜',
      rules: [{ required: true, message: '시작 날짜를 선택해주세요' }],
      component: <DatePicker format="YYYY-MM-DD" />,
    },
    {
      name: 'end',
      label: '종료 날짜',
      rules: [{ required: true, message: '종료 날짜를 선택해주세요' }],
      component: <DatePicker format="YYYY-MM-DD" />,
    },
    {
      name: 'color',
      label: '색상',
      component: <Select style={{ width: '100%' }} options={colorOption} />,
    },
  ];

  useEffect(() => {
    if (selectDate) {
      handleDateTask(selectDate);
    } else {
      const today = new Date();
      const todayString = dayjs(today).format('YYYY-MM-DD');
      const todayTasks = data.filter((task) => task.start === todayString);
      setTasks(todayTasks);
    }
  }, [data, selectDate, handleDateTask]);

  return (
    <CalendarContainer>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,today',
          center: 'title',
          right: 'next',
        }}
        selectable={true}
        select={(info) => handleDateClick(info)}
        eventClick={(info) => handleDateTask(info.event.startStr)}
        editable={true}
        eventDrop={handleEventDrop}
        weekends={true}
        events={data}
        eventDidMount={(info) => {
          info.el.style.backgroundColor = info.event.backgroundColor;
          info.el.style.borderColor = info.event.borderColor;
        }}
        buttonText={{
          today: '오늘',
        }}
      />
      <Modal
        title={title || '새 이벤트 추가'}
        open={modalVisible}
        onCancel={() => {
          form.resetFields();
          setEditTask('');
          setTitle('');
          setModalVisible(false);
        }}
        footer={null}
      >
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          {formItem.map(({ name, label, rules, component }, index) => (
            <Form.Item key={index} name={name} label={label} rules={rules}>
              {component}
            </Form.Item>
          ))}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              추가
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Tasks tasks={tasks} handleDateUpdate={handleDateUpdate} handleDelete={handleDelete} />
    </CalendarContainer>
  );
};

export default Calendar;

const CalendarContainer = styled.div`
  margin: 0 auto;
  width: 100vw;
  height: 80vh;
  margin-top: 5px;
  background-color: ${(props) => props.theme.colors.background[1]};
  border-bottom: 1px ${(props) => props.theme.colors.text.title};
  color: ${(props) => props.theme.colors.text.title};
  .fc {
    height: 100%;
    & * {
      border: none;
    }
    &::after {
      content: '';
      width: 100vw;
      height: 1px;
      background-color: ${(props) => props.theme.colors.text.title};
    }
    .fc-toolbar-title {
      position: relative;
      transform: translateX(-20px);
      font-size: 16px;
      font-weight: bold;
      text-align: center;
    }
    .fc-icon-chevron-right::before {
      content: '>';
      position: relative;
      top: -3px;
    }
    .fc-icon-chevron-left::before {
      content: '<';
      position: relative;
      top: -3px;
    }
    .fc-button {
      background: none;
      border: none;
      color: ${(props) => props.theme.colors.text.title};
    }

    .fc-button-primary {
      background: none;
      border: none;
      color: ${(props) => props.theme.colors.text.title};
    }

    .fc-button-primary:not(:disabled):active,
    .fc-button-primary:not(:disabled).fc-button-active {
      background: none;
      color: #0056b3;
    }

    .fc-day-today {
      background-color: #007bff22;
      font-weight: bold;
    }

    .fc-day-other {
      color: ${(props) => props.theme.colors.text.body};
    }

    .fc-daygrid-day-number {
      color: ${(props) => props.theme.colors.text.title};
      font-size: 12px;
    }

    .fc-daygrid-day-top {
      justify-content: center;
    }

    .fc-col-header-cell-cushion {
      color: ${(props) => props.theme.colors.text.body};
      font-size: 12px;
    }
    .fc-event-title {
      font-size: 12px;
    }
    .fc-daygrid-event {
      padding: 3px;
      transition: opacity 0.3s;
    }
    .fc-daygrid-event:hover {
      opacity: 0.7;
    }
    .fc-day-sun a,
    .fc-day-sat a {
      color: ${(props) => props.theme.colors.danger.normal};
    }
    .fc-h-event {
      background-color: ${(props) => props.theme.colors.primary.normal};
    }
  }
`;
