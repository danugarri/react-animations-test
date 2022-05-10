import React from 'react';
import { Modals } from './components/modals/Modals';
import './App.css';
import { Home } from './components/home/Home';
import { useModal } from './hooks/useModal';

const App = () => {

  const [isOpenMainModal, openMainModal, closeMainModal]= useModal(false);
  

  return (
    <main id ='app-container'>
      <Home openMainModal= {openMainModal} />
      <Modals openModal= {openMainModal} isOpenMainModal= {isOpenMainModal} closeMainModal= {closeMainModal}/>
    </main>
  );
}

export default App;
