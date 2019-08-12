import React, { useContext } from 'react';
import UserContext from "../contexts/UserContext";

function Info() {
  const user = useContext(UserContext);

  return <h1>My Context info: my name is {user.name} and I have a {user.car}</h1>
}

export default Info;