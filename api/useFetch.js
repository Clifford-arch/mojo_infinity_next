import { useState, useCallback } from 'react';
import axios from 'axios';

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  // GET request
  const get = useCallback(async (url, config = {}) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(url, config);
      setData(response.data);
      return response.data;
    } catch (err) {
      setError(err.message || 'Something went wrong');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // POST request
  const post = useCallback(async (url, payload, config = {}) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post(url, payload, config);
      setData(response.data);
      return response.data;
    } catch (err) {
      setError(' Something went wrong');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { get, post, loading, error, data };
};

export default useFetch;