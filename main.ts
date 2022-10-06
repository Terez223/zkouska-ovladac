input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    radio.sendNumber(0)
})
radio.setGroup(1)
basic.showString("Hello!")
joystickbit.initJoystickBit()
