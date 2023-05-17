import * as React from "react";

import "./styles.css";

import WebcamComponent from "./components/Camera";

export default function App() {
  const [state, setState] = React.useState({
    image: null
  });

  console.log({ state });

  const handleCaptureImage = (photo) => {
    setState({
      image: photo
    });
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <WebcamComponent onCaptureImage={handleCaptureImage} />
    </div>
  );
}
