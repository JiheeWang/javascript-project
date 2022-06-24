const clock = document.querySelector("h2#clock");


function time(){
    const date = new Date()
    let hr24 = date.getHours();
    const min = String(date.getMinutes()).padStart(2,"0");
    const sec = String(date.getSeconds()).padStart(2,"0");
    

    if(hr24 > 12){
        hr24 = hr24 - 12;
        clock.innerText=`${String(hr24)}:${min}:${sec}`;
    }else {
        clock.innerText=`${hr}:${min}:${sec}`;
    }


    // getHours().padStart()는 사용할 수 없는게 시간은 숫자이고,
    // 패드 스타트는 **스트링**만 받음
}

//셋인터벌: time라는 기능을 1초"마다" 실행
time(); //사이트 열자마자 시계가 시작되도록
setInterval(time, 1000); //1초마다 새로 time기능을 로딩 

//셋타임아웃: sayHello라는 기능을 1초가 지나면 실행
//setTimeout(sayHello, 1000);

//padStart(필요한 자릿수, "0"<-만약에 자릿수 남으면 0으로 패딩)
// .padStart(2, "0"), .padEnd(2,"0")는 뒤에 자릿수 남으면 0