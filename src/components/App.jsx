import { Switch, Redirect, Route } from "react-router-dom";
import { StoreProvider, createStore } from "easy-peasy";
import NextMaintenances from "./NextMaintenances";
import NewReport from "./NewReport";
import Home from "./Home";
import Navigator from "./Navigator";
import model from "../js/model";
import DeviceDetails from "./DeviceDetails";
import PrintFormat from "./PrintFormat";

const store = createStore(model);

const App = () => {
  return (
    <div className="container m-4 is-fullhd">
      <div className="columns">
        <StoreProvider store={store}>
          <Navigator />
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home" component={Home} />
            <Route path="/new_report" component={NewReport} />
            <Route path="/next_maintenances" component={NextMaintenances} />
            <Route
              path="/device_details/:device_id"
              component={DeviceDetails}
            />
            <Route path="/print_format/:device_id" component={PrintFormat} />
          </Switch>
        </StoreProvider>
      </div>
    </div>
  );
};

export default App;
