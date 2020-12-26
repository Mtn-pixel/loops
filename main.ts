input.onGesture(Gesture.Shake, function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Forever)
    basic.setLedColor(Colors.Orange)
    basic.showIcon(IconNames.Happy)
})
