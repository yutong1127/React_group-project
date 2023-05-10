import { useState, useCallback } from 'react';
import axios from 'axios';

export default function usePut(url, options = {}) {
  const [isLoading, setLoading] = useState(false);

  const put = useCallback(
    async (data) => {
      setLoading(true);
      try {
        const response = await axios.put(url, data, options);
        setLoading(false);
        return response;
      } catch (error) {
        setLoading(false);
        throw error;
      }
    },
    [url, options]
  );

  return { put, isLoading };
}
