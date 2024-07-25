import { styled } from 'styled-components';
import { media } from '../themes/media';
const ThemeButton = ({ onClick }) => {
  return (
    <SwitchContainer>
      <SwitchBox>
        <input type="checkbox" onClick={onClick} />
        <span className="slider"></span>
      </SwitchBox>
    </SwitchContainer>
  );
};

export default ThemeButton;
const SwitchContainer = styled.div`
  @media ${media.mobilePortrait} {
    position: absolute;
    top: 5px;
    right: 5px;
  }
`;
const SwitchBox = styled.label`
  font-size: 12px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;

  /* Hide default HTML checkbox */
  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  & .slider {
    --background: #28096b;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--background);
    transition: 0.5s;
    border-radius: 30px;
  }

  & .slider:before {
    position: absolute;
    content: '';
    height: 1.4em;
    width: 1.4em;
    border-radius: 50%;
    left: 10%;
    bottom: 15%;
    box-shadow: inset 8px -4px 0px 0px #fff000;
    background: var(--background);
    transition: 0.5s;
  }

  & input:checked + .slider {
    background-color: #522ba7;
  }

  & input:checked + .slider:before {
    transform: translateX(100%);
    box-shadow: inset 15px -4px 0px 15px #fff000;
  }
`;
