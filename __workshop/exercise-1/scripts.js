// Add your code here!
document.body.style.backgroundColor= "rgba(246, 187, 33, 0.8)";
document.body.style.backgroundImage= "url(./images/yellow-umbrella.jpg)";
document.body.style.backgroundSize="cover";
document.body.style.backgroundRepeat="no-repeat";


//create div
let container=document.querySelector('main');
container.style.backgroundColor="#fafafa";
container.style.minWidth="320px";
container.style.maxWidth="600px";
container.style.borderRadius="5px";
container.style.position="absolute";
container.style.margin="36px";
container.style.boxShadow="8px 10px 25px 0 rgba(128, 128, 128, 0.44)";
container.style.padding= "4px 32px 32px";
document.body.appendChild(container);

//first heading
let heading1=document.createElement('h1');
heading1.innerText=('The best How I Met Your Mother episode (according to fans)');
heading1.style.fontFamily= "Open Sans, sans-serif";
heading1.style.textAlign= "center";
heading1.style.padding="0 30px 0 30px";
container.appendChild(heading1);

//intro text
let intro=document.createElement('p');
intro.innerText=('As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…');
intro.style.fontSize= "17px";
intro.style.fontFamily="Playfair Display, serif";
intro.style.lineHeight= "1.5em";
container.appendChild(intro);

//second heading
let heading2=document.createElement('h2');
heading2.innerText=('The Slap Bet (Season 2, Episode 9)');
heading2.style.fontFamily= "Open Sans, sans-serif";
container.appendChild(heading2);

//mini text
let minitext=document.createElement('p');
minitext.innerText=('IMDB Rating: 9.5');
minitext.style.fontSize= "17px";
minitext.style.fontFamily="Playfair Display, serif";
minitext.style.lineHeight= "1.5em";
container.appendChild(minitext);

//image
let bgimg=document.createElement('img');
bgimg.src="./images/robin-sparkles.jpg";
bgimg.style.width="100%";
bgimg.style.border="#fafafa;";
bgimg.style.borderRadius="4px"; 
bgimg.style.boxShadow="4px 4px 14px rgba(128, 128, 128, 0.4)";
container.appendChild(bgimg);

//para1
let para1=document.createElement('p');
para1.innerText=('In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.');
para1.style.fontSize= "17px";
para1.style.fontFamily="Playfair Display, serif";
para1.style.lineHeight= "1.5em";
container.appendChild(para1);

//para2
let para2=document.createElement('p');
para2.innerText=('In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).');
para2.style.fontSize= "17px";
para2.style.fontFamily="Playfair Display, serif";
para2.style.lineHeight= "1.5em";
container.appendChild(para2);

//link
let newlink=document.createElement('a');
newlink.innerText=('Source');
newlink.href="https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/";
newlink.style.color="#174e7c";
newlink.style.fontWeight="700";
newlink.style.display="block";
newlink.style.marginTop="auto";
newlink.style.textAlign="right";
newlink.style.textDecoration="none";
newlink.style.fontFamily="Playfair Display, serif";
container.appendChild(newlink);