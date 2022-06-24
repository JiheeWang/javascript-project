const quotes = [
{
    quote : "1. The way to get started is to quit talking and begin.",
    author : "Walt Disney",
},

{
    quote : "2. The way to get started is to quit talking and begin.",
    author : "Walt Disney",
},
{
    quote : "3. The way to get started is to quit talking and begin.",
    author : "Walt Disney",
},    
{
    quote : "4. The way to get started is to quit talking and begin.",
    author : "Walt Disney",
}, 
{
    quote : "5. The way to get started is to quit talking and begin.",
    author : "Walt Disney",
}, 
{
    quote : "6. The way to get started is to quit talking and begin.",
    author : "Walt Disney",
}, 
{
    quote : "7. The way to get started is to quit talking and begin.",
    author : "Walt Disney",
}, 
{
    quote : "8. The way to get started is to quit talking and begin.",
    author : "Walt Disney",
}, 
{
    quote : "9. The way to get started is to quit talking and begin.",
    author : "Walt Disney",
}, 
{
    quote : "10. The way to get started is to quit talking and begin.",
    author : "Walt Disney",
}
];

const author =  document.querySelector("#quote span:last-child");
const quote = document.querySelector("#quote span:first-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
//Math.random() 은 0이상 1미만의 0.****를 랜덤하게 준다.
//항목 갯수에 맞게 곱하면 0부터 갯수미만 까지 정수를 랜덤하게 구할 수 있음
//Math.floor()은 내림, .ceil은 올림 .round는 반올림
//어레이.length는 항목 갯수 구하는 함수.

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
