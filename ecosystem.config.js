module.exports = {
  apps: [
    {
      name: "API",
      script: "server.js",
       max_restarts: 3,
       watch: ['server.js', './src/**/*.js'],
       instances: 1,
       exec_mode: 'fork',
      node_args: ["--debug=5859"]
    }
  ]
};