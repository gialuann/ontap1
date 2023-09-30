import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from "react";

function Bimcal() {

    const [weight,setWeight] = useState(0)
    const [height,setHeight] = useState(0)

    function handleWeightChange (e){
        setWeight(e.target.value)
    }
    function handleHeightChange (e){
        setHeight(e.target.value)
    }
    return(
        <div>
        <h1>BIM Calculator</h1>
        <div>
        <p>Trọng lượng {weight} kg</p> 
        <Slider min={1} max={200} defaultValue={0} onChange={handleWeightChange} />
        </div>
        <div>
        <p>Chiều cao {height} cm </p>
        <Slider min={1} max={300} defaultValue={0} onChange={handleHeightChange}  />
        </div>
        <div>
        <p>kết qua = {weight/(height*height/10000)}</p> 
        </div>
        </div>
    )
}
export default Bimcal