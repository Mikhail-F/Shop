import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";

import store from "./src/Redux/store";
import { AppNavigation } from "./src/navigation/AppNavigation";
import Spinner from 'react-native-loading-spinner-overlay';

import { bootstrap } from "./src/bootstrap";

export default function App() {

  let [loading, setLoading] = useState(true);

  useEffect(() => {
    bootstrap().then(() => setLoading(false));
  }, []);

  if (loading) {
    return <Spinner
      visible={true}
      textContent={'Загрузка...'}
    />;
  }

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
