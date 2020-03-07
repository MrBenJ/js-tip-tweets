
// TIP: Want to split up your Webpack bundle
// for your React project? Use React.lazy()
// along with dymanic import!

import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const HomePage = React.lazy(() => import('./HomePage'));
const AboutPage = React.lazy(() => import('./AboutPage'));
const ContactPage = React.lazy(() => import('./ContactPage'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

