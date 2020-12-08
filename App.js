import React, {useState, useEffect} from 'react';
import {Loading} from './ios/scenes/';
import {Main} from './ios/scenes/';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const showLoadingScreen = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    };
    showLoadingScreen();
  }, []);

  return (
    <>
      {loading && <Loading />}
      {!loading && <Main />}
    </>
  );
};

export default App;
