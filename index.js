


link = "https://api.openweathermap.org/data/2.5/weather?q=geyve&units=metric&apikey=dc989810ec5879216998f7685d8d2057";
var request = new XMLHttpRequest();
request.open('GET',link,true);
request.onload = function(){
 var obj = JSON.parse(this.response);
 if (request.status >= 200 && request.status < 400) {
 var temp = obj.main.temp;
 var temp2=Math.ceil(temp);
 var feel=obj.main.feels_like;
 document.querySelector("#feel").innerHTML="Feels Like:"+feel+"&#176;c";

 document.querySelector("#max").innerHTML="Max:"+obj.main.temp_max+"&#176;c";
 document.querySelector("#min").innerHTML="Min:"+obj.main.temp_min+"&#176;c";

 console.log(temp+" derece");
 console.log(feel);
 console.log(obj)
 var icon=obj.weather[0].icon;
 console.log(obj.weather[0].icon);
 console.log(obj.name);
 var name= document.querySelector("#tem").innerHTML=obj.name;
 var t=document.querySelector("#temp").innerHTML=temp2+"&#176;c";
 var img=document.querySelector("#img");
 img.setAttribute("src","http://openweathermap.org/img/wn/"+icon+"@2x.png")


 }
 else{
  console.log("The city doesn't exist! Kindly check");
 }
}
request.send();



document.querySelector(".btn").addEventListener("click",()=>{


   var res=document.querySelector(".form-control").value;


  link = "https://api.openweathermap.org/data/2.5/weather?q="+res+"&units=metric&apikey=dc989810ec5879216998f7685d8d2057";
  var request = new XMLHttpRequest();
  request.open('GET',link,true);
  request.onload = function(){
   var obj = JSON.parse(this.response);
   if (request.status >= 200 && request.status < 400) {
   var temp = obj.main.temp;
   var temp2=Math.ceil(temp);
   var feel=obj.main.feels_like;
   document.querySelector("#feel").innerHTML="Hissedilen:"+feel+"&#176;c";

   document.querySelector("#max").innerHTML="Max:"+obj.main.temp_max+"&#176;c";
   document.querySelector("#min").innerHTML="Min:"+obj.main.temp_min+"&#176;c";

   console.log(temp+" derece");
   console.log(feel);
   console.log(obj)
   var icon=obj.weather[0].icon;
   console.log(obj.weather[0].icon);
   console.log(obj.name);
   var name= document.querySelector("#tem").innerHTML=obj.name;
   var t=document.querySelector("#temp").innerHTML=temp2+"&#176;c";
   var img=document.querySelector("#img");
   img.setAttribute("src","http://openweathermap.org/img/wn/"+icon+"@2x.png")


   }
   else{
    console.log("The city doesn't exist! Kindly check");
   }
  }
  request.send();


})
