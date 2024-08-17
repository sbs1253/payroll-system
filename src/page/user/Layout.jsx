import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Layout() {
  const userisLogin = useSelector((state) => state.user.isLogin);

  if (!userisLogin) {
    return <Navigate to={{ pathname: '/login' }} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
}
