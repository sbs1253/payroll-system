import styled from 'styled-components';

const ProfileImage = ({ src, alt }) => {
  return (
    <div>
      <ProfileImageItem src={src} alt={alt} />
    </div>
  );
};

export default ProfileImage;

const ProfileImageItem = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 50%;
  object-fit: contain;
`;
