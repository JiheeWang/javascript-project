const images = ["b1.jpg","b2.jpg","b3.jpg","b4.jpg","b5.jpg"];
const todayBg = images[Math.floor(Math.random()*images.length)];

//const imggg = document.createElement("img"); //<img>를 만드는 문장 
//위에까지 하면 <imggg>만 생성된다.
//imggg.src = `image_final/${todayBg}`;
//위에 src를 추가하면 <img(형식)) src="img_final(폴더명)/bg2.jpg(파일명)">라는 풀 주소가 html에 만들어진다.
//console.log(imggg);

//document.body.appendChild(imggg);
bg = `image_final/${todayBg}`;
document.body.background = bg;