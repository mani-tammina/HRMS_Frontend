const local =
  window.location.hostname.startsWith('30.') ||
  window.location.hostname === 'localhost';

export const environment = {
  production: false,

  apiURL: '30.0.1.117:3000',
  candidateURL: '30.0.1.117:4200',
};
