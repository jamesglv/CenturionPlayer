const audioFile = document.getElementById("myAudio");
const timeBtn = document.getElementById("btn");
const timeStamp = document.getElementById("timeStamp");
const backBtn = document.getElementById("back");
const fwdBtn = document.getElementById("fwd");
const skipInput = document.getElementById("inputNum");
const skipBtn = document.getElementById("selectTrack");
const trackName = document.getElementById("trackName");
const artist = document.getElementById("artist");
const timeInt = document.getElementById("timeInt");
const beginsIn = document.getElementById("begins");
const dlBtn = document.querySelector(".dlBtn");
const showBtn = document.querySelector(".restartBtn");

const audioFileURL = "https://dl.dropbox.com/s/wb1s7fds3fgoz2x/Centurion2.mp3?dl=1";

audioFile.style.display = "none";
timeStamp.style.display = "none";
beginsIn.style.display = "none";

timeBtn.addEventListener("click", function(playing){
    if(audioFile.paused === true){
        audioFile.play();
        timeBtn.innerHTML = "<i class='fas fa-pause'></i>";
    } else if (audioFile.paused === false){
        audioFile.pause();
        timeBtn.innerHTML = "<i class='fas fa-play'></i>";
    }
  });

backBtn.addEventListener("click", function(){
    var timeCurrent = audioFile.currentTime;
    var trackNumber = Math.floor(timeCurrent/60);
    var backTrack = trackNumber-1;
    audioFile.currentTime = backTrack*60;
})

fwdBtn.addEventListener("click", function(){
    var timeCurrent = audioFile.currentTime;
    var trackNumber = Math.floor(timeCurrent/60);
    var skip = trackNumber+1;
    audioFile.currentTime = skip*60;
})

skipBtn.addEventListener("click", function(){
    if(skipInput.value !== null){
        audioFile.currentTime = skipInput.value*60;
        skipInput.value = ""
    }
})

dlBtn.addEventListener("click", function() {
    window.location.href=audioFileURL;
    dlBtn.classList.add('fall');
    showBtn.classList.add('showBtn');
})

audioFile.ontimeupdate = function () {
    var timeCurrent = audioFile.currentTime;
    timeStamp.innerHTML = timeCurrent;
    var trackNumber = Math.floor(timeCurrent/60);

    if (trackNumber === 0) {
        trackName.innerText = "";
        artist.innerText = "";
        var timeToBegin = Math.floor(55-timeCurrent);
        if (timeToBegin > 0){
            beginsIn.style.display = "block";
            timeInt.innerText = timeToBegin;
        } else if (timeToBegin <1){
            beginsIn.style.display = "none";
            timeInt.innerText = "1";
            trackName.innerText = tracks[1];
            artist.innerText = artists[1];
        }
        
    } else if (trackNumber <= 99){
        beginsIn.style.display = "none";
        trackName.innerText = tracks[trackNumber];
        artist.innerText = artists[trackNumber];
        timeInt.innerText = trackNumber;
    
    } else if (trackNumber > 99){
        beginsIn.style.display = "none";
        trackName.innerText = tracks[100];
        artist.innerText = artists[100];
        timeInt.innerText = '100';
    }

}


//Arrays
var tracks = ["Nine's Wide World Of Sports", 
"On Top", 
"Confidence", 
"Around The World", 
"Power", 
"Can't Get Better Than This", 
"Bohemian Like You", 
"Take Me Out", 
"Song 2", 
"Feel Good Inc.", 
"Chase The Sun", 
"(Baby I've Got You) On My Mind", 
"Kathleen", 
"Smells Like Teen Spirit", 
"Australia Street", 
"Bad Dream", 
"Elephant", 
"The Deepest Of Sighs the Frankest Of Shadows", 
"Ubu", 
"Midnight City", 
"Chase The Sun", 
"Shooting Stars", 
"You Were Right", 
"Canned Heart", 
"Pictures", 
"Praise You", 
"Chameleon", 
"World Hold On", 
"Wake Me Up", 
"Black Fingernails", 
"Chase The Sun", 
"Dreams", 
"Fortunate Son", 
"Gimme Shelter", 
"Roxanne", 
"Africa", 
"April Sun In Cuba", 
"All Along Watch Tower", 
"Ms. Jackson", 
"Love Will Tear Us Apart", 
"Chase The Sun", 
"Bitter Sweet Symphony ", 
"My Sharona", 
"Power And The Passion", 
"Wonderwall", 
"My Happiness", 
"Dani California", 
"Are You Gonna Be My Girl", 
"Staying Alive", 
"Sweet Dreams", 
"Chase The Sun", 
"Livin' On A Prayer", 
"Fire", 
"Lonely Boy", 
"Sleepless", 
"Man Of The Year", 
"Losing It", 
"Innerbloom (What So Not Remix)", 
"Ghengis Khan ", 
"Swimming Pool", 
"Chase The Sun", 
"Can't Get You Out Of My Head", 
"Evil ", 
"This Charming Man", 
"You're The Voice", 
"Tubthumping", 
"Humble", 
"A-Punk", 
"R U Mine ", 
"BTSTU", 
"Chase The Sun", 
"I'm Shipping Up To Boston ", 
"The Pretender", 
"Smooth Criminal", 
"Chasing Cars", 
"How You Remind Me", 
"Not Many", 
"Mr. Brightside", 
"In The End", 
"Bring Me To Life", 
"Chase The Sun", 
"Innerbloom", 
"Where's Your Head At ", 
"Chase The Sun", 
"Sunchyme", 
"Eagle Rock", 
"My Heart Will Go On", 
"Covered In Chrome", 
"Call On Me", 
"La Luh", 
"Chase The Sun", 
"Get Shakey", 
"Levels", 
"Heaven", 
"Core", 
"Sweet Nothing", 
"Warp 1.9", 
"Blue", 
"Bonkers", 
"Gimme Gimme Gimme", 
"Sandstorm"]

var artists = [
"Shane Warne", 
"Flume", 
"Ocean Alley", 
"Daft Punk", 
"Kanye West", 
"Parachute Youth", 
"The Dandy Warhols", 
"Franz Ferdinand", 
"Blur", 
"Gorillaz", 
"Darts", 
"Powderfinger", 
"Catfish And The Bottlemen", 
"Nirvana", 
"Sticky Fingers", 
"The Jungle Giants", 
"Tame Impala", 
"Gang Of Youths", 
"Methyl Ethyl", 
"M83", 
"Darts", 
"Bag Raiders", 
"Rufus", 
"Jamiroquai ", 
"Sneaky Sound System", 
"Fat Boy Slim", 
"PNAU", 
"Bob Sinclair", 
"Evanesence", 
"Eskimo Joe", 
"Darts", 
"Fleetwood Mac", 
"Creedance Clearwater Rivial", 
"Rolling Stones", 
"The Police", 
"Toto", 
"Dragon", 
"Jimi Hendrix", 
"Outkast", 
"Joy Division", 
"Darts", 
"The Verve", 
"The Knack", 
"Midnight Oil", 
"Oasis", 
"Powderfinger", 
"Red Hot Chilli Peppers", 
"Jet", 
"Bee Gees", 
"Eurythmics", 
"Darts", 
"Bon Jovi", 
"Kasabian", 
"Black Keys", 
"Flume", 
"Schoolboy Q", 
"Fisher", 
"Rufus", 
"Miike Snow", 
"Kendrick Lamar", 
"Darts", 
"Kylie Minogue", 
"Interpol", 
"The Smiths", 
"John Farnham", 
"Chumbawumba", 
"Kendrick", 
"Vampire Weekend", 
"Arcitc Monkeys", 
"Jai Paul", 
"Darts", 
"Dropkick Murphys", 
"Foofighters", 
"Alien Ant Farm", 
"Snow Patrol", 
"Nickelback ", 
"Scribe", 
"The Killers", 
"Linkin Park", 
"Evanesence", 
"Darts", 
"Rufus", 
"Basement Jaxx", 
"Planet Funk", 
"Dario G", 
"Daddy Cool", 
"Celine Dion", 
"Violent Soho", 
"Eric Pryde", 
"Choomba", 
"Darts", 
"Ian Carey Project", 
"Avicii", 
"Dj Sammy", 
"RL Grime", 
"Florence And The Machine / Calvin Harris", 
"Bloody Betroots", 
"Eifel 65", 
"Dizzie Rascal", 
"ABBA", 
"Darude"
]