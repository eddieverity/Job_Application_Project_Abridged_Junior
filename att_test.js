// array of objects used to populate table

var table_data = [ 
  { first_name : 'Rose',
   last_name  : 'Tyler',
   home       : 'Earth' },
  { first_name : 'Zoe',
   last_name  : 'Heriot',
   home       : 'Space Station W3'},
  { first_name : 'Jo',
   last_name  : 'Grant',
   home       : 'Earth'},
  { first_name : 'Leela',
   last_name  : null,
   home       : 'Unspecified'},
  { first_name : 'Romana',
   last_name  : null,
   home       : 'Gallifrey'},
  { first_name : 'Clara',
   last_name  : 'Oswald',
   home       : 'Earth'},
  { first_name : 'Adric',
   last_name  : null,
   home       : 'Alzarius'},
  { first_name : 'Susan',
   last_name  : 'Foreman',
   home       : 'Gallifrey'} 
];

// Function declared to be passed in an object as a parameter to populate table

function displayTable(table_data){
  var table = document.getElementById('demo');

// Iterate through array of objects, create <tr> tags
  for(var i = 0; i < table_data.length; i++){
    var person = table_data[i];
    var tr = document.createElement('tr');
    var properties = ['first_name', 'last_name', 'home'];

// Iterate through objects, create <td> tags and populate with data from object keys
    for(var j = 0; j < properties.length; j++){
      var td = document.createElement('td');
      td.innerHTML = person[properties[j]];
      // assign "Not Provided" if values from keys were blank or 'Unspecified'

      if(person[properties[j]] == null || person[properties[j]] === 'Unspecified'){
        td.innerHTML = ("Not Provided");
      } // close if
      tr.appendChild(td);
    } // close for loop for object data
    table.appendChild(tr);
  } // close for loop for array of objects
} // close function displayTable

// Call function & pass in array of objects
displayTable(table_data);

