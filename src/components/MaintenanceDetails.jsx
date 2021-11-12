import { useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { getImgURLs, listFiles } from "../js/firebase";

const MaintenanceDetails = () => {
  const { maintenance_id } = useParams();
  const history = useHistory();
  const devices = useStoreState((state) => state.devices);
  const maintenances = useStoreState((state) => state.maintenances);
  const maintenance = maintenances.find((m) => m.id == maintenance_id);
  if (maintenance == null) history.push("/login");

  const maintainers = useStoreState((state) => state.maintainers);
  const device = devices.find((x) => x.id == maintenance.device_id);
  const maintainer = maintainers.find((x) => x.id == maintenance.maintainer_id);
  const [imgURLs, setImgURLs] = useState([]);

  useEffect(() => {
    listFiles(maintenance?.id).then((refs) => {
      getImgURLs(refs).then((res) => setImgURLs(res));
    });
  }, []);

  return (
    <div className="column contain transparency">
      <h1 className="title is-3 mt-4">Detalles del Mantenimiento</h1>
      <div className="columns">
        <div className="column is-one-third is-flex is-flex-centered is-flex-direction-column">
          <table className="table" style={{ borderRadius: "5px" }}>
            <thead>
              <th colSpan="2">Equipo</th>
            </thead>
            <tbody>
              <tr>
                <td>Nombre :</td>
                <td>{device?.name}</td>
              </tr>
              <tr>
                <td>Marca :</td>
                <td>{device?.brand}</td>
              </tr>
              <tr>
                <td>Modelo :</td>
                <td>{device?.model}</td>
              </tr>
              <tr>
                <td>Serial :</td>
                <td>{device?.serial}</td>
              </tr>
            </tbody>
          </table>
          <table className="table" style={{ borderRadius: "5px" }}>
            <thead>
              <th colSpan="2">Encargado</th>
            </thead>
            <tbody>
              <tr>
                <td>Nombre :</td>
                <td>{maintainer?.name}</td>
              </tr>
              <tr>
                <td>DNI :</td>
                <td>{maintainer?.dni}</td>
              </tr>
              <tr>
                <td>Telefono :</td>
                <td>{maintainer?.phone}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="column is-flex is-flex-centered is-flex-direction-column">
          <table className="table" style={{ borderRadius: "5px" }}>
            <thead>
              <th colSpan="2">Mantenimiento</th>
            </thead>
            <tbody>
              <tr>
                <td>Fecha :</td>
                <td>{maintenance?.created_at.split("T")[0]}</td>
              </tr>
              <tr>
                <td>Observaciones :</td>
                <td>{maintenance?.observations}</td>
              </tr>
              <tr>
                <td>Partes :</td>
                <td>{maintenance?.parts}</td>
              </tr>
              <tr>
                <td>Estado anterior :</td>
                <td>{maintenance?.state_before}</td>
              </tr>
              <tr>
                <td>Tipo de mantenimiento :</td>
                <td>{maintenance?.state_after}</td>
              </tr>
              <tr>
                <td>Diagnostico :</td>
                <td>{maintenance?.diagnostic}</td>
              </tr>
              <tr>
                <td>Actividades :</td>
                <td>{maintenance?.activities}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr />
      <div className="column is-flex is-flex-centered is-flex-direction-column">
        {imgURLs.map((imgURL) => (
          <img src={imgURL} alt="" className="m-4" />
        ))}
      </div>
    </div>
  );
};

export default MaintenanceDetails;
