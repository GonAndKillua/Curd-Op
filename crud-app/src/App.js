import AllUsers from "./Component/AllUsers";
import AddUser from "./Component/AddUser";
import EditUser from "./Component/EditUser";
import NavBar from "./Component/NavBar";
import NotFound from "./Component/NotFound";
import CodeForInterview from "./Component/CodeForInterview";
import Login from "./Component/Login";
import SignUp from "./Component/SignUp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./Store/AuthContextProvider";
import { Fragment } from "react";

function App() {
  const isLogin = localStorage.getItem("isLogin");
  let isAdmin = localStorage.getItem("isAdmin");

  console.log("APP:", isLogin);
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={CodeForInterview} />
        {isLogin ? (
          <Fragment>
            {" "}
            <Route exact path="/all" component={AllUsers} />
            {isAdmin && (
              <>
                <Route exact path="/add" component={AddUser} />
                <Route exact path="/edit/:id" component={EditUser} />
              </>
            )}
          </Fragment>
        ) : (
          <Fragment>
            <Route exact path="/login" component={Login} />
            <Route exact path="/SignUp" component={SignUp} />
          </Fragment>
        )}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
