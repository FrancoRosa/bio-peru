import { action } from "easy-peasy";

const defaults = {
  wifissid: "wifi_name",
  wifipass: "wifi_password",
};

const getSavedStorage = (key) => {
  return JSON.parse(window.localStorage.getItem(key)) || defaults[key];
};

export default {
  rooms: [],
  setRooms: action((state, rooms) => {
    state.rooms = [...rooms];
  }),
};
