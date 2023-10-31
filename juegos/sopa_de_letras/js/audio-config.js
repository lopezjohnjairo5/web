const configVolumeSounds = () => {
    let backgroundMusicControlValue = parseFloat(document.getElementById('background-music').value),
    errorMusicControlValue = parseFloat(document.getElementById('error-sound').value),
    correctMusicControlValue = parseFloat(document.getElementById('correct-sound').value),
    winMusicControlValue = parseFloat(document.getElementById('win-sound').value),
    loseMusicControlValue = parseFloat(document.getElementById('lose-sound').value),
    clockMusicControlValue = parseFloat(document.getElementById('clock-sound').value);

    volumeSounds(backGSound,backgroundMusicControlValue); // audio de fondo
    volumeSounds(correctSound,correctMusicControlValue); // audo de # correcto
    volumeSounds(errorSound,errorMusicControlValue); // audio de error
    volumeSounds(winSound,winMusicControlValue);
    volumeSounds(loseSound,loseMusicControlValue);
    volumeSounds(clickBtnSound);
    volumeSounds(clockSound,clockMusicControlValue);
};

let saveAudioConfig = document.getElementById('save-audio-config');

saveAudioConfig.addEventListener('click', () => {
    replaySound(clickBtnSound); // sonido de click en btn
    configVolumeSounds();
});