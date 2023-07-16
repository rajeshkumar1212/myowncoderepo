import React, { lazy, Suspense } from 'react';

const LazyUser = lazy(() => import('./User'));

const User = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyUser {...props} />
  </Suspense>
);

export default User;
