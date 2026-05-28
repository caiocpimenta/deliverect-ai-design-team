const a = {
  // No indicators for PROD
  production: {
    label: "",
    badgeStatus: void 0
  },
  staging: {
    label: "Staging",
    badgeStatus: "warning"
  },
  testing: {
    label: "Testing",
    badgeStatus: "info"
  },
  development: {
    label: "Dev",
    badgeStatus: "info"
  },
  local: {
    label: "Local",
    badgeStatus: "success"
  }
};
export {
  a as ENVIRONMENT_CONFIGS
};
