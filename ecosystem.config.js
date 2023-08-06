module.exports = {
  apps: [
    {
      name: "Datsercom",
      script: "pnpm",
      args: "start",
      instances: "max", // or set a number of instances
      exec_mode: "cluster", // "fork" mode is the default, switch to "cluster" for cluster mode
      wait_ready: true,
      listen_timeout: 50000,
      kill_timeout: 5000,
      watch: true,
    },
  ],
};
