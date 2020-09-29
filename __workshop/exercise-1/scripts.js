// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
console.log(document.body);


// DOCUMENT HTML
//
////


let mainH1 = document.createElement("h1");
mainH1.innerText = "The best How I Met Your Mother episode (according to fans)"; 
document.querySelector('main').appendChild(mainH1);

let mainP1 = document.createElement("p")
mainP1.innerText = "As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…";
document.querySelector('main').appendChild(mainP1);

let mainH2 = document.createElement("h2");
mainH2.innerText = "The Slap Bet (Season 2, Episode 9)";
document.querySelector('main').appendChild(mainH2);

let mainP2 = document.createElement("p")
mainP2.innerText = "IMDB Rating: 9.5";
document.querySelector('main').appendChild(mainP2);

// ADD IMAGE ROBIN SPARKLES
let mainIMG = document.createElement('img');
mainIMG.src = 'images/robin-sparkles.jpg';
document.querySelector('main').appendChild(mainIMG);


let mainP3 = document.createElement("p")
mainP3.innerText = "In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.";
document.querySelector('main').appendChild(mainP3);

let mainP4 = document.createElement("p");
mainP4.innerText = "In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney)."; 
document.querySelector('main').appendChild(mainP4);

// ADD A HREF
let mainHREF = document.createElement('a');
mainHREF.href = 'https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/'
document.querySelector('main').appendChild(mainHREF);

// DOCUMENT CSS
//
//
////

let body = document.querySelector('body');
let main = document.querySelector('main');
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let p = document.querySelector('p');
let img = document.querySelector('img');
let a = document.querySelector('a');

// BACKGROUND IMAGE (BODY)
body.style.background = 'rgba(246, 187, 33, 0.8) url(./images/yellow-umbrella.jpg) no-repeat';
body.style.backgroundSize = '100%';
body.style.fontFamily = "'Playfair Display', serif"


// BACKGROUND COLOR (MAIN)
main.style.backgroundColor = '#fafafa';
main.style.borderRadius = '4px';
main.style.boxShadow = '8px 10px 25px 0 rgba(128, 128, 128, 0.44)'
main.style.minWidth = '320px';
main.style.maxWidth = '600px';
main.style.margin = '36px';
main.style.padding = '4px 32px 32px';

// TEXT CSS
h1.style.fontFamily = "'Open Sans', sans-serif";
h1.style.textAlign = 'center';

h2.style.fontFamily = "'Open Sans', sans-serif";
h2.style.textAlign = 'left';

p.style.fontSize = '17px';
p.style.lineHeight = '1.5em';


img.style.border = '#fafafa';
img.style.borderRadius = '4px';
img.style.boxShadow = '4px 4px 14px rgba(128, 128, 128, 0.4)';
img.style.width = '100%';

a.style.color = '#174e7c';
a.style.display = 'block';
a.style.fontWeight = '700';
a.style.marginTop = 'auto';
a.style.textAlign = 'right';
a.style.textDecoration = 'none';