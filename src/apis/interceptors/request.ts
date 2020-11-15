import { TKeyValue } from "@Models/base"
export function addAccessToken(initialConfig: any) {
  const config = initialConfig
  // const account = loadUserCredentials();
  const authorizationHeader: TKeyValue = {}
  // if (account && account.token) {
  //   authorizationHeader = {
  //     ...authorizationHeader,
  //     'X-Auth-Token': account.token,
  //   };
  // }
  config.headers = { ...config.headers, ...authorizationHeader }
  return config
}

export function onRejected(error: any) {
  return Promise.reject(error)
}
