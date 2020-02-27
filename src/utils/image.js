export function fileToBase64(file) {
  // 创建一个文件读取的工具类
  let reader = new FileReader()
  // 读取文件
  reader.readAsDataURL(file)
  return new Promise((resolve) => {
    reader.onload = function (e) {
      let image = new Image()
      // 获取base64图片
      image.src = this.result
      image.onload = function() {
        resolve(compress(image))
      }
    }
  })
}
export function compress(image) {
  let canvas = document.createElement('canvas')
  let ctx = canvas.getContext('2d')
  // canvas清屏,并设置为上面宽高
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  // 重置canvas宽高
  canvas.width = image.width
  canvas.height = image.height
  ctx.drawImage(image, 0, 0)
  // 图片质量为0.2
  let quality = canvas.toDataURL('image/jpeg', 0.2)
  // 如果是低版本的Safari, 返回原图片
  if (quality === 'data:,') {
    return image.src
  }
  return quality
}

export function base64ToFile(base64Data, name) {
  // alert(base64Data)
  let arr = base64Data.split(',')
  let mime = arr[0].match(/:(.*?);/)[1]
  // console.log(arr)
  // console.log(mime)
  let bstr = atob(arr[1])
  let n = bstr.length
  let u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  let blob = new File([u8arr], name, {type: mime})
  return blob
}
