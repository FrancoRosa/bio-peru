import userEvent from "@testing-library/user-event";
import { useStoreState } from "easy-peasy";
import { useHistory, useParams } from "react-router";
import { getNameById, getParentName } from "../js/helpers";
import MaintenanceList from "./MaintenanceList";

const DeviceDetails = () => {
  const { device_id } = useParams();
  const history = useHistory();
  const devices = useStoreState((state) => state.devices);
  const user = useStoreState((state) => state.user);
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
      <h1 className="title is-3 mt-4">Detalles del equipo</h1>
      <div className="columns">
        <div className="column">
          <table className="table">
            <tbody>
              <tr>
                <td>Ubicación :</td>
                <td>{getParentName(facilities, areas, area_id)}</td>
              </tr>
              <tr>
                <td>Area :</td>
                <td>{getNameById(areas, area_id)}</td>
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
          <table className={`ml-4 table has-background-${status}-light`}>
            <tbody>
              <tr>
                <td>Último Mantenimiento :</td>
                <td>{last_maintenance}</td>
              </tr>
              <tr>
                <td>Próximo Mantenimiento :</td>
                <td>{next}</td>
              </tr>
            </tbody>
          </table>
          <div className="is-flex is-flex-direction-column mr-4">
            <button
              className="button is-outlined mt-4 mr-4"
              onClick={() => history.push(`/print_format/${device_id}`)}
            >
              Generar Formato
            </button>
            <button
              className="button is-outlined mt-4 mr-4"
              onClick={() => history.push(`/save_format/${device_id}`)}
              disabled={user.user_type != "maintainer"}
            >
              Guardar Formato
            </button>
          </div>
        </div>
      </div>
      <h1 className="title is-3 mt-4">Ultimos mantenimientos</h1>
      <MaintenanceList device={device} />
    </div>
  );
};

export default DeviceDetails;
