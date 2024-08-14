import { styled } from 'styled-components';
import { useForm } from 'react-hook-form';
import { fetchLoginThunk } from '../../redux/reducer/userThunks';
import { LargeButton, SmallButton } from '../../component/Button.styles';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useLoading } from '../../hooks/useLoading';
import { useError } from '../../hooks/useError';
import Loading from '../../component/Loading';
import { ErrorBox } from '../../component/AlertBox';
import { setShowErrorBox } from '../../redux/reducer/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { userStatus, userIsLogin, userError } = useSelector((state) => ({
    userStatus: state.user.status,
    userIsLogin: state.user.isLogin,
    userError: state.user.error,
  }));

  const loading = useLoading(userStatus);
  const [visible, setVisible] = useState(false);
  const onSubmit = ({ email, password }) => {
    dispatch(fetchLoginThunk({ email, password }));
  };

  useEffect(() => {
    if (userError) {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
        dispatch(setShowErrorBox(false));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [userError, dispatch]);
  if (userIsLogin) {
    return <Navigate to="/" />;
  }
  return (
    <LoginContainer>
      {loading && <Loading />}
      {visible && <ErrorBox description={userError} />}

      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <LoginText>Login</LoginText>
        <LoginInputBox>
          <LoginInputIcon>
            <ion-icon name="information-outline"></ion-icon>
          </LoginInputIcon>
          <LoginInputField
            type="email"
            placeholder="Email"
            id="email"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <ErrorText>필수 입력입니다.</ErrorText>}
        </LoginInputBox>

        <LoginInputBox>
          <LoginInputIcon>
            <ion-icon name="key-outline"></ion-icon>
          </LoginInputIcon>

          <LoginInputField
            placeholder="Password"
            id="password"
            type="password"
            {...register('password', { required: true, minLength: 6 })}
          />
          {errors.password && (
            <ErrorText>
              {errors.password.type === 'required' ? '필수 입력입니다.' : '6자 이상으로 작성해주세요.'}
            </ErrorText>
          )}
        </LoginInputBox>

        <LargeButton type="submit" disabled={loading}>
          Submit
        </LargeButton>
        <SignupBox>
          <p>Don't have any account?</p>
          <SmallButton onClick={(e) => e.preventDefault()}>Sign up</SmallButton>
        </SignupBox>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${(props) => {
    props.theme.colors.background[2];
  }};
`;
const LoginForm = styled.form`
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background[1]};
  padding: 30px 30px 30px 30px;
  border-radius: 30px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.062);
`;
const LoginText = styled.p`
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-h2);
  margin-bottom: 30px;
`;
const LoginInputBox = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 80px;
`;

const LoginInputIcon = styled.span`
  position: absolute;
  left: 10px;
  top: 20px;
`;
const LoginInputField = styled.input`
  width: 100%;
  height: 40px;
  margin: 10px 0;
  padding-left: 30px;
  color: ${(props) => props.theme.colors.text.title};
  background-color: transparent;
  font-size: var(--font-size-body-regular);
  font-weight: var(--font-weight-body-regular);
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.colors.text.caption};
  border-radius: 30px;

  &:focus {
    outline: none;
    border-bottom: 2px solid ${(props) => props.theme.colors.primary.normal};
  }
  &::placeholder {
    color: ${(props) => props.theme.colors.text.bodySubtle};
    font-size: var(--font-size-body-regular);
    font-weight: var(--font-weight-body-regular);
  }
`;

const SignupBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  & p {
    font-size: var(--font-size-body-regular);
    font-weight: var(--font-weight-body-regular);
    color: ${(props) => props.theme.colors.text.title};
  }
`;

const ErrorText = styled.p`
  position: absolute;
  bottom: 0;
  align-self: flex-start;
  color: ${(props) => props.theme.colors.danger.normal};
  font-size: var(--font-size-body-regular);
  font-weight: var(--font-weight-body-regular);
  margin: 5px 0;
`;
