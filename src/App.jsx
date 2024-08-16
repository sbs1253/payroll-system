import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes/themes';
import { GlobalStyle } from './themes/GlobalStyle';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/store';
import Home from './page/user/Home';
import Login from './page/user/Login';
import Navbar from '@components/Navbar';
import PayrollDetails from './page/user/PayrollDetails';
import CorrectionRequestRecords from './page/user/CorrectionRequestRecords';
import Layout from './page/user/Layout';

function App() {
  const [mode, setMode] = useState('light');

  const toggleTheme = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <BrowserRouter>
          <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
            <GlobalStyle />
            <Navbar onClick={toggleTheme} mode={mode} />

            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="payroll-details" element={<PayrollDetails />} />
                <Route path="correction-request-records" element={<CorrectionRequestRecords />} />
              </Route>
              <Route path="/login" element={<Login />} />
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
