import * as React from 'react';
import Box from '@mui/material/Box';

export default function Visibility() {
  return (
    <div style={{ width: '100%' }}>
      <Box
        component="span"
        sx={{
          visibility: 'visible',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
        }}
      >
        Visibility Visible
      </Box>
      <Box
        component="span"
        sx={{
          visibility: 'hidden',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
        }}
      >
        Visibility Hidden
      </Box>
    </div>
  );
}
