import styled from 'styled-components';
import Profile from '@components/profile';
import Card from '@components/card';
import { useEffect } from 'react';
import { useLoading } from '@hooks/useLoading';
import Loading from '@components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import CorrectionRequestModal from '@components/modal';
import { addCorrectionRequestThunk } from '@redux/reducer/userThunks';
import { SmallButton } from '@components/Button.styles';
import { SuccessBox } from '@components/AlertBox';
import { setShowSuccessBox } from '@redux/reducer/userSlice';
import { useToggle } from '@hooks/useToggle';

const PayrollDetails = () => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.user.data.profileData);
  const payrollData = useSelector((state) => state.user.data.payrollData);
  const userStatus = useSelector((state) => state.user.status);
  const userError = useSelector((state) => state.user.error);
  const showSuccessBox = useSelector((state) => state.user.showSuccessBox);

  const [modalVisible, setModalVisible] = useToggle(false);
  const [showSuccess, setShowSuccess] = useToggle(false);
  const loading = useLoading(userStatus);

  const showModal = () => {
    setModalVisible();
  };

  const handleCancel = () => {
    setModalVisible();
  };

  const newRequest = ({ title, date, content, note }) => {
    return {
      title,
      manager: '담당자: 송병훈',
      items: [
        { label: '날짜', value: date.format('YY.MM.DD') },
        { label: '내용', value: content },
        { label: '비고', value: note || '' },
        { label: '상태', value: '처리중' },
      ],
    };
  };

  const handleSubmit = (values) => {
    dispatch(addCorrectionRequestThunk(newRequest(values)));
    setModalVisible();
  };

  const handleSuccess = () => {
    setShowSuccess();
    dispatch(setShowSuccessBox(false));
  };

  useEffect(() => {
    if (showSuccessBox) {
      setShowSuccess();
      const timer = setTimeout(() => {
        handleSuccess();
      }, 3000);
      return () => {
        clearTimeout(timer);
        dispatch(setShowSuccessBox(false));
      };
    }
  }, [showSuccessBox, dispatch]);

  return (
    <PayrollContainer>
      {loading && <Loading />}
      {showSuccess && <SuccessBox description="정정신청이 성공적으로 완료되었습니다." handleSuccess={handleSuccess} />}
      {userError && <ErrorBox description={userError} />}
      <CorrectionRequestModal visible={modalVisible} onCancel={handleCancel} onSubmit={handleSubmit} />
      <Profile profileData={profileData} />
      <PayrollBox>
        <PayrollTitle>급여 명세</PayrollTitle>
        <RequestButton onClick={showModal}>정정신청하기</RequestButton>
        {payrollData.map((data, index) => (
          <Card key={index} data={data} text={'급여 명세 확인'} />
        ))}
      </PayrollBox>
    </PayrollContainer>
  );
};

export default PayrollDetails;

const PayrollContainer = styled.div`
  min-width: 350px;
  max-height: calc(100% - 40px);
  overflow-y: scroll;
`;

const PayrollBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  max-width: 800px;
  margin: 0 auto;
`;

const PayrollTitle = styled.h1`
  margin-top: 20px;
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-h3);
  line-height: var(--line-height-h3);
`;

const RequestButton = styled(SmallButton)`
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: ${(props) => props.theme.colors.primary.normal};
`;
