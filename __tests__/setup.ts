import '../__mocks__/mock-react-native-image';
import '../__mocks__/mock-async-storage';

jest.mock('i18n-js', () => {
  return {
    t: (key: string) => `${key}.test`,
  };
});

jest.useFakeTimers();
