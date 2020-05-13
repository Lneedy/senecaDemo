/*
 * @Author: your name
 * @Date: 2020-04-03 15:33:51
 * @LastEditTime: 2020-04-03 16:00:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \senecaDemo\server.js
 */
const seneca = require('seneca')
const app = seneca()
app
  .listen({port: 8080, pin: {role: 'test'}})
  .ready(() => {
    console.log('m s start!')
  })

let task = {
  name: 'role:test,cmd:helloMS',
  handler: (msg, reply) => {
    // console.log('msg: ', msg)
    // return {name: msg.name}
    // reply
    reply(null, {name: msg.name})
  }
}
app
  .add(task.name, task.handler)

// const Seneca=require('seneca-await');
// const seneca = Seneca();
// seneca
//   .listen({port: 10, pin: {role: 'test'}})
//   .ready(function(){
//     console.log("微服务启动")
//   });
 
// seneca.add({
// role:"test",       //添加监听，可以自定义字段做监听
// cmd:"sayhello",
//    },async function(msg) {
//      //一些操作
//     //  console.log(msg)
//     return  {name:"chen"};
// })
