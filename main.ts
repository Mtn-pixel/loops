input.onGesture(Gesture.Shake, function () {
    music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Forever)
    basic.setLedColor(Colors.Orange)
    basic.showIcon(IconNames.Happy)
})
