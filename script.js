window.addEventListener('keydown', function(event){
    //assign to audio based on which key is pressed
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)

    //if no key assigned to audio, exit the funciton
    if(!audio) return;

    //during every keydown event, reset current time to 0;
    //ensure sound play continuous during rapid key press, and not limit to audio length
    audio.currentTime = 0;

    //play audio
    audio.play();

    //find key based on key pressed
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);

    //assign play styling to key
    key.classList.add('play');
});


//apply event listener for each drum
const drums = Array.from(document.querySelectorAll('.drum'));

// for(let i = 0; i < drums.length; i++){
//     drums[i].addEventListener('transitioned', function(e){
//         console.log(e);
//     })
// }

drums.forEach(drum => drum.addEventListener('transitionend', function(e) {
    if( e.propertyName !== 'color') return;
    e.target.classList.remove('play');
}));