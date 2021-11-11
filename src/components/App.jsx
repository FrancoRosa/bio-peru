import { Switch, Redirect, Route } from "react-router-dom";
import { StoreProvider, createStore } from "easy-peasy";
import NextMaintenances from "./NextMaintenances";
import NewReport from "./NewReport";
import Home from "./Home";
import Navigator from "./Navigator";
import model from "../js/model";
import DeviceDetails from "./DeviceDetails";
import PrintFormat from "./PrintFormat";
import SaveFormat from "./SaveFormat";
import Login from "./Login";
import Footer from "./Footer";

const store = createStore(model);

const App = () => {
  return (
    <div className="container m-4 is-fullhd">
      <div className="columns">
        <StoreProvider store={store}>
          <Navigator />
          <Switch>
            <Redirect exact from="/" to="/login" />
            <Route path="/home" component={Home} />
            <Route path="/new_report" component={NewReport} />
            <Route path="/next_maintenances" component={NextMaintenances} />
            <Route
              path="/device_details/:device_id"
              component={DeviceDetails}
            />
            <Route path="/print_format/:device_id" component={PrintFormat} />
            <Route path="/save_format/:device_id" component={SaveFormat} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Login} />
          </Switch>
        </StoreProvider>
      </div>
      <Footer />
    </div>
  );
};

export default App;
