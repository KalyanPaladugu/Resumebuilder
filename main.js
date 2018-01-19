
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
   // console.log(data.basics.email);
    kalyan(data.basics.name);
    phonenumber(data.basics.phone);
    designation(data.basics.designation);
    goal(data.basics.goal);
    carrierobjective(data.basics.carrierobjective);
    exper(data.basics.experience);
    emailId(data.basics.email);
    address(data.basics.location.Address);
    os(data.basics.skills.Operatingsystem);
    lang(data.basics.skills.lang);
    web(data.basics.skills.web);
    btech(data.basics.Education.btech);
    inter(data.basics.Education.inter);
    ssc(data.basics.Education.ssc);
    certi1(data.basics.Certifications.c1);
    certi2(data.basics.Certifications.c2);
    certi3(data.basics.Certifications.c3);
    interest1(data.basics.interests.in1);
    interest2(data.basics.interests.in2);
    interest3(data.basics.interests.in3);
    declaration(data.basics.Declaration.dec);
  });

    function kalyan (name) {
      var sampleID=document.getElementById("myname");
      sampleID.innerHTML=name;
      // body...
    }

    function designation (designation) {

      var des=document.getElementById("designation1");
      des.innerHTML=designation;
    }

    function carrierobjective (carrierobjective) {
       
       var car=document.getElementById("obj");
      car.innerHTML=carrierobjective;

    }

    function emailId (email) {

      var em=document.getElementById("email");
      em.innerHTML=email;
    }
   function address (location) {

      var l=document.getElementById("b");
      l.innerHTML=location;
    }

    function phonenumber (phone) {

      var ph=document.getElementById("myphone");
      ph.innerHTML=phone;
    }



    function exper (experience) {

      var des=document.getElementById("experience");
      des.innerHTML=experience;
    }

    function os(Operatingsystem) {

      var ski=document.getElementById("os");
      ski.innerHTML=Operatingsystem;
    }


    function lang (lang) {

      var l=document.getElementById("lang");
      l.innerHTML=lang;
    }


    function web (web) {

      var des=document.getElementById("web");
      des.innerHTML=web;
    }

    function btech (btech) {

      var b=document.getElementById("btech");
      b.innerHTML=btech;
    }

    function inter (inter) {

      var inte =document.getElementById("inter");
      inte.innerHTML=inter;
    }

    function ssc (ssc) {

      var school=document.getElementById("ssc");
      school.innerHTML=ssc;
    }
    function certi1 (c1) {

      var cer1=document.getElementById("ac1");
      cer1.innerHTML=c1;
    }
    function certi2 (c2) {

      var cer2=document.getElementById("ac2");
      cer2.innerHTML=c2;
    }
    function certi3 (c3) {

      var cer3=document.getElementById("ac3");
      cer3.innerHTML=c3;
    }
    function interest1 (in1) {

      var int1=document.getElementById("i1");
      int1.innerHTML=in1;
    }
    function interest2 (in2) {

      var int2=document.getElementById("i2");
      int2.innerHTML=in2;
    }
    function interest3 (in3) {

      var int3=document.getElementById("i3");
      int3.innerHTML=in3;
    }
    function declaration (dec) {

      var de=document.getElementById("d");
      de.innerHTML=dec;
    }
    function goal (goal) {

      var g=document.getElementById("aim");
      g.innerHTML=goal;
    }


})();
