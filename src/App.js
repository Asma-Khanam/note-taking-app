import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  TextField,
  Button,
  Grid,
  Paper,
  Box
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// import Image from '/Users/asmakhanam/Desktop/Note-taking/note-taking-app/src/images/calender.jpg';

const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#6257e3', 
      },
      secondary: {
        main: '#2e266d', 
      },
    },
  }
);

const NoteTakingApp = () => {
  const [dailyNotes, setDailyNotes] = useState({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  });
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [newNote, setNewNote] = useState('');

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const addNote = () => {
    if (newNote.trim() !== '') {
      const updatedNotes = { ...dailyNotes };
      updatedNotes[selectedDay].push(newNote);
      setDailyNotes(updatedNotes);
      setNewNote('');
    }
  };

  const deleteNote = (day, index) => {
    const updatedNotes = { ...dailyNotes };
    updatedNotes[day].splice(index, 1);
    setDailyNotes(updatedNotes);
  };

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppBar position="static">
          <Toolbar style={{ backgroundColor: '#6257e3', padding: '0.1rem', marginTop: 'auto', fontFamily:'', fontSize:'2rem'}}>
            <Typography variant="h6"style={{ padding: '0.5rem' , fontWeight:'900'}} >Note Taking App</Typography>
            
          </Toolbar>
        </AppBar>
        <Container style={{ marginTop: '2rem', flex: '1' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper elevation={3} style={{ padding: '1rem' }}>
                <Typography variant="h6">Select a Day:</Typography>
                {Object.keys(dailyNotes).map((day) => (
                  <Button
                    key={day}
                    variant={selectedDay === day ? 'contained' : 'outlined'}
                    onClick={() => handleDayChange(day)}
                    style={{ marginRight: '0.5rem', marginTop: '0.5rem' }}
                  >
                    {day}
                  </Button>
                ))}
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} style={{ padding: '1rem' }}>
                <TextField
                  fullWidth
                  label="Add a Note"
                  variant="outlined"
                  value={newNote}
                  onChange={handleNoteChange}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={addNote}
                  style={{ marginTop: '1rem' }}
                >
                  Add 
                </Button>
              </Paper>
            </Grid>


            <Grid item xs={12} sm={6}>
              <Paper elevation={3} style={{ padding: '1rem' }}>
                <Typography variant="h6">Notes for {selectedDay}:</Typography>
                {dailyNotes[selectedDay].map((note, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                    <Typography style={{ flexGrow: 1 }}>{note}</Typography>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => deleteNote(selectedDay, index)}
                    >
                      Delete
                    </Button>
                  </div>
                ))}
              </Paper>
            </Grid>


          </Grid>
          {/* <img src={Image} alt="Calender" style={{ maxWidth: '10%', marginTop: '10px' }} /> */}
        </Container>
        <footer style={{ backgroundColor: '#6257e3', padding: '1rem', marginTop: 'auto' }}>
          <Container maxWidth="md">
            <Typography variant="body2" align="center" color="white" sx={{ fontSize: '20px' }}>
              Made by Asma Khanam
            </Typography>
            
          </Container>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default NoteTakingApp;
