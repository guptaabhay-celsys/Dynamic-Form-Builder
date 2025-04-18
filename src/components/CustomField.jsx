import React from 'react';
import {Box, InputLabel, MenuItem, FormControl, Select, TextField, OutlinedInput, Chip, Input, Typography} from '@mui/material';

const CustomField = ({ field, value, onChange, error }) => {
  const { id, type, required, items } = field;

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  if (type === 'text') {
    return (
      <Box sx={{ my: 1 }}>
        <TextField
          fullWidth
          defaultValue={value}
          onChange={(e) => onChange(e, field)}
          error={!!error}
          required={required}
          variant="outlined"
        />
        {error && <Typography variant='body1' sx={{fontSize: '10px', color: 'red', marginBottom: '30px'}}>{error}</Typography>}
      </Box>
    );
  }

  if (type === 'singleSelect') {
    return (
      <Box sx={{ minWidth: 120, my: 1 }}>
        <FormControl fullWidth error={!!error}>
          <InputLabel>{field.value}</InputLabel>
          <Select
            value={value}
            required={required}
            label={field.value}
            onChange={(e) => onChange(e, field)}
          >
            {items?.map((item, idx) => (
              <MenuItem key={idx} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {error && <Typography variant='body1' sx={{fontSize: '10px', color: 'red', marginBottom: '30px'}}>{error}</Typography>}
      </Box>
    );
  }

  if (type === 'multiSelect') {
      
    return (
      <Box sx={{ my: 1 }}>
        <FormControl fullWidth error={!!error}>
          <InputLabel>{field.value}</InputLabel>
          <Select
            multiple
            required={required}
            value={value || []}
            onChange={(e) => onChange(e, field)}
            input={<OutlinedInput label={field.value} />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((val) => (
                  <Chip key={val} label={val} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {items?.map((item, idx) => (
              <MenuItem key={idx} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {error && <Typography variant='body1' sx={{fontSize: '10px', color: 'red', marginBottom: '30px'}}>{error}</Typography>}
      </Box>
    );
  }

  return null;
};

export default CustomField;

