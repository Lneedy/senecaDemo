// var seneca = require('seneca')()

// seneca.add( {role:'math', cmd:'sum'}, function(args,callback) {
//   var sum = args.left + args.right
//   callback(null,{answer:sum})
// })

// seneca.act( {role:'math', cmd:'sum', left:1, right:2}, function(err,result) {
//   if( err ) return console.error( 9, err )
//   console.log(result)
// })

require('seneca')()
  .add({generate: 'id'}, function(message, done) {
    done(null, {id: '' + Math.random()});
  })
  .listen();
