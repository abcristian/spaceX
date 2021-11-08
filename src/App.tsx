import React from "react";
import {Provider} from "react-redux";

import {store} from "./redux/configStore";
import {Launches} from "./screens/launches";

const App: React.FC<any> = () => {
  return (
    <Provider store={store}>
      <Launches />
    </Provider>
  );
};

export default App;
