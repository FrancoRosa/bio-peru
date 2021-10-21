import axios from "axios";

// export const startControlledPump = async (pump) => {
//   console.log("... starting controlled pump");
//   const { id, pulses, timeout } = pump;
//   const url = `http://${host}:9999/api/startcontrolled`;
//   const response = await axios.post(url, { id, pulses, timeout });
//   return response.data;
// };

// const host = "http://localhost:9999";
const host = "http://localhost:9999";

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
