import styled from 'styled-components';
import ProfileInfo from './ProfileInfo';
import ProfileImage from './ProfileImage';
const Profilebox = ({ profileData }) => {
  return (
    <ProfileContainer>
      <ProfileImage src={profileData.imageSrc} alt="Avatar" />
      <ProfileNotification>
        <ion-icon name="notifications-outline"></ion-icon>
      </ProfileNotification>

      <ProfileInfo name={profileData.name} items={profileData.items} />
    </ProfileContainer>
  );
};

export default Profilebox;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 350px;
  height: 250px;
  padding: 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.text.title};
  overflow: hidden;
`;

const ProfileNotification = styled.span`
  position: absolute;
  right: 60px;
  top: 20px;
  font-size: 24px;
`;
