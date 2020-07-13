import { createElement, FC, lazy, Suspense } from 'react';
import { HashRouter } from 'react-router-dom';
import { App } from './';

const Nav = lazy(() => import('app/components/nav/nav'));

export const Main: FC = () => (
  //TODO Make a main app loader
  <Suspense fallback="loading..">
    <HashRouter>
      <div className="main-container">
        <Nav>
          <App />
        </Nav>
      </div>
    </HashRouter>
  </Suspense>
);
