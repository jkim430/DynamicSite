var fs = require('fs');

function mergeValues(values, content) {
  //Cycle over the keys of values
  for (var key in values) {
    //Replace all {{key}} with the value from the values object
    content = content.replace('{{'+key+'}}', values[key]);
  }
  return content;
}

function view(template, values, res) {
  //Read from the template file
  var fileContents = fs.readFileSync('./views/'+template+'.html', 'utf8');
  //Insert values into content
  fileContents = mergeValues(values, fileContents);
  //Write out contents to response
  res.write(fileContents);
}

module.exports.view = view;