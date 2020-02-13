let colors = [{
        //red
        shadow: '#cf5447',
        highlight: '#ff725f'
    },

    {
        //orange
        shadow: '#d48b43',
        highlight: '#ffbd5b'
    },

    {
        //yellow
        shadow: '#d0bf46',
        highlight: '#ffff5e'
    },

    {
        //teal
        shadow: '#4acc95',
        highlight: '#64ffc9'
    },

    {
        //blue
        shadow: '#44cbd3',
        highlight: '#5cffff'
    },

    {
        //purple
        shadow: '#774acc',
        highlight: '#a164ff'
    }
];

// let randomizer = Math.floor(Math.random() * 4);
// console.log(randomizer);

function keyPlaySound() {
    // console.log(event); //refers to key press
    // console.log(this); //refers to window parent
    //assign to audio based on which key is pressed
    let keyCode = event.keyCode;
    
    playAudio(keyCode);

    //find key based on key pressed
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    //assign play styling to key
    key.classList.add('play');

    randomColors(key);
};

function mousePlaySound() {
    //after mouse click, identify which item is being click
    //find its data-key and assign to keyCode
    const keyCode = this.getAttribute('data-key');

    playAudio(keyCode);

    this.classList.add('play');

    randomColors(this);
}

function randomColors(key) {
    let randomizer = Math.floor(Math.random() * colors.length);

    key.style.boxShadow = `
        inset 20px 20px 60px ${colors[randomizer].shadow}, 
        inset -20px -20px 60px ${colors[randomizer].highlight}`;
};

function playAudio(keyCode) {
    //align keyCode with audio, play audio
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
    if (!audio) return; //if no audio, exit out of function

    audio.currentTime = 0;
    audio.play();
}

function removeColor(e) {
    if (e.propertyName !== 'color') return;
    e.target.style.boxShadow = "18px 18px 30px #D1D9E6, -18px -18px 30px #fff";
    e.target.classList.remove('play');
};


//apply event listener for each drum
const drums = document.querySelectorAll('.drum');
drums.forEach(drum => drum.addEventListener('transitionend', removeColor));

drums.forEach(drum => drum.addEventListener('mousedown', mousePlaySound));
window.addEventListener('keydown', keyPlaySound);