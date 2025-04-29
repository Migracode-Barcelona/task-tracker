import { useState, useEffect } from 'react';

export const useFetchData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:3333/tasks');
        if (!response.ok) throw new Error('Failed to fetch');
        const tasks = await response.json();
        setData(tasks); // No transformation - use backend data as-is
        console.log('Raw API response:', tasks); // Log here for debugging
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, isLoading, error };
};
