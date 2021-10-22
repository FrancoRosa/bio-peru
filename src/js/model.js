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
  updateDeviceMaintenance: action((state, maintenance) => {
    state.devices = state.devices.map((d) =>
      d.id == maintenance.device_id
        ? {
            ...d,
            last_maintenance: maintenance.created_at.split("T")[0],
            status: "success",
          }
        : d
    );
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

  addMaintenance: action((state, maintenance) => {
    const tempMaintenances = [...state.maintenances];
    tempMaintenances.push(maintenance);
    state.maintenances = tempMaintenances;
  }),

  user: {},
  setUser: action((state, user) => {
    state.user = user;
  }),

  authenticated: false,
  setAuthenticated: action((state, authenticated) => {
    state.authenticated = authenticated;
  }),
};
