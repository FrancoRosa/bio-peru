import axios from "axios";

let host;
if (window.location.hostname == "localhost") {
  host = "http://localhost:3000";
} else {
  host = "https://biomedicas.herokuapp.com";
}

export const getFacilities = async () => {
  console.log("... retrieving facilities");
  const url = host + "/facilities.json";
  const response = await axios.get(url);
  return response.data;
};

export const getDevices = async () => {
  console.log("... retrieving devices");
  const url = host + "/devices.json";
  const response = await axios.get(url);
  return response.data;
};

export const getDeviceTypes = async () => {
  console.log("... retrieving devices");
  const url = host + "/device_types.json";
  const response = await axios.get(url);
  return response.data;
};

export const getAreas = async () => {
  console.log("... retrieving areas");
  const url = host + "/areas.json";
  const response = await axios.get(url);
  return response.data;
};

export const getCriticalLevels = async () => {
  console.log("... retrieving critical levels");
  const url = host + "/critical_levels.json";
  const response = await axios.get(url);
  return response.data;
};

export const getMaintainers = async () => {
  console.log("... retrieving maintainers");
  const url = host + "/maintainers.json";
  const response = await axios.get(url);
  return response.data;
};

export const getMaintenances = async () => {
  console.log("... retrieving maintenances");
  const url = host + `/maintenances.json`;
  const response = await axios.get(url);
  return response.data;
};

export const getUsers = async () => {
  console.log("... retrieving users");
  const url = host + `/users.json`;
  const response = await axios.get(url);
  return response.data;
};

export const saveMaintenance = async (maintenance) => {
  console.log("... saving maintenances");
  const url = host + `/maintenances.json`;
  const response = await axios.post(url, maintenance);
  return response.data;
};
