import { useState, useEffect } from 'react';

export const useLoading = (status) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(status === 'loading');
  }, [status]);

  return loading;
};
