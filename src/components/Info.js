import React, { useContext, useState, Fragment } from 'react';
import UserContext from "../contexts/UserContext";

function Info() {
  const user = useContext(UserContext);

  const [info, setInfo] = useState(user)

  return (
    <Fragment>
      <h1>My Context info: my name is {info.name} and I have a {info.car}</h1>
      <button onClick={() => info.changeName("Ben")}>Change Name</button>
    </Fragment>
  )
}

export default Info;