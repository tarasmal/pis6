import {useCallback, useEffect, useState} from "react";

function App() {
  const [response, setResponse] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setResponse(json))

  }, [])
  const getResponse = useCallback((user) => user.join(' '), [])
  return (
    <div>
      {
        response.map((item, index) => <div key={index}>{getResponse((Object.values(item)).slice(0, 4))}</div>)
      }
    </div>
  );
}

export default App;
