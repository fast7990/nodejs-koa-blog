/*
 * @Date: 2024-06-14 18:29:13
 * @LastEditors: v-huangshaopeng
 * @LastEditTime: 2024-07-02 14:16:30
 * @FilePath: \nodejs-koa-blog\config\config.development.js
 */
module.exports = {
  environment: 'development',
  database: {
    dbName: 'youlai_boot',
    host: 'sh-cynosdbmysql-grp-n28ca842.sql.tencentcdb.com',
    port: 22278,
    user: 'root',
    password: 'Aa1008611'
  },
  security: {
    secretKey: "L9KX0JAcD41CRAU3w4he",
    // 过期时间 1小时
    expiresIn: 60 * 60
  }
}