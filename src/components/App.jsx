import { Switch, Redirect, Route } from "react-router-dom";
import { StoreProvider, createStore } from "easy-peasy";
import NextMaintenances from "./NextMaintenances";
import Report from "./Report";
import Home from "./Home";
import Navigator from "./Navigator";
import model from "../js/model";

const store = createStore(model);

const App = () => {
  return (
    <div className="container is-widescreen mt-4">
      <div className="columns">
        <StoreProvider store={store}>
          <Navigator />
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home" component={Home} />
            <Route path="/report" component={Report} />
            <Route path="/next_maintenances" component={NextMaintenances} />
          </Switch>
        </StoreProvider>
      </div>
    </div>
  );
};

export default App;
