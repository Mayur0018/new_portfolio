import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const useTyped = (selector, options) => {
  const typedRef = useRef(null);

  useEffect(() => {
    typedRef.current = new Typed(selector, options);
    return () => {
      typedRef.current.destroy();
    };
  }, [selector, options]);
};

export default useTyped;
