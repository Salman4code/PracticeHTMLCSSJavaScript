
function getlinks()
{
  var l= document.links.length;
  for (var i=0;i<l;i++) {
    document.getElementById("demo").innerHTML+="Link: " +document.links[i].href+"<br>" ;

   }
 }
   function totallinks()
   {
     var total=document.links.length;
     document.getElementById("next").innerHTML="Number of links\t"+total;
   }
