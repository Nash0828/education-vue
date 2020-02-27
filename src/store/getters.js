const getters = {
  apiStatus: state => state.apiStatus,
  app: state => state.app,
  user: state => state.app.user,
  authFlag: state => state.authFlag,
  token: state => state.token,
  shareCode: state => state.shareCode
}
export default getters
