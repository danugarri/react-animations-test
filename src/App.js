import React,{useState} from 'react';
import { Modals } from './components/modalTest/Modals';
import { ModalContainer } from './containers/modal/ModalContainer';
import './App.css';

const App = () => {

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(!openModal);

  return (
    <main id ='app-container'>
      <ModalContainer openModal= {openModal} handleOpenModal= {handleOpenModal} setOpenModal= {setOpenModal}/>
      <Modals />
    </main>
  );
}

export default App;
