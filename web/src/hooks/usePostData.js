import { useState } from 'react';

export const usePostData = (endpoint) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async (newTask) => {
    try {
      const jwt = localStorage.getItem('jwt');

      const response = await fetch(`http://localhost:3333/${endpoint}`, {
        method: 'POST',
        body: JSON.stringify(newTask),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
      });
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      console.log('Response:', data);
      setData(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return {
    fetchData,
    error,
    data,
  };
};
