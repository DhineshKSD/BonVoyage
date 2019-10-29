//About us modal window script 
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];
  
btn.onclick = function() 
{
  modal.style.display = "block";
}

span.onclick = function() 
{
  modal.style.display = "none";
}

window.onclick = function(event) 
{
  if (event.target == modal) 
  {
    modal.style.display = "none";
  }
}

//To store contact us form
var contact_name= [];
var contact_email = [];
var message = [];

function contact()
{
    if((document.getElementById("contactname").value)=="")
    {
      alert("please enter the name");
    }
    else if(document.getElementById("contactemail").value=="")
    {
      alert("please enter the mail id");
    }
    else if(document.getElementById("contactmessage").value=="")
    {
      alert("please enter the message");
    }
    else
    {
      if(window.localStorage["contact_name"] !=null)

      contact_name = JSON.parse(window.localStorage["contact_name"]);
      contact_name.push(document.getElementById("contactname").value);
      window.localStorage["contact_name"] = JSON.stringify(contact_name);

      if(window.localStorage["contact_email"] !=null)

      contact_email = JSON.parse(window.localStorage["contact_email"]);
      contact_email.push(document.getElementById("contactemail").value);
      window.localStorage["contact_email"] = JSON.stringify(contact_email);

      if(window.localStorage["message"] !=null)

      message = JSON.parse(window.localStorage["message"]);
      message.push(document.getElementById("contactmessage").value);
      window.localStorage["message"] = JSON.stringify(message);

      alert("Your message has been successfully submitted")
    }  
}   
