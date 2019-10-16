export const getToken = () =>
  JSON.parse(localStorage.getItem('state')).session
    ? JSON.parse(localStorage.getItem('state')).session.sessionToken
    : '';

export const test = () => {};

export default getToken;