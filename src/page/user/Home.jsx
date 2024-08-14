import styled from 'styled-components';
import Profile from '@components/profile';
import { useSelector } from 'react-redux';
import Calendar from '@components/calendar/Calendar';
import { useLoading } from '@hooks/useLoading';
import Loading from '@components/Loading';

const Home = () => {
  const profileData = useSelector((state) => {
    return state.user.data.profileData;
  });
  const userStatus = useSelector((state) => {
    return state.user.status;
  });
  const loading = useLoading(userStatus);

  return (
    <HomeContainer>
      {loading && <Loading />}
      <Profile profileData={profileData} />
      <Calendar />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;
