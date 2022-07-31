import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useState } from 'react'
import { data } from '../data';

const RightBar = () => {
console.log(data);
    const [alignment, setAlignment] = React.useState('web');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };
  return (
    <div className='rightBar' style={{padding:"40px",borderRadius:"6px" ,backgroundColor:"#1e2128" ,marginLeft:"10px",height:"400px",width:"300px"}}>
        <ToggleButtonGroup style={{padding:"25px"}}
  color="primary"
  value={alignment}
  exclusive
  onChange={handleChange}
>
  <ToggleButton style={{color:"white"}} value="web">ORDER BOOK</ToggleButton>
  <ToggleButton style={{color:"white"}}  value="android">TRADES</ToggleButton>

</ToggleButtonGroup>
<div style={{display:"flex",marginLeft:"50px"}}>
  <div style={{color:"red",fontWeight:'600'}}>{data.btcusdc.asks.map((d)=><p>{d[1]}</p>)}</div>
  <div style={{color:"white",marginLeft:"50px",fontWeight:'600'}}>{data.btcusdc.asks.map((d)=><p>{d[0]}</p>)}</div>
</div>

    </div>
  )
}

export default RightBar