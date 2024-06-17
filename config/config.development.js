/*
 * @Date: 2024-06-14 18:29:13
 * @LastEditors: v-huangshaopeng
 * @LastEditTime: 2024-06-17 10:10:47
 * @FilePath: \nodejs-koa-blog\config\config.development.js
 */
module.exports = {
  environment: 'development',
  database: {
    dbName: 'youlai_boot',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456'
  },
  security: {
    secretKey: "secretKey",
    // 过期时间 1小时
    expiresIn: 60 * 60
  }
}