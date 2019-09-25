import React, { Suspense } from 'react';
import Home from './Home';

export default function HomeScreen() {
  return (
    <>
      <Suspense fallback={<div>...Loading</div>}>
        <Home />
      </Suspense>
    </>
  )
}
