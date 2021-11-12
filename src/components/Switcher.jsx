import { Switch, Redirect, Route } from "react-router-dom";
import { useStoreState } from "easy-peasy";
import NextMaintenances from "./NextMaintenances";
import NewReport from "./NewReport";
import Home from "./Home";
import DeviceDetails from "./DeviceDetails";
import PrintFormat from "./PrintFormat";
import SaveFormat from "./SaveFormat";
import Login from "./Login";
import MaintenanceDetails from "./MaintenanceDetails";

const Switcher = () => {
  const user = useStoreState((state) => state.user);

  return (
    <Switch>
      {user.name && (
        <>
          <Route path="/home" component={Home} />
          <Route path="/new_report" component={NewReport} />
          <Route path="/next_maintenances" component={NextMaintenances} />
          <Route path="/device_details/:device_id" component={DeviceDetails} />
          <Route
            path="/maintenance_details/:maintenance_id"
            component={MaintenanceDetails}
          />
          <Route path="/print_format/:device_id" component={PrintFormat} />
          <Route path="/save_format/:device_id" component={SaveFormat} />
        </>
      )}

      <Route path="/login" component={Login} />
      <Route path="/" component={Login} />
      <Redirect exact from="/" to="/login" />
    </Switch>
  );
};

export default Switcher;
