import { Alert } from 'antd';
import styled from 'styled-components';

export const ErrorBox = ({ description }) => {
  return (
    <AlertBox message="Error" description={description || '에러가 발생했습니다.'} type="error" showIcon closable />
  );
};

export const SuccessBox = ({ description, handleSuccess }) => {
  return (
    <AlertBox
      message="Success"
      description={description || '요청에 성공했습니다.'}
      type="success"
      showIcon
      closable
      onClose={handleSuccess}
    />
  );
};

const AlertBox = styled(Alert)`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  width: 80%;
`;
