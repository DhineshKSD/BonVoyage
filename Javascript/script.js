var Places = {};
Places['Domestic'] = ['Select','Trichy', 'Chennai', 'Bangalore','Cochin'];
Places['International'] = ['Select','Singapore', 'Malaysia', 'Mumbai', 'Chennai', 'Bangalore'];

function change_citylist()                          //Fn to show the cities based on the type of trip
{
    var cityList = document.getElementById("trip");
    var modelList1 = document.getElementById("start");
    var modelList2 = document.getElementById("end");
    var selCity = cityList.options[cityList.selectedIndex].value;

    while (modelList1.options.length) 
    {
        modelList1.remove(0); 
    }
    while (modelList2.options.length) 
    {
        modelList2.remove(0); 
    }

    var Cities = Places[selCity];

    if (Cities) 
    {
      var i;
      for (i = 0; i < Cities.length; i++) 
      {
          var City = new Option(Cities[i], i);
          modelList1.options.add(City);
      }
    }

    if (Cities) 
    {
      var i;
      for (i = 0; i < Cities.length; i++) 
      {
          var City = new Option(Cities[i], i);
          modelList2.options.add(City);
      }
    }
} 

function update_select(changedSelect, selectId) //same city occurance prevent fn
{
    var otherSelect = document.getElementById(selectId);
    for (var i = 0; i < otherSelect.options.length; ++i) 
    {
      otherSelect.options[i].disabled = false;
    }
    if (changedSelect.selectedIndex == 0) 
    {
      return;
    }
    otherSelect.options[changedSelect.selectedIndex].disabled = true;
}