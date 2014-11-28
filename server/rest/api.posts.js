//==============================================================================
// the following is a REST API that only uses the POST portion of the HTTP protocol
// and is suitable for automated browser testing

// be aware that POSTS refers to the HTTP protocol
// while 'posts' and 'Posts' refers to the weblog example used in the Meteor Cookbook
// this particular example has a slight bit of name-collision occurring


// api:      http://localhost:3000/api/find/posts
// example:  http://localhost:3000/api/find/posts
Router.route('/api/find/funds', function(){
  this.response.statusCode = 200;
  this.response.setHeader("Content-Type", "application/json");
  this.response.setHeader("Access-Control-Allow-Origin", "*");
  this.response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  this.response.end('Found some funds...  ' + JSON.stringify(
    Funds.find().fetch()
  ));
}, {where: 'server'});


// api:      http://localhost:3000/api/insert/post
// example:  http://localhost:3000/api/insert/post
Router.route('/api/insert/fund', function(){
  this.response.statusCode = 200;
  this.response.setHeader("Content-Type", "application/json");
  this.response.setHeader("Access-Control-Allow-Origin", "*");
  this.response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  this.response.end('New fund has an ID of ' + JSON.stringify(
    Funds.insert(this.request.body)
  ));
}, {where: 'server'});


// api:      http://localhost:3000/api/find/fund/:fundId
// example:  http://localhost:3000/api/find/fund/314159
Router.route('/funds/:fundId', function(){
  this.response.statusCode = 200;
  this.response.setHeader("Content-Type", "application/json");
  this.response.setHeader("Access-Control-Allow-Origin", "*");
  this.response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  this.response.end('Fund contents... ' + JSON.stringify(
    Funds.findOne({_id: new Meteor.Collection.ObjectID(this.params.postId) })
  ));
}, {where: 'server'});



// api:      http://localhost:3000/api/update/fund/:fundId
// example:  http://localhost:3000/api/update/fund/314159
Router.route('/api/update/fund/:fundId', function(){
  this.response.statusCode = 200;
  this.response.setHeader("Content-Type", "application/json");
  this.response.setHeader("Access-Control-Allow-Origin", "*");
  this.response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  this.response.end('Result of updating fund is ' + JSON.stringify(
    Funds.update({_id: new Meteor.Collection.ObjectID(this.params.postId) },{$set:{
      title: this.request.body.title,
      text: this.request.body.text
    }})
  ));
}, {where: 'server'});


// api:      http://localhost:3000/api/delete/fund/:fundId
// example:  http://localhost:3000/api/delete/fund/314159
Router.route('/api/delete/fund/:fundId', function(){
  this.response.statusCode = 200;
  this.response.setHeader("Content-Type", "application/json");
  this.response.setHeader("Access-Control-Allow-Origin", "*");
  this.response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  this.response.end('Result of deleting fund is ' + JSON.stringify(
    Funds.remove({_id: new Meteor.Collection.ObjectID(this.params.postId) })
  ));
}, {where: 'server'});
