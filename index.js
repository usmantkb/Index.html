var img = document.getElementsByTagName("img")[0];
var btn = document.getElementsByTagName("button")[0];

const profiles = 
[
{
    name: "Usman Shehu Abubakar",
    nickname: "Usmantkb",
    
    phone: "+2347063469890",
    photo:"./img/img1.jpeg",

},
{
    name: "Usman  Abubakar",
    nickname: "Usman tkb",
    
    phone: "+2347063469890",
    photo:"./img/img2.jpg",
 },
 {
    name: "Osman Shehu Abubakar",
    nickname: "Osman tkb",
    
    phone: "+2347063469890",
    photo:"./img/img3.jpg",
 },

]    


let index = 0;

btn.addEventListener("click", function() {
   if (index === 0) {
    img.src = profiles[index].photo;
    document.getElementById("name").textContent = profiles[index].name;
    document.getElementById("nickname").textContent = profiles[index].nickname;
    document.getElementById("phone").textContent = profiles[index].phone;
    
   
    
    index = 1
   }else if(index === 1) {
    img.src = profiles[index].photo;
    document.getElementById("name").textContent = profiles[index].name;
    document.getElementById("nickname").textContent = profiles[index].nickname;
    document.getElementById("phone").textContent = profiles[index].phone;
    
    
    index = 2;
   }else if(index === 2 ) {
    img.src = profiles[index].photo;
    document.getElementById("name").textContent = profiles[index].name;
    document.getElementById("nickname").textContent = profiles[index].nickname;
   
    document.getElementById("phone").textContent = profiles[index].phone;
    
    index=0;
    
   }
});
    