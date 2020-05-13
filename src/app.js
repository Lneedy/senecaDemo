/*
 * @Author: your name
 * @Date: 2020-04-03 16:06:59
 * @LastEditTime: 2020-04-03 16:07:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \senecaDemo\src\app.js
 */
var SenecaWeb = require('seneca-web')
var Express = require('express')
var Router = Express.Router
var context = new Router()

var senecaWebConfig = {
      context: context,
      adapter: require('seneca-web-adapter-express'),
      options: { parseBody: false } // so we can use body-parser
}

var app = Express()
      .use( require('body-parser').json() )
      .use( context )
      .listen(3000)

var seneca = require('seneca')()
      .use(SenecaWeb, senecaWebConfig )
      .use('../services/api')
      .client( { type:'tcp', pin:'role:math' } )
