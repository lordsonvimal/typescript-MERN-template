import React, {useEffect} from "react";
import axios from "axios";
import log from "../server/logger";

const App = (): JSX.Element => {
  useEffect(() => {
    axios.post("/api/users", {
      name: "user2",
      password: "password",
      passwordConfirmation: "password",
      email: "user2@gmail.com"
    }).then(data => {
      log.info(data);
    })
  }, []);

  return <h1>Template APP</h1>;
};

export default App;
