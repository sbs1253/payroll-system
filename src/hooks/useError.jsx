import { useState, useEffect } from 'react';

export const useError = (status) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(status === 'loading');
  }, [status]);

  return error;
};
