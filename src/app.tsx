import React from 'react';
import {Provider} from 'react-redux';
import {AppNavigation} from 'navigation';
import {Splash} from 'containers/Splash';
import {store} from 'store';

const App: React.FC<{}> = () => {
  // return <Splash />;

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
