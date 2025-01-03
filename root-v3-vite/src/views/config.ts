// 开发环境地址
const config = {
  children1: 'http://localhost:3000'
}

// 线上环境地址
if (process.env.NODE_ENV === 'production') {
  // 基座应用和子应用部署在同一个域名下，这里使用location.origin进行补全
  Object.keys(config).forEach(key => {
    config[key as keyof typeof config] = window.location.origin
  })
}

export default config
