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

function playSound(event) {
    //assign to audio based on which key is pressed
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)

    //if no key assigned to audio, exit the funciton
    if (!audio) return;

    //during every keydown event, reset current time to 0;
    //ensure sound play continuous during rapid key press, and not limit to audio length
    audio.currentTime = 0;

    //play audio
    audio.play();

    //find key based on key pressed
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);

    //assign play styling to key
    key.classList.add('play');

    // let playClass = document.querySelector('.drum');

    let randomizer = Math.floor(Math.random() * colors.length);

    key.style.boxShadow = `
        inset 20px 20px 50px ${colors[randomizer].shadow}, 
        inset -20px -20px 50px ${colors[randomizer].highlight}`;

}

function removeColor(e) {
    if (e.propertyName !== 'color') return;
    e.target.style.boxShadow = "18px 18px 30px #D1D9E6, -18px -18px 30px #fff";
    e.target.classList.remove('play');
}

//apply event listener for each drum
const drums = Array.from(document.querySelectorAll('.drum'));

drums.forEach(drum => drum.addEventListener('transitionend', removeColor));

window.addEventListener('keydown', playSound);