module.exports = {
  apps : [{
    name: 'Dashboard',
    script: 'npm run serve',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    // args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user: 'bitnami',
      host: '35.164.176.102',
      key: '~/gocodistry/Coingenious.pem',
      ref: 'origin/master',
      repo: 'git@bitbucket.org:gocodistry/dashboard.git',
      path: '/opt/bitnami/apps/coingenius.ai',
      // 'post-deploy':
      //   'npm install && npm run build && pm2 startOrRestart ecosystem.config.js --name AuthWebsite',
      env: {
        NODE_ENV: 'production'
      }
    }
  }
};
