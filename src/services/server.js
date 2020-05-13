/*
 * @Author: your name
 * @Date: 2020-04-03 16:08:45
 * @LastEditTime: 2020-04-03 16:08:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \senecaDemo\src\services\server.js
 */
require('seneca')()

  .use('math')

  // listen for role:math messages
  // IMPORTANT: must match client
  .listen({ type: 'tcp', pin: 'role:math' })
