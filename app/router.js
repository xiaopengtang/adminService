'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get(/\/(menu|config|resource|content|userManage|exception|user)/, controller.home.index);
  router.get('/', controller.home.index);
  router.get('/api/currentUser', controller.api.currentUser)
  // router.post('/api/login/account', controller.api.login)
  router.post('/api/login/account', controller.api.login)
  router.get('/api/apiCall', controller.api.apiCall)
};
