import { useStoreState } from "easy-peasy";

const MaintenanceList = ({ device }) => {
  const { id } = device;
  const maintenances = useStoreState((state) => state.maintenances);
  const deviceMaintenances = maintenances.filter((m) => m.device_id === id);
  return (
    <>
      {maintenances.length === 0 ? (
        <p> No hay registro de mantenimientos</p>
      ) : (
        <table className="table is-narrow is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Observaciones</th>
              <th>Estado Ant.</th>
              <th>Estado Des.</th>
              <th>Tipo de Man.</th>
              <th>Encargado</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {deviceMaintenances.map((m) => (
              <tr>
                <td>{m.observations}</td>
                <td>{m.state_before}</td>
                <td>{m.state_after}</td>
                <td>{m.maitenance_type}</td>
                <td>{m.maintainer_id}</td>
                <td>{m.created_at.split("T")[0]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default MaintenanceList;
