import { Avatar } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const Header = () => {
  return (
    <div style={{display:'flex'}} className='header'>
        <div className='one' style={{display:"flex",backgroundColor:"#1e2128",color:"white" ,padding:"25px" , height:"45px",marginLeft:"10px" }}>
        <Avatar src='https://bitcoin.org/img/icons/opengraph.png?1657703267'/>
        <div >
            <h3>Bitcoin</h3>
            <p>BTC/USDC</p>
        </div>
        <ExpandMoreIcon/>

        </div>
        <div className='two' style={{backgroundColor:"#1e2128",color:"white" ,padding:"25px" , height:"45px",marginLeft:"5px"}}>
            <h4>Last price</h4>
            <h4>23,932.4 USDC</h4>
        </div>
        <div className='three' style={{alignItems:"center" ,backgroundColor:"#1e2128",color:"white" ,padding:"25px" , height:"45px",marginLeft:"5px"}}><h4>24h change</h4>
        <h5 style={{color:"green"} }><ArrowUpwardIcon/> +0.00%</h5>
        </div>
        <div className='four' style={{backgroundColor:"#1e2128",color:"white" ,padding:"25px" , height:"45px",marginLeft:"5px"}}><h4>24h Low</h4>
        <h5 style={{color:"green"}}>23,932.4 USDC</h5>
        </div>
        <div className='five' style={{backgroundColor:"#1e2128",color:"white" ,padding:"25px" , height:"45px",marginLeft:"5px"}}><h4>24h High</h4>
        <h5 style={{color:"green"}}> 23,932.4 USDC</h5>
        </div>
        

    </div>
  )
}

export default Header