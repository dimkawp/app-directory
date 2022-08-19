import React, { useEffect, useState } from 'react';
// components
import MainContainer from './components/containers/mainContainer';
import Directories from './components/elements/directories';
// api
import api from './api/api';
// styles
import 'antd/dist/antd.css';
import './assets/main.scss';



const App = () => {
  const [dirs, setDir] = useState([]);

  useEffect(() => {
    api.getDirectory(setDir)
  }, []);

  return (
    <MainContainer>
        <Directories dirs={dirs} />
    </MainContainer>
  );
}

export default App;
