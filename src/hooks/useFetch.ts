import { useEffect, useState } from 'react';

export default function useFetch<T>(fetchFunction: () => Promise<T>): [T | null, boolean, boolean] {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await fetchFunction();
          setData(result);
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [fetchFunction]);
  
    return [data, loading, error];
  }