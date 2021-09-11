import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import CalcPage from './containers/CalcPage';

const App = () => {
  return (
    <Provider store={store}>
      <CalcPage />
    </Provider>
  );
};

export default App;
