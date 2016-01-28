exports.viewProject = function(req, res) { 

  var name = req.params.name; 
  console.log("The project name is: " + name);
	//make a controller called 'viewProject' available to the application

  // controller code goes here 
  res.render('project', {
    'projectName': name
  });
};