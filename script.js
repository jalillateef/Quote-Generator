const quotes = [
    {
        id: 1,
        artist: "Larry June",
        text:'“First you gotta find your passion then you stick with it, one thing about this game you gotta stay consistent.”',
    },
    {
        id: 2,
        artist: "Jeezy",
        text:'“The world is yours and everything in it, it’s out there, get on your grind and get it.”',
    },
    {
        id: 3,
        artist: "Nipsey Hussle",
        text:'“So what do you need, cause you have it — long as you willing to bleed for what you’re asking.”',
    },
    {
        id: 4,
        artist: "Drake",
        text:'“I can’t even party while a ni**a pursuing’ this, distractions will do you in, in the truest sense.”',
    }

]

const paragraphText = document.getElementById('quote-text');
const artist = document.getElementById('person');
const button = document.getElementById('btn');

let currentItem = quotes[getRandom()]
window.addEventListener('DOMContentLoaded', function(){
// Get a random index in array
    const item = quotes[getRandom()]
    paragraphText.textContent = item.text
    artist.textContent = item.artist
    console.log(item)
})

button.addEventListener('click', function(){
    const item = quotes[getRandom()]
    paragraphText.textContent = item.text
    artist.textContent = item.artist
    console.log(item)
})

function getRandom(){
    return Math.floor(Math.random() * quotes.length)
}
