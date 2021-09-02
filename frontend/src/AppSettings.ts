export const server = 'https://localhost:44356';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: 'dev-dnl713ig.us.auth0.com/',
  client_id: 'your_clientid',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://qanda',
};
