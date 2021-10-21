import { Link } from "react-router-dom";
import { useStoreActions } from "easy-peasy";
import { useEffect } from "react";
import {
  getAreas,
  getCriticalLevels,
  getDevices,
  getDeviceTypes,
  getFacilities,
  getMaintainers,
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

  useEffect(() => {
    getAreas().then((res) => setAreas(res));
    getDeviceTypes().then((res) => setDeviceTypes(res));
    getDevices().then((res) => {
      setDevices(res);
      getCriticalLevels().then((res) => setCriticalLevels(res));
    });
    getFacilities().then((res) => setFacilities(res));
    getMaintainers().then((res) => setMaintainers(res));
  }, []);

  return (
    <aside className="menu column is-one-fifth">
      <p class="menu-label">General</p>
      <ul class="menu-list">
        <li>
          <Link to="/home">Inicio</Link>
        </li>
        <li>
          <Link to="/next_maintenances">Equipos Medicos</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Navigator;
