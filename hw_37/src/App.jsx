import React from 'react';
import './index.css';
import './App.css'
import RegistrationForm from './Components/RegistrationForm';

function App() {
  return (
    <div className="wrapper my-0 mx-auto w-96">
      <h1 className='mt-6 text-4xl font-extrabold dark:text-white text-center'>Enter your data!</h1>
      <RegistrationForm />
    </div>
  );
}

export default App;

