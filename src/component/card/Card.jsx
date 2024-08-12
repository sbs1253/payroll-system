import styled from 'styled-components';
import List from './List';
import { SmallButton } from '../Button.styles';

const Card = ({ data, src, text, onCardClick }) => {
  if (!data) return null;
  return (
    <CardContainer>
      <CardTitle>
        {src ? (
          <img src={src} alt="아이콘" />
        ) : (
          <img
            src="https://image-resource.creatie.ai/129853559902101/129853559902103/7670a02d70b97771fd9d1947c01fb670.png"
            alt="아이콘"
          />
        )}
        <div>
          <h2>{data.title}</h2>
          <p>{data.manager}</p>
        </div>
      </CardTitle>
      <List items={data.items} />
      <CardButton onClick={onCardClick} $text={text}>
        {text}
      </CardButton>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  width: 80%;
  min-width: 350px;
  max-width: 600px;
  padding: 20px;
  margin-top: 20px;
  border: 2px solid ${(props) => props.theme.colors.stroke[3]};
  border-radius: 10px;

  /* <SmallButton $text={'취소'}>{text}</SmallButton> 이렇게 하려고 했으나
      CardContainer안에 선언한 스타일컴포넌트는 <CardContainer $text={'취소'}> 
      이렇게 전달해야 사용할 수 있음*/
  /* ${SmallButton} {
    align-self: flex-end;
    background-color: ${(props) => {
    props.text == '취소' ? props.theme.colors.danger.normal : props.theme.colors.background.primary;
  }};
  } */
`;
const CardTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  & img {
    width: 40px;
    height: 40px;
    border-radius: 6.25px;
    object-fit: cover;
  }
  & h2 {
    font-size: var(--font-size-h4);
    font-weight: var(--font-weight-h4);
    line-height: var(--line-height-h4);
  }
  & p {
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-caption);
    line-height: var(--line-height-caption);
    color: ${(props) => props.theme.colors.text.bodySubtle};
  }
`;

const CardButton = styled(SmallButton)`
  align-self: flex-end;
  background-color: ${(props) =>
    props.$text === '취소' ? props.theme.colors.danger.normal : props.theme.colors.background.primary};
`;
