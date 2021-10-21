import { useStoreState } from "easy-peasy";
import { useParams } from "react-router";
import { getNameById, getParentName } from "../js/helpers";
import MaintenanceList from "./MaintenanceList";

const DeviceDetails = () => {
  let { device_id } = useParams();
  const devices = useStoreState((state) => state.devices);
  const device = devices.find((x) => x.id == device_id);

  const areas = useStoreState((state) => state.areas);
  const facilities = useStoreState((state) => state.facilities);
  const criticalLevels = useStoreState((state) => state.criticalLevels);
  const deviceTypes = useStoreState((state) => state.deviceTypes);

  const {
    name,
    brand,
    model,
    serial,
    area_id,
    device_type_id,
    critical_level_id,
    status,
    last_maintenance,
    next,
  } = device;

  return (
    <div className="column">
      <h1 className="title is-3 mt-4">Detalles de equipo</h1>
      <div className="columns">
        <div className="column">
          <table className="table">
            <tbody>
              <tr>
                <td>Area :</td>
                <td>{getNameById(areas, area_id)}</td>
              </tr>
              <tr>
                <td>Ubicación :</td>
                <td>{getParentName(facilities, areas, area_id)}</td>
              </tr>
              <tr>
                <td>Criticidad :</td>
                <td>{getNameById(criticalLevels, critical_level_id)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="column">
          <table className={`table`}>
            <tbody>
              <tr>
                <td>Nombre :</td>
                <td>{name}</td>
              </tr>
              <tr>
                <td>Marca :</td>
                <td>{brand}</td>
              </tr>
              <tr>
                <td>Modelo :</td>
                <td>{model}</td>
              </tr>
              <tr>
                <td>Serial :</td>
                <td>{serial}</td>
              </tr>
              <tr className="help">
                <td>Tipo :</td>
                <td>{getNameById(deviceTypes, device_type_id)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="column">
          <table className={`table has-background-${status}-light`}>
            <tbody>
              <tr>
                <td>Ultimo Mantenimiento :</td>
                <td>{last_maintenance}</td>
              </tr>
              <tr>
                <td>Proximo Mantenimiento :</td>
                <td>{next}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h1 className="title is-3 mt-4">Ultimos mantenimientos</h1>
      <MaintenanceList device={device} />
    </div>
  );
};

export default DeviceDetails;
