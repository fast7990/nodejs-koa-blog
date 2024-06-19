/*
 * @Author: fast7990 immengxingchen@qq.com
 * @Date: 2024-06-15 09:00:46
 * @LastEditors: v-huangshaopeng
 * @LastEditTime: 2024-06-19 17:36:42
 * @FilePath: \nodejs-koa-blog\app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
require('dotenv').config();
const Koa = require('koa')
const InitManager = require('./core/init')
const parser = require('koa-bodyparser')
const cors = require('@koa/cors');
const ratelimit = require('koa-ratelimit');
require('module-alias/register')

const views = require('koa-views');
const {resolve} = require('path')
const koaStatic = require('koa-static')
const catchError = require('./middlewares/exception')
const app = new Koa()

console.log("=====11",process.env.NODE_ENV)
app.use(koaStatic(__dirname + '/public'))
app.use(views(resolve(__dirname, './views'), {
  extension: 'ejs'
}))

app.use(cors())
app.use(catchError)
app.use(parser())

// 接口调用频率限制（Rate-Limiting）
// Rate limiter middleware for koa.
// https://github.com/koajs/ratelimit
const db = new Map();
app.use(ratelimit({
  driver: 'memory',
  db: db,
  duration: 60000,
  errorMessage: 'Sometimes You Just Have to Slow Down.',
  id: (ctx) => ctx.ip,
  headers: {
    remaining: 'Rate-Limit-Remaining',
    reset: 'Rate-Limit-Reset',
    total: 'Rate-Limit-Total'
  },
  max: 100,
  disableHeader: false,
  whitelist: (ctx) => {
    // some logic that returns a boolean
  },
  blacklist: (ctx) => {
    // some logic that returns a boolean
  }
}));

InitManager.initCore(app)

app.listen(3000, () => {
  console.log('Koa is listening in http://localhost:3000')
})

module.exports = app
