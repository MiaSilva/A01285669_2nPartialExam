let child = 0
let adolescent = 0
let young_adult = 0
let adult = 0
let age = 0
let sum_age = 0
let average = 0
let random_n = 0
let number1 = 0
let number2 = 0
let x = 0
let y = 0
input.onPinPressed(TouchPin.P0, function () {
    child = 0
    adolescent = 0
    young_adult = 0
    adult = 0
    for (let index = 0; index < 20; index++) {
        age = randint(5, 64)
        basic.showNumber(age)
        if (age >= 5 && age <= 13) {
            basic.showString("Child")
            child += 1
            sum_age += age
        } else if (age >= 14 && age <= 17) {
            basic.showString("Adolescent")
            adolescent += 1
            sum_age += age
        } else if (age >= 18 && age <= 35) {
            basic.showString("Young adult")
            young_adult += 1
            sum_age += age
        } else if (age >= 36 && age <= 64) {
            basic.showString("Adult")
            adult += 1
            sum_age += age
        }
    }
    average = sum_age / 20
    basic.showString("Average age")
    basic.showNumber(average)
    basic.showString("Child Total:")
    basic.showNumber(child)
    basic.showString("Adolescent Total:")
    basic.showNumber(adolescent)
})
input.onPinPressed(TouchPin.P1, function () {
    for (let index = 0; index <= 5; index++) {
        basic.clearScreen()
        random_n = randint(1, 10)
        number1 = 0
        number2 = 0
        if (number1 == number2) {
            basic.showIcon(IconNames.Happy)
            music.playMelody("B D G C5 E A C F ", 120)
        } else if (number1 != number2) {
            basic.showIcon(IconNames.Sad)
            music.playTone(440, music.beat(BeatFraction.Whole))
        }
        basic.clearScreen()
    }
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        x = 2
        y = 0
        for (let x = 0; x <= 4; x++) {
            led.plot(x, y)
            basic.pause(200)
            led.unplot(x, y)
            basic.pause(200)
        }
        basic.clearScreen()
    }
})
