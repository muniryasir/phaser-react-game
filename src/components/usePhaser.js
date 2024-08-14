import { useCallback } from 'react';
import { callCustomMethod } from './MatchIT';

const usePhaser = () => {
  const callMethod = useCallback(() => {
    callCustomMethod();
  }, []);

  return { callMethod };
};

export default usePhaser;
