import { useState } from 'react';

export const usePostData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (newTask) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3333/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
      return result; // Return the data for immediate use
    } catch (error) {
      setError(error.message);
      console.error('POST error:', error);
      throw error; // Re-throw to allow handling in component
    } finally {
      setIsLoading(false);
    }
  };

  return {
    fetchData,
    data,
    error,
    isLoading,
  };
};
