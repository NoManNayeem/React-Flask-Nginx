import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, CircularProgress, List, ListItem, ListItemText } from '@mui/material';

function App() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/')
      .then(response => response.json())
      .then(data => {
        setMessage(data.message);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });

    fetch('http://localhost:8080/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h2" gutterBottom>
        Welcome to React & Flask Integration!
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <Typography variant="h5" gutterBottom>
          {message}
        </Typography>
      )}

      <Button
        variant="contained"
        color="primary"
        onClick={() => window.alert('Button Clicked!')}
        style={{ marginTop: '20px' }}
      >
        Click Me
      </Button>

      <Typography variant="h4" style={{ marginTop: '40px' }}>
        User List
      </Typography>
      <List>
        {users.map((user) => (
          <ListItem key={user.id}>
            <ListItemText primary={`${user.name} (${user.email})`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default App;
