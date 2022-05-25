import { Box, Button, Grid } from '@mui/material';
import { useState } from 'react';

import './App.css';
import { Buttons } from './component/Buttons';

const data = [
  { name: 'one', mobile: '123 - 23 - 45' },
  { name: 'two', mobile: '123 - 23 - 45' },
  { name: 'three', mobile: '123 - 23 - 45' },
];

export default function App() {
  const [rows, setRows] = useState(data);
  const columnsArray = ['name', 'mobile']; // pass columns here dynamically

  const handleAddRow = () => {
    const item = {};
    setRows([...rows, item]);
  };

  const handleRemoveSpecificRow = (idx) => {
    const tempRows = [...rows]; // to avoid  direct state mutation
    tempRows.splice(idx, 1);
    setRows(tempRows);
  };

  const postResults = () => {
    console.log(rows); // there you go, do as you please
  };

  const updateState = (e) => {
    let prope = e.target.attributes.column.value; // the custom column attribute
    let index = e.target.attributes.index.value; // index of state array -rows
    let fieldValue = e.target.value; // value

    const tempRows = [...rows]; // avoid direct state mutation
    const tempObj = rows[index]; // copy state object at index to a temporary object
    tempObj[prope] = fieldValue; // modify temporary object

    // return object to rows` clone
    tempRows[index] = tempObj;
    setRows(tempRows); // update state
  };

  return (
    <div className="App">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Box>
          <table id="tab_logic">
            <thead>
              <tr>
                <th> # </th>
                {columnsArray.map((column, index) => (
                  <th key={index}>{column}</th>
                ))}
                <th />
              </tr>
            </thead>
            <tbody>
              {rows.map((item, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  {columnsArray.map((column, index) => (
                    <td key={index}>
                      <input
                        className="input"
                        type="text"
                        column={column}
                        value={rows[idx][column] || ''}
                        index={idx}
                        onChange={(e) => updateState(e)}
                      />
                    </td>
                  ))}
                  <td>
                    <Button
                      onClick={() => handleRemoveSpecificRow(idx)}
                      variant="contained"
                      color="error"
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Buttons postResults={postResults} handleAddRow={handleAddRow} />
        </Box>
      </Grid>
    </div>
  );
}
