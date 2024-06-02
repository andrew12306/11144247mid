window.onload = function()
{

 var divStars = document.getElementById("stars");
 var divComment = document.getElementById("comment");
 var attitude = ["非常不喜歡", "不喜歡", "普通", "很好", "非常好"];
 var starNum = -1;
 var starArray = Array.from(divStars.children); 

 //滑鼠移入
 divStars.onmouseover = function (e) {
     if (e.target.tagName === "IMG") { 
         e.target.src = "img/star.png";
         var prev = e.target.previousElementSibling;
         while (prev) {
             prev.src = "img/star.png";
             prev = prev.previousElementSibling;
         }
         var next = e.target.nextElementSibling;
         while (next) {
             next.src = "img/star2.png";
             next = next.nextElementSibling;
         }
         var index = starArray.indexOf(e.target); 
         divComment.innerHTML = attitude[index]; 
     }
 }

 divStars.onclick = function (e) {
     if (e.target.tagName === "IMG") {
         starNum = starArray.indexOf(e.target);
     }
 }

 divStars.onmouseout = function (e) {
     if (starNum !== -1) { 
         for (var i = 0; i < divStars.children.length; i++) {
             if (i <= starNum) {
                 divStars.children[i].src = "img/star.png";
                 
             } else {
                 divStars.children[i].src = "img/star2.png";
             }
         }
         divComment.innerHTML = attitude[starNum]; 
     } else {
         for (var i = 0; i < divStars.children.length; i++) {
             divStars.children[i].src = "img/star2.png";
         }
         divComment.innerHTML = ""; 
     }
 }
}