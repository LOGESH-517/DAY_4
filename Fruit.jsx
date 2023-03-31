import React from 'react'
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
const FRUITS = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];

function Fruit() {
  const [name, setName] = useState('');
  const [fruit, setFruit] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello, ${name}! Your favorite fruit is ${fruit}.`);
  };

  return (
    <div style={{marginTop:"30vh",backgroundColor:"#D6E4E5"}}>
    <form onSubmit={handleSubmit} >
      <TextField 
        label="Name"
        data-testid="name"
        value={name}
        variant="outlined"
        onChange={(event) => setName(event.target.value)}
        style={{marginTop:"3vh"}}
      />
      <Autocomplete
        data-testid="autocomplete"
        options={FRUITS}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <div style={{paddingLeft:"44vw",marginTop:"2vh",marginBottom:"2vh"}}>
          <TextField
            {...params}
            label="Choose a fruit"
            variant="outlined"
            style={{width:"12vw"}}
          /></div>
        )}
        value={fruit}
        onChange={(event, value) => setFruit(value)}
        style={{width:"10vw",}}
      />
      <Button
        data-testid="button"
        type="submit"
        variant="contained"
        color="secondary"
        style={{marginBottom:"3vh"}}
      >
        Submit
      </Button>
    </form>
    </div>
  );
}

export default Fruit;