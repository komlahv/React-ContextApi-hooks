import React, { useState, useEffect } from 'react';
import UserContext from "./contexts/UserContext";
import InfoWrapper from "./components/InfoWrapper";

function App() {
  const [answer, setAnswer] = useState("yes");

  useEffect(
    () => { console.log('the Effect hook is really cool too'); }
  );

  const userDetails = {
    name: "Victor",
    age: 22,
    car: "Benz"
  }

  return (
    <UserContext.Provider value={userDetails}>
      <InfoWrapper />
      <p>React hooks are awesome right? {answer}</p>
      <button onClick={() => setAnswer("oh yeah, check your console")}> Click me</button>
    </UserContext.Provider>
  );
}

export default App;
