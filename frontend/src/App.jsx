import { useState } from 'react';
import './App.css';
import ButtonAppBar from './TestCmpnts/NavBarTest';
import BarChartTest from './TestCmpnts/BarChartTest';
import BasicButtons from './TestCmpnts/ButtonTest';

function App() {
  

  return (
    <div className="App">
    <BasicButtons />
      <ButtonAppBar />
      <div className='Barchart'>
        <BarChartTest/>
      </div>
    </div>
  )
}

export default App
