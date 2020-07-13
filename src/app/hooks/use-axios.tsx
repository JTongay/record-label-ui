import axios from 'axios';
import { useEffect, useState } from 'react';

export const useAxios = <T extends unknown>(url: string): [T, any] => {
  const [response, setResponse] = useState<T>(null as T);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!response) {
      const fetchData = async (): Promise<void> => {
        try {
          const res = await axios.get<T>(url);
          setResponse(res.data);
        } catch (e) {
          setError(e);
        }
      };
      fetchData();
    }
  }, [url, response, setResponse, error, setError]);

  return [response, error];
};
