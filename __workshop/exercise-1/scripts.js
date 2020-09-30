// Add your code here!
const head = document.querySelector('head');
const style = document.createElement ("link");
style.rel = "stylesheet";
style.href = "styles.css";
head.appendChild(style);

const main = document.querySelector('main');

const title = document.createElement('h1');
title.innerText = 'The best How I Met Your Mother episode (according to fans)';
main.appendChild(title)

const p1 = document.createElement('p');
main.appendChild(p1)
p1.innerText = 'As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…';

const h2 = document.createElement('h2');
main.appendChild(h2)
h2.innerText = 'The Slap Bet (Season 2, Episode 9)';

const p2 = document.createElement('p');
main.appendChild(p2)
p2.innerText = 'IMDB Rating: 9.5';

const img = document.createElement('img');
main.appendChild(img)
img.src = "images/robin-sparkles.jpg";
img.alt = "Robin Sparkles";

const p3 = document.createElement('p');
main.appendChild(p3)
p3.innerText = 'In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.';

const p4 = document.createElement('p');
main.appendChild(p4)
p4.innerText = 'In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).';

const a = document.createElement('a');
main.appendChild(a)
a.href = "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/";
a.innerText = "Source";







    //   <img
    //     src="images/robin-sparkles.jpg"
    //     alt="Robin Sparkles"
    //   />

    //   <a
    //     href="https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/"
    //     >Source</a
    //   >

