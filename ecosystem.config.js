module.exports = {
  apps: [
    {
      name: "Dashboard",
      script: "npm run serve",

      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      // args: 'one two',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ],

  deploy: {
    production: {
      user: "bitnami",
      host: "34.213.212.52",
      ref: "origin/master",
      repo: "git@bitbucket.org:gocodistry/dashboard.git",
      path: "/opt/bitnami/apps/coingenius.ai",
      env: {
        NODE_ENV: "production"
      }
    }
  }
}
