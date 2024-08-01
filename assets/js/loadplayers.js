amplitudesongs = [];

players = document.querySelectorAll("div.player");
players.forEach(function(player, i){
    url = "https://haztecaso.com/podcasts" + player.getAttribute("data-url");
    player.querySelector(".amplitude-play-pause").setAttribute("data-amplitude-song-index",i)
    amplitudesongs.push({
        "url": url,
        "live":true
    });
});

Amplitude.init({
    "bindings": { 32: 'play_pause'},
    "songs": amplitudesongs,
    "volume_increment": 10,
    "volume_decrement": 10
});

function updatevol(){
    vol = Amplitude.getConfig().volume;
    volumecontrols = document.querySelectorAll("div.volumectl");
    volumecontrols.forEach(function(control){
        icon = control.querySelector(".volumeicon");
        if (vol>=50){
            icon.classList.add("fa-volume-up");
            icon.classList.remove("fa-volume-down");
            icon.classList.remove("fa-volume-off");
        }
        else if(vol < 50 && vol > 0){
            icon.classList.remove("fa-volume-up");
            icon.classList.add("fa-volume-down");
            icon.classList.remove("fa-volume-off");
        }
        else if(vol == 0){
            icon.classList.remove("fa-volume-up");
            icon.classList.remove("fa-volume-down");
            icon.classList.add("fa-volume-off");
        }
        indicator = control.querySelector(".indicator");
        indicator.innerHTML = vol/10+"/10";
    });
}
window.setInterval(updatevol, 500);
