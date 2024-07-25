

document.addEventListener('keydown', function (e) { //css attributes and dynamic sttritueb down 
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const drumkit = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if (!audio) return;

    // playing and removing audio 

    audio.currentTime = 0;
    audio.play();
    
    drumkit.classList.add('playing');

});


        
const drumkits =document.querySelectorAll('.drumpad');

drumkits.forEach((drumkit) => {
    drumkit.addEventListener('transitionend', (event) => {
        if (event.propertyName === 'transform') {
            drumkit.classList.remove('playing');
        }
    });
});









// function playing() {
//     audio.pause();
//     audio.currentTime = 0;
//     drumkit.classList.remove('playing');
// }

// document.addEventListener('keyup', (event) => {
//     if (playing && event.key === 'transform') {
//         playing();
//     }
// });

