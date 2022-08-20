input.onPinPressed(TouchPin.P0, function () {
    if (settings == 0) {
        basic.showNumber(3)
        basic.showNumber(2)
        basic.showNumber(1)
        basic.clearScreen()
        running = false
        false_start = false
        basic.pause(1000 + randint(0, 2000))
        if (!(false_start)) {
            start = input.runningTime()
            running = true
            led.stopAnimation()
            basic.clearScreen()
            led.plot(randint(0, 4), randint(0, 4))
        }
    } else if (settings == 1) {
        rounds += 1
    }
})
input.onButtonPressed(Button.A, function () {
    control.reset()
})
input.onPinPressed(TouchPin.P2, function () {
    if (settings == 0) {
        if (rounds != 0) {
            if (running) {
                running = false
                basic.showLeds(`
                    . . . # #
                    . . . # #
                    . . . # #
                    . . . # #
                    . . . # #
                    `)
                end = input.runningTime()
                basic.pause(1000)
                basic.showNumber(end - start)
                rounds += -1
                P2 += 1
            } else {
                false_start = true
                basic.showLeds(`
                    . . . . .
                    # . # . .
                    . # . . .
                    # . # . .
                    . . . . .
                    `)
            }
        }
    } else if (settings == 1) {
        basic.showString("OK!")
        settings = 0
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (settings == 0) {
        if (rounds != 0) {
            if (running) {
                running = false
                basic.showLeds(`
                    # # . . .
                    # # . . .
                    # # . . .
                    # # . . .
                    # # . . .
                    `)
                end = input.runningTime()
                basic.pause(1000)
                basic.showNumber(end - start)
                rounds += -1
                P1 += 1
            } else {
                false_start = true
                basic.showLeds(`
                    . . . . .
                    # . # . .
                    . # . . .
                    # . # . .
                    . . . . .
                    `)
            }
        }
    } else if (settings == 1) {
        rounds += -1
    }
})
let P1 = 0
let P2 = 0
let settings = 0
let rounds = 0
let end = 0
let start = 0
let false_start = false
let running = false
running = false
false_start = false
start = 0
end = 0
rounds = 0
settings = 1
basic.showString("# of rounds?",90)
basic.showString("P0 + P1 - P2 = OK",90)
basic.forever(function () {
    if (settings == 1) {
        basic.showNumber(rounds)
    }
    if (rounds == 0) {
        if (P1 > P2) {
            basic.showString("P1 Wins! Resetting...")
            control.reset()
        } else if (P1 < P2) {
            basic.showString("P2 Wins! Resetting...")
            control.reset()
        } else {
            basic.showString("Tie! One More!")
            rounds += 1
        }
    }
})
