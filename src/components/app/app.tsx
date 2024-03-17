import React, { useEffect } from "react";
import appStyles from "./app.module.css";
import fakeApi from "../../utils/fakeApi";

function App() {
  useEffect(() => {
    fakeApi.getProducts().then((res) => console.log(res));
  }, []);
  return <div className="App"></div>;
}

export default App;
