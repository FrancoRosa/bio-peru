import { StoreProvider, createStore } from "easy-peasy";
import model from "../js/model";
import Footer from "./Footer";
import TopNavigator from "./TopNavigator";
import Switcher from "./Switcher";
import background from "../assets/new_brain.jpeg";

const store = createStore(model);

const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "100% 105%",
        backgroundPositionY: "-1em",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <StoreProvider store={store}>
        <div className="m-0">
          <TopNavigator />
          <div className="columns full-width m-0">
            <Switcher />
          </div>
          <Footer />
        </div>
      </StoreProvider>
    </div>
  );
};

export default App;
