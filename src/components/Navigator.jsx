import { Link } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";
import {
  getAreas,
  getCriticalLevels,
  getDevices,
  getDeviceTypes,
  getFacilities,
  getMaintainers,
  getMaintenances,
} from "../js/api";

const Navigator = () => {
  const setAreas = useStoreActions((actions) => actions.setAreas);
  const setCriticalLevels = useStoreActions(
    (actions) => actions.setCriticalLevels
  );
  const setDeviceTypes = useStoreActions((actions) => actions.setDeviceTypes);
  const setDevices = useStoreActions((actions) => actions.setDevices);
  const setFacilities = useStoreActions((actions) => actions.setFacilities);
  const setMaintainers = useStoreActions((actions) => actions.setMaintainers);
  const setMaintenances = useStoreActions((actions) => actions.setMaintenances);

  const authenticated = useStoreState((state) => state.authenticated);
  const user = useStoreState((state) => state.user);

  const setUser = useStoreActions((actions) => actions.setUser);
  const setAuthenticated = useStoreActions(
    (actions) => actions.setAuthenticated
  );

  const [show, setShow] = useState(false);

  const handleLogOut = () => {
    setAuthenticated(false);
    setUser({});
  };

  useState(() => {
    setShow(authenticated);
  }, [authenticated]);

  useEffect(() => {
    getAreas().then((res) => {
      setAreas(res);
      getDevices().then((res) => setDevices(res));
      getCriticalLevels().then((res) => setCriticalLevels(res));
    });

    getDeviceTypes().then((res) => setDeviceTypes(res));

    getFacilities().then((res) => setFacilities(res));
    getMaintainers().then((res) => setMaintainers(res));
    getMaintenances().then((res) => setMaintenances(res));
  }, []);

  return (
    <aside className={`menu column is-one-fifth ${!authenticated && "hidden"}`}>
      <div className="card p-4 login">
        <p class="menu-label">Menu</p>
        <ul class="menu-list">
          <li>
            <Link to="/home">Inicio</Link>
          </li>
          <li>
            <Link to="/next_maintenances">Equipos Medicos</Link>
          </li>
        </ul>
        <p class="menu-label"></p>
        <ul class="menu-list ">
          <Link className="has-text-primary" to="/login" onClick={handleLogOut}>
            Salir
          </Link>
        </ul>
      </div>
    </aside>
  );
};

export default Navigator;
