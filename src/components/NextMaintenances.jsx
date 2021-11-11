import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import {
  getNameById,
  getParentName,
  getTimeStatus,
  getNextMaintenance,
  deviceToString,
} from "../js/helpers";

const NextMaintenances = () => {
  const history = useHistory();
  const areas = useStoreState((state) => state.areas);
  const criticalLevels = useStoreState((state) => state.criticalLevels);
  const devices = useStoreState((state) => state.devices);
  const facilities = useStoreState((state) => state.facilities);
  const user = useStoreState((state) => state.user);

  const setDevices = useStoreActions((actions) => actions.setDevices);

  const [filteredDevices, setFilteredDevices] = useState([]);
  const [beforeFilter, setBeforeFilter] = useState([]);
  const [filteredAreas, setFilteredAreas] = useState([]);
  const [area, setArea] = useState(0);
  const [facility, setFacility] = useState(
    user.user_type == "client" ? user.facility_id : 0
  );
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const applyFilter = () => {
      if (filter.length >= 2) {
        const filtered = beforeFilter.filter((row) =>
          deviceToString(row, areas, facilities, criticalLevels).includes(
            filter.toLocaleLowerCase()
          )
        );
        setFilteredDevices(filtered);
      } else {
        setFilteredDevices(beforeFilter);
      }
    };
    applyFilter();
  }, [filter]);

  useEffect(() => {
    if (facility === 0) {
      setFilteredAreas([...areas]);
      setArea(0);
    } else {
      setFilteredAreas(areas.filter((a) => a.facility_id == facility));
    }
  }, [facility]);

  useEffect(() => {
    if (area === 0) {
      const filterByArea = devices.filter((d) =>
        filteredAreas.map((a) => a.id).includes(d.area_id)
      );
      setFilteredDevices(filterByArea);
      setBeforeFilter(filterByArea);
    } else {
      setFilteredDevices(devices.filter((d) => area === d.area_id));
      setBeforeFilter(devices.filter((d) => area === d.area_id));
    }
  }, [area]);

  useEffect(() => {
    setFilteredDevices(
      devices.filter((d) => filteredAreas.map((a) => a.id).includes(d.area_id))
    );
    setBeforeFilter(
      devices.filter((d) => filteredAreas.map((a) => a.id).includes(d.area_id))
    );
  }, [filteredAreas]);

  useEffect(() => {
    if (devices.length && criticalLevels.length) {
      devices.forEach((d) => {
        d.next = getNextMaintenance(d, criticalLevels);
        d.status = getTimeStatus(d, criticalLevels);
      });
      setDevices([...devices]);
    }
  }, []);

  const handleClick = (device) => {
    history.push(`/device_details/${device.id}`);
  };

  return (
    <div className="column">
      <h1 className="title is-3 mt-4">Equipos Medicos</h1>
      <div className="columns m-4">
        <div className="column">
          <div className="field">
            <label className="label">Ubicación</label>
            <div className="control">
              <div className="select">
                <select
                  disabled={user.user_type == "client"}
                  value={facility}
                  onChange={(e) => setFacility(parseInt(e.target.value))}
                >
                  <option value={0}>Todos</option>
                  {facilities.map((f) => (
                    <option value={f.id}>{f.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="field">
            <label className="label">Area</label>
            <div className="control">
              <div className="select">
                <select
                  value={area}
                  onChange={(e) => setArea(parseInt(e.target.value))}
                  disabled={facility == 0}
                >
                  <option value={0}>Todos</option>
                  {filteredAreas.map((f) => (
                    <option value={f.id}>{f.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="field">
            <label className="label">Filtrar</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </div>
            <p class="help">Tambien puede filtrar por: ok, pronto o demorado</p>
          </div>
        </div>
      </div>

      <table className="table is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Nro</th>
            <th>Ubicacion</th>
            <th>Area</th>
            <th>Denominacion</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Serie</th>
            <th>Criticidad</th>
            <th>Ultimo Man</th>
            <th>Proximo Man</th>
          </tr>
        </thead>
        <tbody>
          {filteredDevices.map((d, i) => (
            <tr
              key={d.id}
              className={"has-background-" + d.status + "-light pointer"}
              onClick={() => handleClick(d)}
            >
              <td>{i}</td>
              <td>{getParentName(facilities, areas, d.area_id)}</td>
              <td>{getNameById(areas, d.area_id)}</td>
              <td>{d.name}</td>
              <td>{d.brand}</td>
              <td>{d.model}</td>
              <td>{d.serial}</td>
              <td>{getNameById(criticalLevels, d.critical_level_id)}</td>
              <td>{d.last_maintenance}</td>
              <td className={"has-text-" + d.status + "-dark"}>{d.next}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NextMaintenances;
