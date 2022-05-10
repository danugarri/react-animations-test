import React,{useState} from 'react';
import { ModalContainer } from './containers/modal/ModalContainer';

const App = () => {

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(!openModal);

  return (
    <React.Fragment>
      <ModalContainer openModal= {openModal} handleOpenModal= {handleOpenModal} setOpenModal= {setOpenModal}/>
    </React.Fragment>
  );
}

export default App;
