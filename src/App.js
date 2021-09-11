import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Usestate from "./Usestate/State";
import Useeffect from "./Useeffect/Effect";

function App() {
  return (
    <BrowserRouter>
      <header>
        <div className="title">
          <p>Kelompok 32</p>
        </div>
        <nav>
          <Link className="text" to="/">
            useState
          </Link>
          <Link className="text navtext2" to="/effect">
            useEffect
          </Link>
        </nav>
      </header>
      <Switch>
        <Route path="/" exact component={Usestate} />
        <Route path="/effect" component={Useeffect} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;