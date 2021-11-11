import { useRef, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useHistory, useParams } from "react-router";
import { saveMaintenance } from "../js/api";

const SaveFormat = () => {
  const user = useStoreState((state) => state.user);
  const addMaintenance = useStoreActions((actions) => actions.addMaintenance);
  const updateDeviceMaintenance = useStoreActions(
    (actions) => actions.updateDeviceMaintenance
  );
  const [inputMainType, setInputMainType] = useState("Preventivo");
  const { device_id } = useParams();
  const inputObs = useRef();
  const inputParts = useRef();
  const inputStateBef = useRef();
  const inputStateNow = useRef();
  const inputDiagnosis = useRef();
  const inputActivities = useRef();
  const history = useHistory();

  const handleRegister = () => {
    const params = {
      observations: inputObs.current.value,
      parts: inputParts.current.value,
      state_before: inputStateBef.current.value,
      state_after: inputStateNow.current.value,
      maintenance_type: inputMainType,
      diagnostic: inputDiagnosis.current.value,
      activities: inputActivities.current.value,
      maintainer_id: user.maintainer_id,
      device_id,
    };
    saveMaintenance(params).then((res) => {
      addMaintenance(res);
      updateDeviceMaintenance(res);
    });
    history.push(`/device_details/${device_id}`);
  };

  return (
    <div className="column mr-4 mt-4">
      <h1 className="title is-3 mt-4">Guardar formato</h1>
      <div>
        <div class="field">
          <label class="label">Observaciones</label>
          <div class="control">
            <input ref={inputObs} class="input" type="text" />
          </div>
        </div>
        <div class="field">
          <label class="label">Partes</label>
          <div class="control">
            <input ref={inputParts} class="input" type="text" />
          </div>
        </div>
        <div class="field">
          <label class="label">Estado anterior</label>
          <div class="control">
            <input ref={inputStateBef} class="input" type="text" />
          </div>
        </div>
        <div class="field">
          <label class="label">Estado Actual</label>
          <div class="control">
            <input ref={inputStateNow} class="input" type="text" />
          </div>
        </div>
        <div class="field">
          <label class="label">Tipo de mantenimiento</label>
          <div class="control">
            <div class="select">
              <select
                value={inputMainType}
                onChange={(e) => setInputMainType(e.target.value)}
              >
                <option value="Preventivo">Preventivo</option>
                <option value="Correctivo">Correctivo</option>
                <option value="Instalacion">Instalacion</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Diagnostico</label>
          <div class="control">
            <input ref={inputDiagnosis} class="input" type="text" />
          </div>
        </div>
        <div class="field">
          <label class="label">Actividades</label>
          <div class="control">
            <textarea
              ref={inputActivities}
              class="input"
              type="text"
              style={{ height: "5em" }}
            />
          </div>
        </div>
        <div class="file has-name is-boxed">
          <label class="file-label">
            <input class="file-input" type="file" name="resume" />
            <span class="file-cta">
              <span class="file-label">Seleccionar foto</span>
            </span>
            <span class="file-name">
              Screen Shot 2017-07-29 at 15.54.25.png
            </span>
          </label>
        </div>
      </div>
      <button
        className="button is-outlined is-success"
        onClick={handleRegister}
      >
        Registrar
      </button>
    </div>
  );
};

export default SaveFormat;
