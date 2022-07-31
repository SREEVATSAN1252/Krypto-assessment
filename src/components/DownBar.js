import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import React from 'react'

const DownBar = () => {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: string,
    ) => {
      setAlignment(newAlignment);
    };
  return (
    <div>
           <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton style={{color:"white"}} value="All orders">orders</ToggleButton>
      <ToggleButton style={{color:"white"}} value="Pending Ordes">Pending Ordes</ToggleButton>
      <ToggleButton style={{color:"white"}} value="Trades">Trades</ToggleButton>
    </ToggleButtonGroup>
    </div>
  )
}

export default DownBar