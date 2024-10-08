import React from 'react'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';

import useMediaQuery from '@mui/material/useMediaQuery';
import {
  useColorScheme,
} from '@mui/material/styles';

function ModelSelect() {
    const { mode, setMode } = useColorScheme();
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  
    const handleChange = (event) => {
      setMode(event.target.value);
    };
  
    return (
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
        <Select
          labelId="label-select-dark-light-mode"
          id="demo-select-small"
          value={mode}
          label="Mode"
          onChange={handleChange}
        >
          <MenuItem value="light">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <LightModeIcon fontSize='small' />
              Light
            </Box>
          </MenuItem>
          <MenuItem value="dark">
           <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <DarkModeIcon fontSize='small'  />
            Dark
            </Box>
          </MenuItem>
          <MenuItem value="system">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <SettingsBrightnessIcon fontSize='small' />
              System
            </Box>
          </MenuItem>
        </Select>
      </FormControl>
    );
  }

export default ModelSelect
