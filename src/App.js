import Test from "./test/Test";
import { Route, Switch } from "react-router-dom";
import AllMeetup from "./pages/AllMeetupPage";
import FavouritPage from "./pages/FavouritPage";
import AddMeetup from "./pages/AddMeetupPage";
import { Link } from "react-router-dom";

import classes from "./App.module.css";

function App() {
  return (
    <>
      <header className={classes.header}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favourit">Favourit</Link>
            </li>
            <li>
              <Link to="/add">Add</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path="/" exact>
          <AllMeetup />
        </Route>
        <Route path="/favourit">
          <FavouritPage />
        </Route>
        <Route path="/add">
          <AddMeetup />
        </Route>
      </Switch>
    </>
  );
}

export default App;
