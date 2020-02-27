// 调用app提供的api
export const applyNative = (action, data) => {
  return new Promise((resolve, reject) => {
    const callbackName = '_nativeCb_' + action
    window[callbackName] = result => {
      if (result !== undefined) {
        try {
          resolve(JSON.parse(result))
        } catch (e) {
          reject(e)
        } finally {
          window[callbackName] = null
        }
      }
    }

    let obj = {
      action,
      callback: callbackName,
      data
    }
    if (window.native && window.native.sendMessage) {
      // android
      window.native.sendMessage(JSON.stringify(obj))
    } else if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.native) {
      // IOS
      window.webkit.messageHandlers.native.postMessage(JSON.stringify(obj))
    } else {
      reject(new Error('请在golo汽修大师app中打开'))
    }
  })
}
