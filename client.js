/*
 * @Author: your name
 * @Date: 2020-04-03 15:33:51
 * @LastEditTime: 2020-04-03 15:59:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \senecaDemo\client.js
 */
const seneca = require('seneca')
const app = seneca()
app
  .client({port: 8080, host: 'localhost', pin: {role: 'test'}})

let task = {
  name: 'role:test,cmd:helloMS,name:lin',
  handler:  (err, msg) => {
    if (err) {
      return console.error(err)
    }
    console.log(20, msg.name)
  }
}
app.act(task.name, task.handler)

// const Seneca=require('seneca-await');
// const seneca=Seneca();
// seneca.client({port:10,host:"localhost",pin:{role:'test'}})   //pin可以不要，就是个精确匹配
 
// const response= seneca.act({
//      role:"test",
//      cmd:"sayhello",
//      name:"lin"
// });  //寻找为服务，并传一些json数据，判断是哪一个
// response.then(function(a){   //返回的数据
//     console.log(a)
// })