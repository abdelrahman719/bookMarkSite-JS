var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var btnSubmit = document.getElementById("btnSubmit");
var linksList = document.getElementById("linksList");
var myInputs = document.getElementsByClassName("form-control");
var requiredName = document.getElementById("requiredName");
var requiredUrl = document.getElementById("requiredUrl");

var linksArr=[];




if(localStorage.getItem("myLinksList")==null)
{
    linksArr=[];
}
else
{
    linksArr= JSON.parse(localStorage.getItem("myLinksList"));
    show();
}

btnSubmit.onclick= function()
{
    if(siteName.value==="" || siteUrl.value==="")
    {
        if(siteName.value=="")
        {
            requiredName.innerHTML="<p>please fill the site name</p>";

        }
        else
        {
            requiredName.innerHTML="";

        }

        if(siteUrl.value=="")
        {
            requiredUrl.innerHTML="<p>please fill the site URL</p>"
    
        }

       

        else
        {
            requiredUrl.innerHTML="";
    
        }



    }
  
    else
    {
        requiredName.innerHTML="";
        requiredUrl.innerHTML="";
        add();
        show();
        clear();
    }
   
   
}



function add()
{
    var link={
        name:siteName.value,
        url:siteUrl.value,
    }
    
    linksArr.push(link);
    localStorage.setItem("myLinksList" , JSON.stringify(linksArr));
}

function show ()
{
    var box="";
    for (var i = 0 ; i<linksArr.length ; i++)
    {
        box+=` <div class="row">
        <div class="col-md-6 py-4">
            <div class="row">
            <div class="col-sm-8">
                <h3>`+linksArr[i].name+`</h3>
            </div>
            <div class="col-sm-4">
                <button class="btn btn-info"><a href=`+linksArr[i].url+` class="text-white" target="_blank">Visit</a></button>
                <button class="btn btn-danger "onclick='del(`+i+`)'  >delete</button>
            </div>
        
        </div>

        </div>
       
    </div>`

    }
    linksList.innerHTML=box;
    


}

function clear()
{
    for(var i =0 ; i <myInputs.length ; i++)
    {
        myInputs[i].value="";

    }
}

function del(index)
{
    linksArr.splice(index , 1);
    localStorage.setItem("myLinksList" , JSON.stringify(linksArr));
    show();
}



function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    
console.log(validateEmail('anystring@anystring..anystring'));

