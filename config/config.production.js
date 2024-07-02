module.exports = {
  environment: 'production',
  database: {
    dbName: 'youlai_boot',
    host: '10.34.105.166',
    port: 3306,
    user: 'root',
    password: 'Aa1008611'
  },
  security: {
    secretKey: "L9KX0JAcD41CRAU3w4he",
    // 过期时间 1小时
    expiresIn: 60 * 60
  }
}