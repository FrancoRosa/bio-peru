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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopMedical } from "@fortawesome/free-solid-svg-icons";
import { capitalize } from "../js/helpers";

const TopNavigator = () => {
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
  const [showMenu, setShowMenu] = useState(false);

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
    <>
      {authenticated && (
        <nav className="navbar login full-width pl-4 pr-4">
          <div className="navbar-brand">
            <p className="navbar-item">
              <FontAwesomeIcon
                icon={faLaptopMedical}
                size="2x"
                className="has-text-link mr-2 ml-3"
              />
              <span className="title is-3 has-text-link">
                Soluciones Biomedicas Peruanas
              </span>
            </p>
            <div
              className="navbar-burger"
              data-target="navbarExampleTransparentExample"
              onClick={() => setShowMenu(!showMenu)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div
            id="navbarExampleTransparentExample"
            className={`${showMenu && "is-active"} navbar-menu`}
          >
            <div className="navbar-start">
              <Link to="/home" className="navbar-item">
                Inicio
              </Link>
              <Link to="/next_maintenances" className="navbar-item">
                Equipos Medicos
              </Link>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">{capitalize(user.name)}</div>
              <Link
                className="has-text-primary navbar-item"
                to="/login"
                onClick={handleLogOut}
              >
                Salir
              </Link>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default TopNavigator;
