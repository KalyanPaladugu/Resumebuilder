(function() {

  function loadJSON(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        callback(rawFile.responseText);
      }
    }
    rawFile.send(null);
  }

  //usage:
  loadJSON("resources/data.json", function(text){
    let data = JSON.parse(text);

    console.log(data);
    console.log(data.skills);

    basics(data.basics);
    next(data.next);
    skills(data.skills);
    education(data.education);
    certifications(data.certifications);
    interest(data.interests);
    declaration(data.declaration);
   // console.log(data.interests);
    // console.log(data.skills);


});


var main = document.getElementById("main");
main.classList.add("main");
var left = document.createElement("div");
left.classList.add("left");
var bio = document.createElement("div");
bio.classList.add("bio");

function basics(basics){

var img=document.createElement("img");
img.src="images/download.jpg";
var example = document.createElement("div");
example.classList.add("name");
example.textContent=basics.name;
var name1=document.createElement("div");
name1.classList.add("name1");
name1.textContent=basics.designation;
bio.appendChild(img);
bio.appendChild(example);
bio.appendChild(name1);


left.appendChild(bio);


main.appendChild(left);
console.log(main);

var sidemenu=document.createElement("div");
sidemenu.classList.add("sidemenu");
sidemenu.textContent=basics.goal;


var obj = document.createElement("div");
obj.classList.add("obj");


var myphone = document.createElement("div");
myphone.classList.add("myphone");
myphone.textContent=basics.phone;

var email = document.createElement("div");
email.classList.add("email");
email.textContent=basics.email;

var lag =document.createElement("div");
lag.classList.add("Language");
lag.textContent=basics.Languages;





left.appendChild(sidemenu);
sidemenu.appendChild(obj);
sidemenu.appendChild(myphone);
sidemenu.appendChild(email);
sidemenu.appendChild(lag);
main.appendChild(left);
console.log(main);

}

var right = document.createElement("div");
 right.classList.add("right");


 function next(next){


 var headers = document.createElement("div");
headers.classList.add("headers");
 headers.textContent="BACKGROUND";
 //headers.textContent=next.Address;
  var p = document.createElement("p");
//p.classList.add("headers");
 p.textContent=next.Address;


 right.appendChild(headers);

 var headers1 = document.createElement("div");
headers1.classList.add("headers");
 headers1.textContent="CARRIEROBJECTIVE";

 var about = document.createElement("div");
about.classList.add("about");
 about.textContent=next.carrierobjective;

  var headers2 = document.createElement("div");
headers2.classList.add("headers");
 headers2.textContent="WORK EXPERIENCE";

  var p1 = document.createElement("p");
//p1.classList.add("headers");
 p1.textContent=next.experience;

 right.appendChild(document.createElement("HR"))
 right.appendChild(p);
 right.appendChild(document.createElement("HR"))
 right.appendChild(headers1);
  right.appendChild(document.createElement("HR"))

  right.appendChild(about);
  right.appendChild(document.createElement("BR"))
 right.appendChild(document.createElement("HR"))

  right.appendChild(headers2);

   right.appendChild(document.createElement("HR"))
    right.appendChild(p1);
    right.appendChild(document.createElement("HR"))
    main.appendChild(right);

}


function skills(skills){
 var skill = document.createElement("div");
skill.classList.add("header");
skill.textContent="Skills";
skill.appendChild(document.createElement("hr"));
right.appendChild(skill);

for(i in skills)
{
  var names=document.createElement("h4");
  names.textContent=skills[i].name;

  skill.appendChild(names);


for(k in skills[i].keywords){
  var values=document.createElement("p");
  values.textContent=skills[i].keywords[k];
  skill.appendChild(values);

}

right.appendChild(skill);

}
skill.appendChild(document.createElement("HR"))
skill.appendChild(document.createElement("BR"))
main.appendChild(right);

}

function education(education){


var headers4=document.createElement("div");
headers4.classList.add("headers");
headers4.textContent="EDUCATION";

right.appendChild(headers4);

right.appendChild(document.createElement("HR"))

var edu = document.createElement("div");
edu.classList.add("education");





var ul = document.createElement("ul");
var li = document.createElement("li");
li.textContent=education.btech;

var li1 = document.createElement("li");
li1.textContent=education.inter;

var li2 = document.createElement("li");
li2.textContent=education.inter;



right.appendChild(li);
right.appendChild(li1);
right.appendChild(li2);

right.appendChild(edu);

right.appendChild(document.createElement("BR"))
right.appendChild(document.createElement("BR"))



}



function certifications(certifications)
{

  var headers3=document.createElement("div");
headers3.classList.add("headers");
headers3.textContent="CERTIFICATIONS";



var awards=document.createElement("div");
awards.classList.add("awards");

var ul = document.createElement("ul");



var li = document.createElement("li");
li.textContent=certifications.c1;

var li1 = document.createElement("li");
li1.textContent=certifications.c2;

var li2 = document.createElement("li");
li2.textContent=certifications.c3;



ul.appendChild(li);
ul.appendChild(li1);
ul.appendChild(li2);




awards.appendChild(ul);
right.appendChild(headers3);

right.appendChild(document.createElement("HR"))


right.appendChild(awards);

}



function interest(interests)
{

var intr = document.createElement("div");
intr.classList.add("headers");
intr.textContent="INTERESTS";

right.appendChild(intr);

right.appendChild(document.createElement("HR"))

var interest1 = document.createElement("div");
interest1.classList.add("Interests");

var ul = document.createElement("ul");
var li = document.createElement("li");
li.textContent=interests.in1;

var li1 = document.createElement("li");
li1.textContent=interests.in2;

var li2 = document.createElement("li");
li2.textContent=interests.in3;
ul.appendChild(li);
ul.appendChild(li1);
ul.appendChild(li2);
interest1.appendChild(ul);
right.appendChild(interest1);

}

function declaration(declaration)
{

   var dec=document.createElement("div");
   dec.classList.add("headers");
   dec.textContent="DECLARATION";
   right.appendChild(dec);
   right.appendChild(document.createElement("HR"))
 referance=document.createElement("div");
 referance.classList.add("References");
 var ulist=document.createElement("ul");
 var list=document.createElement("li");
 list.textContent=declaration.dec;
 ulist.appendChild(list);
 referance.appendChild(ulist);
 right.appendChild(referance);

}

main.appendChild(right);
}
());
