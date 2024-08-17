import { Modal, Button, Form, Input, DatePicker } from 'antd';

const CorrectionRequestModal = ({ visible, onCancel, onSubmit }) => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      onSubmit(values);
      form.resetFields();
    });
  };

  const formItem = [
    {
      name: 'title',
      label: '제목',
      rules: [{ required: true, message: '제목을 입력해주세요' }],
      component: <Input />,
    },
    {
      name: 'date',
      label: '날짜',
      rules: [{ required: true, message: '날짜를 선택해주세요' }],
      component: <DatePicker style={{ width: '100%' }} />,
    },
    {
      name: 'content',
      label: '내용',
      rules: [{ required: true, message: '내용을 입력해주세요' }],
      component: <Input.TextArea />,
    },
    {
      name: 'note',
      label: '비고',
      component: <Input />,
    },
  ];

  return (
    <Modal
      open={visible}
      title="정정신청"
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          취소
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          제출
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        {formItem.map(({ name, label, rules, component }, index) => (
          <Form.Item key={index} name={name} label={label} rules={rules}>
            {component}
          </Form.Item>
        ))}
      </Form>
    </Modal>
  );
};

export default CorrectionRequestModal;
