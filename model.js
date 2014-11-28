
Statistics = new Meteor.Collection("statistics", {idGeneration : 'MONGO'});
Statistics.allow({
  insert: function(){
    return true;
  },
  update: function () {
    return true;
  },
  remove: function(){
    return true;
  }
});


Funds = new Meteor.Collection("funds", {idGeneration : 'MONGO'});
Funds.allow({
  insert: function(){
    return true;
  },
  update: function () {
    return true;
  },
  remove: function(){
    return true;
  }
});
