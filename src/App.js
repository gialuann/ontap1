import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import styled from 'styled-components';
import Bimcal from './components/Bim'


const WrapperMenu = styled('div')`
  border: 1px solid blue;
  margin-bottom: 20px;
`
function App() {
  const navigate = useNavigate()


  const [value, setValue] = React.useState(30);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function handleBIMcalculateClick() {
    navigate('/Bim')
  }
  return (
    <div className="App">
      
      <WrapperMenu>

       <Button onClick={handleBIMcalculateClick}>BIM Calculator</Button>
        {/* <Button onClick={handleClockClick}>Clock</Button>
        <Button onClick={handleRandomClick}>RandomNumber</Button>
        <Button onClick={handleGalleryClick}>Gallery</Button> */}
       
    </WrapperMenu>
     <Routes>
     {/* <Route path='/clock' element={<Clock />} />
     <Route path='/random' element={<RandomNumber />} /> */}
     
     {/* <Route path='/gallery' element={<Gallery dataImage={dataGallery}/>} /> */}
     <Route path='/Bim' element={<Bimcal/>} />
   </Routes>
   </div>
  );
}

export default App;
