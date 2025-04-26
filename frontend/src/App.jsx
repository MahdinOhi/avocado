import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // API call to Django backend
    axios.get('http://localhost:8000/api/test/')
      .then(response => setMessage(response.data.message))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
