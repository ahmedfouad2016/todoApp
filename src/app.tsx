import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {AppNavigation} from 'navigation';
import {Splash} from 'containers/Splash';
import {store, persistedStore} from 'store';

const App: React.FC<{}> = () => {
  // return <Splash />;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
