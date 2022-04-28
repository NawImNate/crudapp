import "./App.css";
import React, { useState } from "react";

function App() {
  const [returnedData, setReturnedData] = useState("Hello there.");
  const getData = async (url) => {
    const newData = await fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => res.json());
    console.log(newData);
    setReturnedData(newData.result);
  };

  //on load - getData, call it as a function, save it, and check inspection tool>console to see results
  // deleted the call for getData which was calling over and over for the data.

  //define an onclick event with a arrow function as an object, passing the path of quit as the parameter for getData Then display the changes on the screen.
  return (
    <div className="App">
      <button onClick={() => getData("/quit")}>Click</button>
      {returnedData}
    </div>
  );
}

export default App;
