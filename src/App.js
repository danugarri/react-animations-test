import React,{useState} from 'react';
// import { Animation } from './components/animation/Animation';
import { Modal } from './containers/modal/Modal';

const App = () => {

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(!openModal);

  return (
    <React.Fragment>
      <Modal openModal= {openModal} handleOpenModal= {handleOpenModal} setOpenModal= {setOpenModal}/>
    </React.Fragment>
  );
}

export default App;
