import React from 'react'
import { data } from '../data'

const RightBarDown = () => {
  return (
    <div className='rightBardown' style={{backgroundColor:"#1e2128",marginLeft:"10px",borderRadius:"6px"}}>
        <hr color='#32353b'/>
        <h3 style={{color:"green",marginLeft:"80px",padding:"18px"}}>23,935.32 USDC</h3>
        <hr color='#32353b'/>
        <div style={{display:"flex",marginLeft:"50px"}}>
        <div style={{display:"flex",marginLeft:"50px"}}>
  <div style={{color:"green",fontWeight:'600'}}>{data.ethusdc.asks.map((d)=><p>{d[1]}</p>)}</div>
  <div style={{color:"white",marginLeft:"50px",fontWeight:'600'}}>{data.ethusdc.asks.map((d)=><p>{d[0]}</p>)}</div>
</div>
</div>
    </div>
  )
}

export default RightBarDown