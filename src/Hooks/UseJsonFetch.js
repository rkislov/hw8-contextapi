import { useState, useEffect } from 'react';
import axios from 'axios';

const UseJsonFetch = (url = '', options = null) => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  const handlerGetData = async () => {
    try {
      if (!loading) {
        setloading(true);
        const response = await axios.get(url);
        setloading(false);
        setdata(response.data);
      }
    } catch (error) {
      // eslint-disable-next-line
      console.error(error);
      setloading(false);
      seterror(error);
    }
  };

  useEffect(() => {
    handlerGetData();
    // eslint-disable-next-line
  }, []);

  return [{ data, loading, error }];
};

export default UseJsonFetch;