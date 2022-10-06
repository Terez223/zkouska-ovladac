input.onButtonPressed(Button.A, function () {
    radio.sendNumber(4)
})
radio.setGroup(1)
basic.showString("Hello!")
joystickbit.initJoystickBit()
basic.forever(function () {
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        radio.sendNumber(0)
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        radio.sendNumber(1)
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        radio.sendNumber(2)
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
        radio.sendNumber(3)
    }
})
