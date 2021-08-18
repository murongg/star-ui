import process from 'process';

const config = {
  development: {
    DEMO_URL: 'http://localhost:8080/#'
  },
  production: {
    DEMO_URL: '/demo/#'
  }
}

export default config[process.env.NODE_ENV]