


Meteor.startup(function(){

  Meteor.publish("funds", function () {
    return Funds.find();
  });
  Meteor.publish("statistics", function () {
    try{
      return Statistics.find({}, {fields: {
        'total_count': true,
        'list_count': true,
        'update_count': true,
        'delete_count': true,
        'get_count': true,
        'insert_count': true
      }});
    }catch(error){
      console.log(error);
    }
  });


  if((Statistics.findOne({_id: 'configuration'}) == null)) {
    Statistics.insert({
      _id: 'configuration',
      'total_count': 0,
      'list_count': 0,
      'update_count': 0,
      'delete_count': 0,
      'get_count': 0,
      'insert_count': 0,
      'is_statistics_panel_visible': true,
      'is_interface_panel_visible': true,
      'is_database_panel_visible': true
    })
  };

  if((Funds.find().count() == 0)) {
    Funds.insert({
      title: "Red",
      text: "Lorem ipsum..."
    });
    Funds.insert({
      title: "Blue",
      text: "dolar set et..."
    });
    Funds.insert({
      title: "Green",
      text: "iple fessle prax."
    });

  };
});

