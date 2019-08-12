import React, { useState, useEffect } from 'react';
import UserContext from "./contexts/UserContext";
import InfoWrapper from "./components/InfoWrapper";

function App() {
  //use state hook to use state in functions
  const [answer, setAnswer] = useState("yes");

  //use effect hook to use lifecycle in functions
  useEffect(
    () => { console.log('the Effect hook is really cool too'); }, [answer] //let it know we are watching for changes in answer

  );

  const userDetails = {
    name: "Victor",
    age: 22,
    car: "Benz",
    changeName: (newName) => {
      userDetails.name = newName;
      setAnswer("Updated");
    }
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
