//==============================================================================
// the following is a vanilla REST API that uses the entire HTTP protocol

// api:      http://localhost:3000/posts
// example:  http://localhost:3000/posts

// api:      http://localhost:3000/posts/:postId
// example:  http://localhost:3000/posts/12345



Router.route('/funds', function(){
  // console.log('################################################');
  // console.log(this.request.method);
  // console.log(this.request.headers);
  // console.log('this.params.postId: ' + this.params.postId);
  //
  // console.log('------------------------------');
  // console.log(this.request.body);
  // console.log('------------------------------');

  this.response.statusCode = 200;
  this.response.setHeader("Content-Type", "application/json");
  this.response.setHeader("Access-Control-Allow-Origin", "*");
  this.response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  if (this.request.method == 'GET') {
    Statistics.update({_id: "configuration"},{$inc:{
      total_count: 1,
      list_count: 1
    }});
    this.response.end(JSON.stringify(
      Funds.find().fetch()
    ));
  }else if (this.request.method == 'POST') {
    Statistics.update({_id: "configuration"},{$inc:{
      total_count: 1,
      insert_count: 1
    }});
    this.response.end(JSON.stringify(
      Funds.insert(this.request.body)
    ));
  }else if (this.request.method == 'OPTIONS') {
    this.response.setHeader("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE, OPTIONS");
    this.response.end("OPTIONS Response");
  }
}, {where: 'server'});

