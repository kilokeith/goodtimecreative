import { useEffect } from 'react';

const useScript = async (resourceUrl, async = false, cb) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = async;
    script.src = resourceUrl;
    document.body.appendChild(script);
    if (cb && typeof cb === 'function') {
      script.onload = cb;
    }

    return () => {
      document.body.removeChild(script);
    };
  }, [resourceUrl, async, cb]);
};

export default useScript;
