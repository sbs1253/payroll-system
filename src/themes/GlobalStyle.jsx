import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// styled-components의 createGlobalStyle을 사용하여 글로벌 스타일을 정의
// styled-reset를 사용하여 브라우저 기본 스타일을 초기화
// reset을 리액트에서 사용한 이유는 styled-components를 사용할 때 통일성을 위해서 사용

// createGlobalStyle은 Prettier이 작동하지 않는 오류가 있었음
// styled 라는 키워드를 사용하면 자동완성이 되는 설정을 이용해서
// styled 변수에 createGlobalStyle을 넣어서 사용하면 적용이 잘 됨

const styled = { createGlobalStyle };
export const GlobalStyle = styled.createGlobalStyle`
  ${reset} /* 추가적인 글로벌 스타일 정의 */
:root {
    --font-size-h1: 32px;
    --line-height-h1: 48px;
    --font-weight-h1: 700;

    --font-size-h2: 24px;
    --line-height-h2: 36px;
    --font-weight-h2: 700;

    --font-size-h3: 20px;
    --line-height-h3: 30px;
    --font-weight-h3: 700;

    --font-size-h4: 16px;
    --line-height-h4: 24px;
    --font-weight-h4: 700;

    --font-size-body-bold: 14px;
    --line-height-body-bold: 21px;
    --font-weight-body-bold: 700;

    --font-size-body-regular: 14px;
    --line-height-body-regular: 21px;
    --font-weight-body-regular: 400;

    --font-size-caption: 12px;
    --line-height-caption: 18px;
    --font-weight-caption: 400;
  }

  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.colors.background[2]};
    color: ${(props) => props.theme.colors.text.body};
    font-family: 'Pretendard-Regular' !important;
    overflow: hidden;
  }

  & #root {
    width: 100%;
    height: 100%;
    max-width: 500px;
    margin: auto;
    background-color: ${(props) => props.theme.colors.background[1]};
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    font-family: 'Pretendard Regular', sans-serif !important;
    color: inherit;
  }
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
`;
