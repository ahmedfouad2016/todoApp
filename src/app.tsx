import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppNavigation} from 'navigation';
import {Splash} from 'containers/Splash';
import {store, persistedStore} from 'store';
import {I18nManager} from 'react-native';
import './i18n';
import {setLocal} from 'i18n';

const App: React.FC<{}> = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getLang = async () => {
      try {
        const value = await AsyncStorage.getItem('@current_lang');
        return value;
      } catch (e) {
        return null;
      }
    };

    const init = async () => {
      const currentLang = await getLang();
      if (currentLang) {
        I18nManager.allowRTL(currentLang === 'ar');
        I18nManager.forceRTL(currentLang === 'ar');
        setLocal(currentLang);
      }
      setIsLoading(false);
    };
    init();
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
