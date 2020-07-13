import { createElement, Suspense, FC } from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';

// const Home = React.lazy(() => import('app/sections/home/home'));
import Home from 'app/sections/home/home';
import Login from 'app/sections/login';
import SignUp from 'app/sections/sign-up';

export const App: FC = hot(module)(() => (
  <Suspense fallback={<span>loading....</span>}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  </Suspense>
));
