let main = document.querySelector('main');
//top part
let title = document.createElement('h1');
title.innerHTML = 'The best How I Met Your Mother episode (according to fans)';
main.appendChild(title);

let titleText = document.createElement('p');
titleText.innerHTML = ('As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…');
main.appendChild(titleText);

//middle part
let episode = document.createElement('h2');
episode.innerHTML = ('The Slap Bet (Season 2, Episode 9)');
main.appendChild(episode);

let rating = document.createElement('p');
rating.innerHTML = ('IMDB Rating: 9.5');
main.appendChild(rating);

let image = document.createElement('img');
image.src = "images/robin-sparkles.jpg";
main.appendChild(image);

//bottom part 
let paragraph1 = document.createElement('p');
paragraph1.innerHTML = ('In this episode, Ted is learning a few secrets about Robin, namely that she has \n  an unexplained aversion to the mall. Robin refuses to tell Ted and the others \n why she won’t go to the mall, so the gang forms their own theories. Marshall \n believes it’s because she got married in a mall and is still married. Barney \n believes it has something to do with Robin having performed in a porn video. \n The two of them make a slap bet with each other: whoever is right gets to slap \n the other across the face as hard as he can. Lily is named the Slap Bet \n Commissioner, as long as she promises to be unbiased.');
main.appendChild(paragraph1);

let paragraph2 = document.createElement('p');
paragraph2.innerHTML= ('In the end, Robin’s big secret was revealed- she was a Canadian, teen pop \n sensation named Robin Sparkles. Barney finds the music video for her hit \n single “Lets Go To The Mall”. The slap bet takes a few turns throughout the \n episode, but ends with Marshall having the right to slap Barney 5 times- \n available for all of eternity (horrible call Barney).');
main.appendChild(paragraph2);

let source = document.createElement('a');
let sourceTitle = document.createTextNode('Source');
source.appendChild(sourceTitle);
source.href = 'https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/';
main.appendChild(source);

// link style.css 
const styleLink = document.createElement('link');
styleLink.rel = 'stylesheet';
styleLink.href = 'styles.css';
document.head.appendChild(styleLink);