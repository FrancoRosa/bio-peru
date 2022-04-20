import { StoreProvider, createStore } from "easy-peasy";
import model from "../js/model";
import Footer from "./Footer";
import TopNavigator from "./TopNavigator";
import Switcher from "./Switcher";
import background from "../assets/new_brain.jpeg";
import { useLocation } from "react-router-dom";

const store = createStore(model);

const App = () => {
  const router = useLocation();
  const showLayout = !router.pathname.includes("/print_format/");

  return (
    <div
      style={{
        backgroundImage: showLayout ? `url(${background})` : "none",
        backgroundSize: showLayout ? "100% 105%" : "none",
        backgroundPositionY: showLayout ? "-1em" : "none",
        backgroundRepeat: showLayout ? "no-repeat" : "none",
        minHeight: showLayout ? "100vh" : "none",
      }}
    >
      <StoreProvider store={store}>
        <div className="m-0">
          {showLayout && <TopNavigator />}
          <div
            className="columns full-width m-0"
            style={{ padding: "1em 2em" }}
          >
            <Switcher />
          </div>
          {showLayout && <Footer />}
        </div>
      </StoreProvider>
    </div>
  );
};

export default App;
