import { useStoreState } from "easy-peasy";
import { getNameById } from "../js/helpers";

const Home = () => {
  const user = useStoreState((state) => state.user);
  const facilities = useStoreState((state) => state.facilities);
  return (
    <div className="column">
      <h1 className="title is-3 mt-4">
        Bienvenido <span className="has-text-grey">{user.name}</span>{" "}
      </h1>
      <div>
        {user.user_type == "client" && (
          <p>{getNameById(facilities, user.facility_id)}</p>
        )}
      </div>
    </div>
  );
};

export default Home;
