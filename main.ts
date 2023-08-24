/**
 * Schrittzähler:
 * 
 * Zählt wie oft der micro:bit geschüttelt wird.
 * 
 * Zurücksetzen mit A und B
 */
input.onGesture(Gesture.Shake, function () {
    Schritte += 1
})
input.onButtonPressed(Button.AB, function () {
    // Wenn A und B gedrückt werden dann wird der Zähler auf 0 zurückgesetzt.
    Schritte = 0
})
let Schritte = 0
Schritte = 0
basic.forever(function () {
    basic.showNumber(Schritte)
})
