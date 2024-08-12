import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../redux/reducer/userSlice';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
const Navbar = ({ onClick, mode }) => {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.user.isLogin);
  const dispatch = useDispatch();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    dispatch(clearUser());
  };

  const buttons = [
    {
      onClick: () => handleNavigate('/'),
      icon: <ion-icon name="home-outline"></ion-icon>,
    },
    {
      onClick: () => handleNavigate('/payroll-details'),
      icon: <ion-icon name="cash-outline"></ion-icon>,
    },
    {
      onClick: () => handleNavigate('/correction-request-records'),
      icon: <ion-icon name="file-tray-full-outline"></ion-icon>,
    },
    {
      onClick: isLogin ? handleLogout : () => handleNavigate('/login'),
      icon: isLogin ? <ion-icon name="log-out-outline"></ion-icon> : <ion-icon name="log-in-outline"></ion-icon>,
    },
    {
      onClick,
      icon: mode === 'light' ? <LightModeOutlinedIcon /> : <NightlightOutlinedIcon />,
    },
  ];

  return (
    <NavbarContainer>
      {buttons.map((button, index) => (
        <NavbarButton key={index} onClick={button.onClick}>
          {button.icon}
        </NavbarButton>
      ))}
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.nav`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-width: 350px;
  height: 40px;
  background-color: ${(props) => props.theme.colors.text.title};
  overflow: hidden;
  z-index: 100;
`;

const NavbarButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  transition: all ease-in-out 0.3s;
  cursor: pointer;
  svg,
  & {
    color: ${(props) => props.theme.colors.background[1]};
    font-size: var(--font-size-h3);
    line-height: var(--line-height-body-bold);
    font-weight: var(--font-weight-body-bold);
  }
  &:hover {
    transform: translateY(-3px);
  }
`;
