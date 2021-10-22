import { useStoreState } from "easy-peasy";

const Home = () => {
  const user = useStoreState((state) => state.user);
  return (
    <div className="column">
      <h1 className="title is-3 mt-4">Bienvenido {user.name}</h1>
    </div>
  );
};

export default Home;
