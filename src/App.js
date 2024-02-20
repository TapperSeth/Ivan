import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LogtoProvider } from '@logto/react';

import Home from './pages/home';
import Callback from './pages/callback';

import { appId, endpoint } from './config';

const App = () => {
  const config = {
    appId: appId,
    endpoint: endpoint
  };

  return (
    <BrowserRouter>
      <LogtoProvider config={config}>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/callback' element={<Callback/>}></Route>
        </Routes>
      </LogtoProvider>
      
    </BrowserRouter>
  );
}

export default App;
