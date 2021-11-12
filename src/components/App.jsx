import { StoreProvider, createStore } from "easy-peasy";
import model from "../js/model";
import Footer from "./Footer";
import TopNavigator from "./TopNavigator";
import Switcher from "./Switcher";
import background from "../assets/brain.jpeg";

const store = createStore(model);

const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <StoreProvider store={store}>
        <div className="m-0">
          <TopNavigator />
          <div className="columns p-4 full-width m-0">
            <Switcher />
          </div>
          <Footer />
        </div>
      </StoreProvider>
    </div>
  );
};

export default App;
