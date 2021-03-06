import { useEffect, useRef, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useHistory, useParams } from "react-router";
import { saveMaintenance } from "../js/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { uploadFiles } from "../js/firebase";
import { thisDate } from "../js/helpers";

const SaveFormat = () => {
  const user = useStoreState((state) => state.user);
  const addMaintenance = useStoreActions((actions) => actions.addMaintenance);
  const updateDeviceMaintenance = useStoreActions(
    (actions) => actions.updateDeviceMaintenance
  );
  const [inputMainType, setInputMainType] = useState("Preventivo");
  const [maintenanceDate, setMaintenanceDate] = useState(thisDate());
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
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
      created_at: maintenanceDate,
    };
    if (params.observations != "") {
      setLoading(true);
      setMessage("Guardando imagen");
      saveMaintenance(params).then((res) => {
        addMaintenance(res);
        updateDeviceMaintenance(res);
        uploadFiles(res.id, selectedFiles).then(() => {
          history.push(`/device_details/${device_id}`);
        });
      });
    } else {
      setMessage("A??ada almenos una observacion");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedFiles([...selectedFiles, file]);
  };

  const removeFile = (file) => {
    const files = [...selectedFiles];
    files.splice(files.indexOf(file), 1);
    setSelectedFiles(files);
  };

  return (
    <div className="column transparency mr-4 mt-4">
      <h1 className="title is-3 mt-4">Guardar formato</h1>
      <div className="columns">
        <div className="column"></div>
        <div className="column is-half">
          <div className="field is-flex is-justify-content-space-between">
            <label className="label">Fecha de mantenimiento:</label>
            <input
              className="input"
              type="date"
              value={maintenanceDate}
              onChange={(e) => setMaintenanceDate(e.target.value)}
              style={{ width: "15em" }}
            />
          </div>
          <hr />
          <div>
            <div className="field">
              <label className="label">Observaciones</label>
              <div className="control">
                <input ref={inputObs} className="input" type="text" />
              </div>
            </div>
            <div className="field">
              <label className="label">Partes</label>
              <div className="control">
                <input ref={inputParts} className="input" type="text" />
              </div>
            </div>
            <div className="field">
              <label className="label">Estado anterior</label>
              <div className="control">
                <input ref={inputStateBef} className="input" type="text" />
              </div>
            </div>
            <div className="field">
              <label className="label">Estado Actual</label>
              <div className="control">
                <input ref={inputStateNow} className="input" type="text" />
              </div>
            </div>
            <div className="field">
              <label className="label">Tipo de mantenimiento</label>
              <div className="control">
                <div className="select">
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
            <div className="field">
              <label className="label">Diagnostico</label>
              <div className="control">
                <input ref={inputDiagnosis} className="input" type="text" />
              </div>
            </div>
            <div className="field">
              <label className="label">Actividades</label>
              <div className="control">
                <textarea
                  ref={inputActivities}
                  className="input"
                  type="text"
                  style={{ height: "5em" }}
                />
              </div>
            </div>

            <div className="columns">
              {selectedFiles.map((f) => (
                <div className="column is-flex is-flex-centered is-flex-direction-column mb-4">
                  <img src={URL.createObjectURL(f)} alt="" />
                  <button
                    className="button is-primary remove-img"
                    onClick={() => removeFile(f)}
                  >
                    Quitar
                  </button>
                </div>
              ))}
            </div>
            {selectedFiles.length < 3 && (
              <div className="file is-link">
                <label className="file-label">
                  <input
                    className="file-input"
                    type="file"
                    name="photo"
                    onChange={handleFileChange}
                    accept="image/*"
                  />
                  <span className="file-cta">
                    <span className="file-icon">
                      <FontAwesomeIcon icon={faUpload} />
                    </span>
                    <span className="file-label">Subir imagen</span>
                  </span>
                </label>
              </div>
            )}
          </div>

          <div className="is-flex is-flex-centered mt-4 is-flex-direction-column">
            <button
              className={`button is-outlined is-success ${
                loading && "is-loading"
              }`}
              onClick={handleRegister}
              disabled={selectedFiles == 0}
            >
              Registrar
            </button>
            {selectedFiles == 0 && (
              <p className="help">A??ada almenos una imagen</p>
            )}
            <p className="help">{message}</p>
          </div>
        </div>
        <div className="column"></div>
      </div>
    </div>
  );
};

export default SaveFormat;
