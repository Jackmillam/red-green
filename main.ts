input.onButtonPressed(Button.A, function () {
    State = Green
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    State = Red
    basic.showIcon(IconNames.No)
})
let Red = 0
let Green = 0
let State = 0
State = 0
Green = 1
Red = 2
radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(State)
})
