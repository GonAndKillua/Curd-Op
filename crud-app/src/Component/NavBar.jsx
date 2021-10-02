import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
import Button from "@material-ui/core/Button";

import { Fragment } from "react";
const useStyle = makeStyles({
  header: {
    background: "#111111",
  },
  tabs: {
    color: "#FFFFFF",
    marginRight: 20,
    textDecoration: "none",
    fontSize: 20,
  },
});

const NavBar = () => {
  const isLogin = localStorage.getItem("isLogin");
  let isAdmin = localStorage.getItem("isAdmin");
  isAdmin = isAdmin === "true";
  console.log("NavBar:", isLogin);
  const history = useHistory();
  const logoutHandler = (e) => {
    e.preventDefault();

    localStorage.removeItem("isLogin");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("email");
    window.location.reload();
    history.push("/");
  };

  const classes = useStyle();
  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <NavLink className={classes.tabs} to="/" exact>
          Home Page
        </NavLink>
        {isLogin ? (
          <Fragment>
            <NavLink className={classes.tabs} to="all" exact>
              All Products
            </NavLink>
            {isAdmin && (
              <NavLink className={classes.tabs} to="add" exact>
                Add Product
              </NavLink>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={logoutHandler}
            >
              Log out
            </Button>
          </Fragment>
        ) : (
          <Fragment>
            <NavLink className={classes.tabs} to="login" exact>
              {/* <Button variant="contained" color="primary">
            Login
          </Button> */}
              Login
            </NavLink>
            <NavLink className={classes.tabs} to="Signup" exact>
              {/* <Button variant="contained" color="secondary">
            Sign Up
          </Button> */}
              Sign Up
            </NavLink>
          </Fragment>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
