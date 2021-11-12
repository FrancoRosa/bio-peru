import { useStoreState } from "easy-peasy";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { getNameById } from "../js/helpers";

const Home = () => {
  const history = useHistory();
  const user = useStoreState((state) => state.user);
  const facilities = useStoreState((state) => state.facilities);
  const maintainers = useStoreState((state) => state.maintainers);
  if (user.name == null) history.push("/login");

  return (
    <div className="column is-flex is-flex-centered contain">
      <div className="card login mr-4">
        <h1 className="title is-3 m-4">
          Bienvenido{" "}
          {user.user_type == "client" && (
            <span className="has-text-grey">
              {getNameById(facilities, user.facility_id)}
            </span>
          )}
          {user.user_type == "maintainer" && (
            <span className="has-text-grey">
              {getNameById(maintainers, user.maintainer_id)}
            </span>
          )}
        </h1>
      </div>
    </div>
  );
};

export default Home;
