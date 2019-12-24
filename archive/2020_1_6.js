
// TIP: Code split your client side routes
// with React.lazy() and dynamic import!

import React from 'react';
import { Switch, Route } from 'react-router';

const Routes = () => {
  const IndexPage = React.lazy(() => import('./IndexPage'));
  const ProfilePage = React.lazy(() => import('./ProfilePage'));
  const AboutPage = React.lazy(() => import('./AboutPage'));

  return (
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/about" component={AboutPage} />
    </Switch>
  );
}

