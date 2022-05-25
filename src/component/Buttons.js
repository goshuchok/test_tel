import { Button } from '@mui/material';
import React from 'react';

export const Buttons = ({ handleAddRow, postResults }) => {
  return (
    <div className="button_group">
      <Button onClick={handleAddRow} variant="contained">
        Add Row
      </Button>
      <Button onClick={postResults} variant="contained" color="success">
        Save Results
      </Button>
    </div>
  );
};
