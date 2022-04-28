import "./App.css";

function App() {
  const getData = async (url) => {
    const newData = await fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => res.json());
    console.log(newData);
  };

  //on load - getData, call it as a function, save it, and check inspection tool>console to see results

  getData("/api");

  return <div className="App">test2</div>;
}

export default App;
