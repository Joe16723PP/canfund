export const regex = {
  displayName: /^[@A-Za-z0-9_]{3,16}$/,
  // tslint:disable-next-line:max-line-length
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  no_spacial: /^[@A-Za-z0-9_]$/,
};
