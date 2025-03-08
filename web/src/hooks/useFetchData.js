import { useEffect, useState } from 'react';

export const useFetchData = (endpoint) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      
      try {
        // Removed extra slash before "http://"
        const response = await fetch(`http://localhost:3333/${endpoint}`);
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        const data = await response.json();
        console.log("🚀 ~ fetchData ~ data:", data)
        
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [endpoint]);
  return {
    isLoading,
    error,
    data,
  };
};
