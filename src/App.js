import React,{useState} from 'react';
import { Modals } from './components/modalTest/Modals';
import { ModalContainer } from './containers/modal/ModalContainer';

const App = () => {

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(!openModal);

  return (
    <React.Fragment>
      {/* <ModalContainer openModal= {openModal} handleOpenModal= {handleOpenModal} setOpenModal= {setOpenModal}/> */}
      <Modals />
    </React.Fragment>
  );
}

export default App;
