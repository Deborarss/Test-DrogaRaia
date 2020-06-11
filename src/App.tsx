import React, { useCallback, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import GlobalStyle from './styles/global';
import imageUrl from './assets/background.jpg';

const App: React.FC = () => {
  const [showTheme, setShowTheme] = useState(false);
  const handleSubmitTheme = useCallback(() => {
    if (!showTheme) {
      setShowTheme(true);
    } else {
      setShowTheme(false);
    }
  }, [showTheme]);

  return (
    <div
      className="App"
      style={{ background: showTheme ? '#191919' : `url(${imageUrl})` }}
    >
      <BrowserRouter>
        <Home handleTheme={handleSubmitTheme} />
        <GlobalStyle />
      </BrowserRouter>
    </div>
  );
};

export default App;
