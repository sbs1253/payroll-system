import PacmanLoader from 'react-spinners/PacmanLoader';
import styled from 'styled-components';
const Loading = () => {
  return (
    <Box>
      <PacmanLoader color="#ffffff" size={35} />
    </Box>
  );
};

export default Loading;

const Box = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
`;
