import { StoreProvider, createStore } from "easy-peasy";
import model from "../js/model";
import Footer from "./Footer";
import TopNavigator from "./TopNavigator";
import Switcher from "./Switcher";

const store = createStore(model);

const App = () => {
  return (
    <StoreProvider store={store}>
      <div className="container m-0 is-fullhd">
        <TopNavigator />
        <div className="columns ml-4 mr-4">
          <Switcher />
        </div>
        <Footer />
      </div>
    </StoreProvider>
  );
};

export default App;
