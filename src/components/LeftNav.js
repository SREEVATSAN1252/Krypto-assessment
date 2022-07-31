import React from 'react'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import AppsIcon from '@mui/icons-material/Apps';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import TableChartIcon from '@mui/icons-material/TableChart';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SettingsIcon from '@mui/icons-material/Settings';
const LeftNav = () => {


  return (
    <div className='leftNav' style={{display:"flex",flexDirection:"column" ,backgroundColor:"#1e2128",color:"white",padding:"20px"}}>
        <TrendingFlatIcon style={{padding:"30px"}}/>
        <div style={{display:"flex", flexDirection:"column"}}>
<AppsIcon style={{padding:"30px"}}/>
<AssessmentIcon style={{padding:"30px"}}/>
<AnalyticsIcon style={{padding:"30px"}}/>
<TableChartIcon style={{padding:"30px"}}/>
<CardGiftcardIcon style={{padding:"30px"}}/>
<WorkspacePremiumIcon style={{padding:"30px"}}/>
<SettingsIcon style={{padding:"30px"}}/>




        </div>

    </div>
  )
}

export default LeftNav