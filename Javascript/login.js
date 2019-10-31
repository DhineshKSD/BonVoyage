flag =1;
var local=1;
localStorage.setItem('count',local);

var count=[];
var user= []; var passwrd=[];
var id=[];
var flag_var;

function  validate_reg() 
{
    if((document.getElementById("name").value == "")) 
    {
        alert("Enter an username"); 
        flag =0;
    }
    else if( document.getElementById("pw").value== "")
    {
        alert("Enter a password");
        flag=0;
    } 
        arrayFromStorage = JSON.parse(localStorage.getItem("username"));
    if(localStorage.getItem("username") == null)
    {
        flag=1;
    }
    else
    {
        for(i=0;i<arrayFromStorage.length;i++)
        {
            if( document.getElementById("name").value == arrayFromStorage[i])
            {
                flag=2;
            }
        }
    }
    if( flag ==2)
    {
        alert("Username already exists...Try with other combination");
    }
    else if(flag==1)
    {
        if(window.localStorage["username"] != null)
        {user = JSON.parse(window.localStorage["username"]);}
        user.push(document.getElementById("name").value);
        window.localStorage["username"] = JSON.stringify(user);

        if(window.localStorage["password"] != null)
        {passwrd = JSON.parse(window.localStorage["password"]);}
        passwrd.push(document.getElementById("pw").value);
        window.localStorage["password"] = JSON.stringify(passwrd);

        alert("Account Registered Successfuly!");
    }
}

function scroll_win() 
{
    window.scrollTo(0, 1000);
}

function validate_log()
{
    var username1=JSON.parse(localStorage.getItem("username"));
    var password1=JSON.parse(localStorage.getItem("password"));
    console.log(username1);
    var usernameInput=document.getElementById("userName").value;
    var passwordInput=document.getElementById("userPw").value;

    if(usernameInput=="")
    {
        alert("please enter username");
    }
    else if(passwordInput=="")
    {
        alert("please enter password");
    }
    else
    {
        if(usernameInput!=""&&passwordInput!="") 
        {
            for(i=0;i<username1.length;i++)
            {
                if(usernameInput==username1[i] && passwordInput==password1[i]) 
                {
                flag_var=true;
                var id=i;
                localStorage.setItem("user_id",id);
                break;
                } 
                else 
                {
                flag_var=false;
                }
            }
        }
        if(flag_var==true)
        {
        alert('Logging in');
        window.location.assign("index.html");
        }
        else
        {
        alert('Invalid Username and Password credentials');
        document.getElementById("userName").value="";
        document.getElementById("userPw").value="";
        }
    }
}