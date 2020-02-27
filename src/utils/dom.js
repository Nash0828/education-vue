// 滚动条在Y轴上的滚动距离
export function getScrollTop() {
  let scrollTop, bodyScrollTop, documentScrollTop
  document.body && (bodyScrollTop = document.body.scrollTop)
  document.documentElement && (documentScrollTop = document.documentElement.scrollTop)
  scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop
  return scrollTop
}

// 文档的总高度
export function getScrollHeight () {
  let scrollHeight, bodyScrollHeight, documentScrollHeight
  document.body && (bodyScrollHeight = document.body.scrollHeight)
  document.documentElement && (documentScrollHeight = document.documentElement.scrollHeight)
  scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight
  return scrollHeight
}

// 浏览器视口的高度
export function getWindowHeight () {
  let windowHeight
  if (document.compatMode === 'CSS1Compat') {
    windowHeight = document.documentElement.clientHeight
  } else {
    windowHeight = document.body.clientHeight
  }
  return windowHeight
}
