import styled from 'styled-components';

const ButtonBase = styled.button`
  position: relative;
  border: none;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`;

export const LargeButton = styled(ButtonBase)`
  width: 200px;
  height: 40px;
  background-color: ${(props) => props.$bgColor || props.theme.colors.primary.normal};
  color: ${(props) => props.$textColor || props.theme.colors.text.title};
  font-size: 0.8em;
  font-weight: 500;
  letter-spacing: 1px;
  border-radius: 30px;
  margin: 10px;
  overflow: hidden;
  border: none;
  &:hover {
    background-color: ${(props) => props.theme.colors.primary.hover};
  }
`;

export const SmallButton = styled(ButtonBase)`
  background-color: ${(props) => props.$bgColor || props.theme.colors.text.title};
  color: ${(props) => props.$textColor || props.theme.colors.background[1]};
  font-size: var(--font-size-caption);
  font-weight: var(--font-weight-caption);
  text-decoration: none;
  padding: 8px 15px;
  border-radius: 20px;
`;
