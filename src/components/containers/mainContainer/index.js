import React from 'react';
// styles
import './style.scss';

const MainContainer = ({ children }) => {
  return (
    <div className='main-container'>
      <div className='main-container__title'>v0.1.0</div>
      <div>{children}</div>
      <div className='main-container__text'>
        <span>Активация Windows</span>
        <span>Что бы активировать Windows,  перейдите в <br /> раздел "Параметры"</span>
      </div>
    </div>
  )
}

export default MainContainer;