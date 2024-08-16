import Profile from '@components/profile';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Card from '@components/card';
import { useDispatch } from 'react-redux';
import { deleteCorrectionRequestThunk } from '@redux/reducer/userThunks';
import { useLoading } from '@hooks/useLoading';
import Loading from '@components/Loading';
import { SuccessBox } from '@components/AlertBox';
import { setShowSuccessBox } from '@redux/reducer/userSlice';
import { useState } from 'react';
import { useEffect } from 'react';
const CorrectionRequestRecords = () => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.user.data.profileData);
  const correctionRequests = useSelector((state) => state.user.data.correctionRequests);
  const userStatus = useSelector((state) => state.user.status);
  const showSuccessBox = useSelector((state) => state.user.showSuccessBox);

  const [showSuccess, setShowSuccess] = useState(false);
  const loading = useLoading(userStatus);
  const iconSrc =
    'https://image-resource.creatie.ai/129853559902101/129853559902103/d52a3cab2e07adcfb4a3fc44f581abd0.png';

  const onCardClick = (id) => {
    dispatch(deleteCorrectionRequestThunk(id));
  };
  const handleSuccess = () => {
    setShowSuccess(false);
    dispatch(setShowSuccessBox(false));
  };
  useEffect(() => {
    if (showSuccessBox) {
      setShowSuccess(true);
      const timer = setTimeout(() => {
        handleSuccess();
      }, 3000);
      return () => {
        clearTimeout(timer);
        handleSuccess();
      };
    }
  }, [showSuccessBox, dispatch]);

  return (
    <CorrectionContainer>
      {loading && <Loading />}
      {showSuccess && <SuccessBox description="정정내역이 성공적으로 삭제되었습니다." handleSuccess={handleSuccess} />}
      <Profile profileData={profileData} />
      <CorrectionBox>
        <CorrectTitle>정정내역</CorrectTitle>

        {correctionRequests?.map((data) => (
          <Card key={data.id} data={data} text={'취소'} src={iconSrc} onCardClick={() => onCardClick(data.id)} />
        ))}
      </CorrectionBox>
    </CorrectionContainer>
  );
};

export default CorrectionRequestRecords;

const CorrectionContainer = styled.div`
  min-width: 350px;
  max-height: calc(100% - 40px);
  overflow-y: auto;
`;

const CorrectionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;
const CorrectTitle = styled.h1`
  margin-top: 20px;
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-h3);
  line-height: var(--line-height-h3);
`;
