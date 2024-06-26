const Sequelize = require('sequelize')
const config = require(`../config/config.${process.env.NODE_ENV}.js`);
const {
  dbName,
  host,
  port,
  user,
  password
} = config.database


const sequelize = new Sequelize(dbName, user, password, {
  dialect: 'mysql',
  host,
  port,
  logging: console.log,
  timezone: '+08:00',
  define: {
    // create_time && update_time
    timestamps: true,
    // delete_time
    paranoid: true,
    createdAt: 'create_time',
    updatedAt: 'update_time',
    deletedAt: 'deleted_at',
    // 把驼峰命名转换为下划线
    underscored: true,
    scopes: {
      bh: {
        attributes: {
          exclude: ['password', 'update_time', 'deleted_at', 'create_time']
        }
      },
      iv: {
        attributes: {
          exclude: ['content', 'password', 'update_time', 'deleted_at']
        }
      }
    }
  }
})

// 创建模型
sequelize.sync({
  force: false
})

sequelize.authenticate().then(res => {
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
})

// sequelize.query("CREATE DATABASE IF NOT EXISTS boblog DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci").then(res=>{
//   console.log('CREATE DATABASE SUCCESS!')
// }).catch(err => {
//   console.log('CREATE DATABASE FAIL!', err)
// })


module.exports = {
  sequelize
}