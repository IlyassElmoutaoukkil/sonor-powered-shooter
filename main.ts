input.onButtonPressed(Button.B, function () {
    if(TrigerOpened){
        SuperBit.Servo2(SuperBit.enServo.S6, 170)
    }else{
        SuperBit.Servo2(SuperBit.enServo.S6, 100)
    }

    TrigerOpened = !TrigerOpened
    // SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Yellow))
})


input.onButtonPressed(Button.A, function () {
    
    SuperBit.Servo2(SuperBit.enServo.S5, 0)
    RotorAngle = 0
    

    isActive = !(isActive)
    // SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Yellow))
})
let RotorAngle = 0
let isActive = false
let TrigerOpened = true
SuperBit.Servo2(SuperBit.enServo.S6, 100)
let distance = 0
let Wise = "clock"
console.log(distance)
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )

    if (RotorAngle > 90) {
        Wise = "clock"
    }
    if (RotorAngle < 0) {
        Wise = "Rclock"
    }
    console.log(distance)
    if (isActive) {
        if (distance > 30 || distance==0) {
            if (Wise == "Rclock") {
                pause(70)
                RotorAngle += 2
            } else {
                pause(70)
                RotorAngle += -2
            }
            SuperBit.Servo2(SuperBit.enServo.S5, RotorAngle)
            // SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Yellow))
        } else {
            // SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
            if (Wise == "Rclock") {
                RotorAngle += 10
            } else {
                RotorAngle += -10
            }
            SuperBit.Servo2(SuperBit.enServo.S5, RotorAngle)
            music.playMelody("- C5 C5 - - - - - ", 900)           
            SuperBit.Servo2(SuperBit.enServo.S6, 100)
        }
    }
})
