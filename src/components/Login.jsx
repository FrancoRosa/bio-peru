import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import logo from "../assets/new_logo.jpeg";
import { getUsers } from "../js/api";

const Login = () => {
  const authenticated = useStoreState((state) => state.authenticated);
  const setAuthenticated = useStoreActions(
    (actions) => actions.setAuthenticated
  );
  const setUser = useStoreActions((actions) => actions.setUser);

  const userContainer = useRef("");
  const passContainer = useRef("");
  const [message, setMessage] = useState("");
  const [credentials, setCredentials] = useState("");
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const history = useHistory();

  const handleLogin = () => {
    if (
      users.map((u) => u.name).includes(userContainer.current.value) &&
      users.map((u) => u.password).includes(passContainer.current.value)
    ) {
      setMessage("");
      setAuthenticated(true);
      setUser(users.find((u) => u.name == userContainer.current.value));
      history.push("/home");
    } else {
      setMessage("Contraseña o usuario incorrectos");
    }
  };

  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res);
      setLoading(false);
    });
  }, []);

  return (
    <div className="column is-flex is-flex-centered mt-4 contain_login ">
      <div className="card login">
        <div className="card-image">
          <figure className="image is-4by3 rounded">
            <img src={logo} className="p-4" />
          </figure>
        </div>
        <div className="card-content">
          <div className="field">
            <label className="label">Usuario</label>
            <div className="control">
              <input
                className="input"
                type="text"
                ref={userContainer}
                onFocus={() => setMessage("")}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Contraseña</label>
            <div className="control">
              <input
                className="input"
                type="password"
                ref={passContainer}
                onFocus={() => setMessage("")}
              />
            </div>
          </div>
          <p class="help is-danger has-text-centered">{message}</p>
        </div>
        <div className="card-footer">
          <div className="card-footer-item is-flex-direction-column">
            <button
              className={`mb-4 button ${loading && "is-loading"}`}
              onClick={handleLogin}
            >
              Ingresar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
