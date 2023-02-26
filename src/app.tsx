import * as React from "react";


import './app.scss'

import RadioButtonGroup from "./components/RadioButtonGroup";

const App: React.FC = () => {


  const options = ["1", "2", "3", "4"]

  return (
    <>
      <RadioButtonGroup options={options} name="group" />
    </>

  )
};

export default App;
