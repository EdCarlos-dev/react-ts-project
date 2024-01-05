import { useState } from 'react'
import Modal from './modal'
import './App.css'
import './index.css'

function ButtonsArea () {
  const [count, setCount] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  // Adiciona uma classe ao body com base no estado de isDarkMode
  document.body.className = isDarkMode ? 'dark-mode' : '';

  return(
    <div className="card">
    <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
    <button onClick={openModal}>Open Modal</button> 
    <button onClick={toggleDarkMode}>Dark Mode</button>
    {isModalOpen && <Modal onClose={closeModal} />} 
  </div>

  )

}

export default ButtonsArea