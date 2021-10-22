import { Link } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";
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

  useEffect(() => {
    getAreas().then((res) => setAreas(res));
    getDeviceTypes().then((res) => setDeviceTypes(res));
    getDevices().then((res) => {
      setDevices(res);
      getCriticalLevels().then((res) => setCriticalLevels(res));
    });
    getFacilities().then((res) => setFacilities(res));
    getMaintainers().then((res) => setMaintainers(res));
    getMaintenances().then((res) => setMaintenances(res));
  }, []);

  return (
    <>
      {authenticated && (
        <aside className="menu column is-one-fifth">
          <p class="menu-label">Menu</p>
          <ul class="menu-list">
            <li>
              <Link to="/home">Inicio</Link>
            </li>
            <li>
              <Link to="/next_maintenances">Equipos Medicos</Link>
            </li>
          </ul>
        </aside>
      )}
    </>
  );
};

export default Navigator;
