// Add your code here!
let main = document.querySelector('main');

let mainTitle = document.createElement('h1');
main.appendChild(mainTitle);
mainTitle.innerText= "The best How I Met Your Mother episode (according to fans)";

let text = document.createElement('p');
main.appendChild(text);
text.innerText = ' As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…';

let title2 = document.createElement('h2');
main.appendChild(title2);
title2.innerText = "The Slap Bet (Season 2, Episode 9)";

text = document.createElement('p');
main.appendChild(text);
text.innerText = 'IMDB Rating: 9.5';

let image = document.createElement('img');
main.appendChild(image);
image.src = "images/robin-sparkles.jpg";
image.alt = "Robin Sparkles";

text = document.createElement('p');
main.appendChild(text);
text.innerText = 'In this episode, Ted is learning a few secrets about ' +
                'Robin, namely that she has an unexplained aversion '+
                'to the mall. Robin refuses to tell Ted and the ' +
                'others why she won’t go to the mall, so the gang ' +
                'forms their own theories. Marshall believes it’s ' +
                'because she got married in a mall and is still ' +
                'married. Barney believes it has something to do with ' +
                'Robin having performed in a porn video. The two of ' +
                'them make a slap bet with each other: whoever is ' +
                'right gets to slap the other across the face as hard ' +
                'as he can. Lily is named the Slap Bet Commissioner, ' +
                'as long as she promises to be unbiased.';

text = document.createElement('p');
main.appendChild(text);
text.innerText = 'In the end, Robin’s big secret was revealed- she was ' +
                'a Canadian, teen pop sensation named Robin Sparkles. ' +
                'Barney finds the music video for her hit single ' +
                '“Lets Go To The Mall”. The slap bet takes a few ' +
                'turns throughout the episode, but ends with Marshall ' +
                'having the right to slap Barney 5 times- available ' +
                'for all of eternity (horrible call Barney).';

let a = document.createElement('a');
main.appendChild(a);
a.href = "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/";
a.innerText = "Source";

//Add style
let head = document.querySelector('head');
let link = document.createElement('link');
head.appendChild(link);
link.rel = "stylesheet";
link.href = "styles.css";