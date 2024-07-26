import styled from 'styled-components';
import Profilebox from '../../component/profile';
import Card from '../../component/card';
import { useDispatch, useSelector } from 'react-redux';
const PayrollDetails = () => {
  const profileData = useSelector((state) => state.profileData);
  const payrollData = useSelector((state) => state.payrollData);
  return (
    <PayrollContainer>
      <Profilebox profileData={profileData} />
      <PayrollBox>
        <PayrollTitle>급여 명세</PayrollTitle>
        {payrollData.map((data) => (
          <Card payrollData={data} text={'급여 명세 확인'} />
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
  max-width: 800px;
  margin: 0 auto;
`;

const PayrollTitle = styled.h1`
  margin-top: 20px;
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-h3);
  line-height: var(--line-height-h3);
`;
