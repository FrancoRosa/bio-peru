import { action } from "easy-peasy";

export default {
  areas: [],
  setAreas: action((state, areas) => {
    state.areas = [...areas];
  }),

  criticalLevels: [],
  setCriticalLevels: action((state, criticalLevels) => {
    state.criticalLevels = [...criticalLevels];
  }),

  deviceTypes: [],
  setDeviceTypes: action((state, deviceTypes) => {
    state.deviceTypes = [...deviceTypes];
  }),

  devices: [],
  setDevices: action((state, devices) => {
    state.devices = [...devices];
  }),

  facilities: [],
  setFacilities: action((state, facilities) => {
    state.facilities = [...facilities];
  }),

  maintainers: [],
  setMaintainers: action((state, maintainers) => {
    state.maintainers = [...maintainers];
  }),

  maintenances: [],
  setMaintenances: action((state, maintenances) => {
    state.maintenances = [...maintenances];
  }),
};
