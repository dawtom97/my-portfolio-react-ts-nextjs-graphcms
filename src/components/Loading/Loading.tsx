import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Loading = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleStart = (url: string) => url != router.pathname && setLoading((prev) => !prev);
    const handleComplete = () => setTimeout(() => setLoading((prev) => !prev), 1400);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });
  return loading ? (
    <motion.div>
      <motion.div
        initial={{ y: '-100%' }}
        transition={{ duration: 0.2, ease: 'linear' }}
        animate={{ y: '0' }}
        exit={{ y: '-100%' }}
        className={'spinner-shadow '}
      ></motion.div>
      <motion.div
        initial={{ y: '-100%' }}
        transition={{ delay: 0.2, duration: 0.3, ease: 'linear' }}
        animate={{ y: '0' }}
        exit={{ y: '-100%' }}
        className={'spinner-shadow-second '}
      >
        <div className='spinner' />
      </motion.div>
    </motion.div>
  ) : null;
};
