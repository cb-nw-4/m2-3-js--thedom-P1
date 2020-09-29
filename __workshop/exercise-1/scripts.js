let main = document.querySelector("main"); 

let l = document.createElement("link");
l.setAttribute('rel', 'stylesheet');
l.setAttribute('href', 'styles.css');
document.head.appendChild(l);

let h1 = document.createElement("h1");
h1.innerHTML = "The best How I Met Your Mother episode (according to fans)";
main.appendChild(h1)

let p = document.createElement("p");
p.innerHTML = "As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…";
main.appendChild(p);

let h2 = document.createElement("h2");
h2.innerHTML = "The Slap Bet (Season 2, Episode 9)";
main.appendChild(h2);

let p1 = document.createElement("p");
p1.innerHTML = "IMDB Rating: 9.5";
main.appendChild(p1);

let img = document.createElement("img");
img.setAttribute('src', 'images/robin-sparkles.jpg');
img.setAttribute('alt', 'Robin Sparkles');
main.appendChild(img);

let p2 = document.createElement("p");
p2.innerHTML = "In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.";
main.appendChild(p2);

let p3 = document.createElement("p");
p3.innerHTML = "In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).";
main.appendChild(p3);

let a = document.createElement("a");
a.setAttribute('href', 'https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/');
a.innerHTML = "Source";
main.appendChild(a);