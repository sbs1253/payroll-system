import dayjs from 'dayjs';
import styled from 'styled-components';
import { SmallButton } from '../Button.styles';
function Tasks({ tasks, handleDateUpdate, handleDelete }) {
  return (
    <FooterTasks>
      <h3>
        {tasks[0] ? dayjs(tasks[0].start).format('YYYY년 MM월 DD일') : dayjs(new Date()).format('YYYY년 MM월 DD일')}
      </h3>
      <TaskList>
        {tasks.map((task) => (
          <TaskItem key={task.id} onClick={() => handleDateUpdate(task)}>
            {task.title}
            <SmallButton onClick={(e) => handleDelete(e, task.id)}>삭제하기</SmallButton>
          </TaskItem>
        ))}
      </TaskList>
    </FooterTasks>
  );
}

export default Tasks;
const FooterTasks = styled.div`
  padding: 20px;
  h3 {
    margin-bottom: 20px;
    font-size: 18px;
  }
`;

const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 50px;
`;

const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background[2]};
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
`;
