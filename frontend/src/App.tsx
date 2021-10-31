import React, { useEffect,Fragment } from "react";
import Nbody from "./components/AppBody";
import HistoryScreening from "./components/HistoryScreening";
import Nhead from "./components/AppHeader";
import home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn";

function App() {
  const [token, setToken] = React.useState<String>("");

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    if (getToken) {
      setToken(getToken);
    }
  }, []);

  if (!token) {
    return <SignIn />
  }
  
  return (
    <div>
    <Router>
      
      {token && (
        <Fragment>
        <Nhead />

        <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/HistoryScreening" component={HistoryScreening} />
        <Route exact path="/Nbody" component={Nbody} />
          
        </Switch>
        </Fragment>
      
      )}
      
    </Router>
    </div>
  );
}
///<Route exact path="/บันทึก" component={test} />
export default App;

///
/*
<Route exact path="/" component={Nbody} />
        <Route exact path="/test" component={test} />
  */