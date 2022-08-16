import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const LazyHome = lazy(() => import('./pages/Home'));
const LazyAbout = lazy(() => import('./pages/About'));
const LazyContact = lazy(() => import('./pages/Contact'));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback='Loading.....'>
              <LazyHome />
            </Suspense>
          }
        />
        <Route
          path='/about'
          element={
            <Suspense fallback='Loading.....'>
              <LazyAbout />
            </Suspense>
          }
        />
        <Route
          path='/contact'
          element={
            <Suspense fallback='Loading.....'>
              <LazyContact />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
