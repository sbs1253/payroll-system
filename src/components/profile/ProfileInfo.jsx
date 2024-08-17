import styled from 'styled-components';
import Table from './Table';
const ProfileInfo = ({ name, items }) => (
  <ProfileInfoBox>
    <ProfileName>{name}</ProfileName>
    <ProfileList>
      {items.map((item, idx) => (
        <Table key={idx} label={item.label} value={item.value} />
      ))}
    </ProfileList>
  </ProfileInfoBox>
);

export default ProfileInfo;

const ProfileInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;
const ProfileName = styled.h1`
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-h2);
  line-height: var(--line-height-h2);
`;
const ProfileList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
`;
