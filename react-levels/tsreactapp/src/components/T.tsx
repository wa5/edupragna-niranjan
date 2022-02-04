import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Autocomplete, TextField } from '@mui/material';

export default function T() {
  return (
    <>
   
      <Typography 
noWrap
        >
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa odio fugit architecto itaque, soluta officia quo maiores doloremque consequuntur nihil animi! Ab nulla vel dicta nesciunt obcaecati veniam ut architecto!
      </Typography>
      <Autocomplete renderInput={(params) => <TextField {...params} label="moie" />} options={["hhh","jjj"]} />  </>
  );
}
