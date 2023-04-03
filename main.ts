input.onButtonPressed(Button.A, function () {
    strip.shift(-1)
    list[x] = false
    x += -1
    strip.setPixelColor(x, neopixel.colors(NeoPixelColors.Purple))
    list[x] = true
})
input.onButtonPressed(Button.B, function () {
    strip.shift(1)
    strip.clear()
    list[x] = false
    x += 1
    strip.setPixelColor(x, neopixel.colors(NeoPixelColors.Purple))
    list[x] = true
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    shooter_list[1] = true
    strip2.setPixelColor(x, neopixel.colors(NeoPixelColors.Green))
    basic.pause(200)
    shooter_list[1] = false
    strip2.setPixelColor(x, neopixel.colors(NeoPixelColors.Black))
    strip3.setPixelColor(x, neopixel.colors(NeoPixelColors.Green))
    shooter_list[2] = true
    basic.pause(200)
    shooter_list[2] = false
    strip3.setPixelColor(x, neopixel.colors(NeoPixelColors.Black))
    strip4.setPixelColor(x, neopixel.colors(NeoPixelColors.Green))
    shooter_list[3] = true
    basic.pause(200)
    shooter_list[3] = false
    strip4.setPixelColor(x, neopixel.colors(NeoPixelColors.Black))
    strip5.setPixelColor(x, neopixel.colors(NeoPixelColors.Green))
    shooter_list[4] = true
    basic.pause(200)
    shooter_list[4] = false
    strip5.setPixelColor(x, neopixel.colors(NeoPixelColors.Black))
})
let shooter_x = 0
let Enemy = 0
let strip5: neopixel.Strip = null
let strip4: neopixel.Strip = null
let strip3: neopixel.Strip = null
let strip2: neopixel.Strip = null
let strip: neopixel.Strip = null
let list: boolean[] = []
let x = 0
let shooter_list: boolean[] = []
shooter_list = [false]
x = 3
list = [false]
let Enemy_list = [false]
for (let index = 0; index <= 4; index++) {
    list.push(false)
}
for (let index = 0; index <= 4; index++) {
    Enemy_list.push(false)
    shooter_list.push(false)
}
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip2 = neopixel.create(DigitalPin.P1, 5, NeoPixelMode.RGB)
strip3 = neopixel.create(DigitalPin.P2, 5, NeoPixelMode.RGB)
strip4 = neopixel.create(DigitalPin.P3, 5, NeoPixelMode.RGB)
strip5 = neopixel.create(DigitalPin.P4, 5, NeoPixelMode.RGB)
strip.setPixelColor(x, neopixel.colors(NeoPixelColors.Purple))
list[x] = true
basic.forever(function () {
    strip.show()
    strip2.show()
    strip3.show()
    strip4.show()
    strip5.show()
})
basic.forever(function () {
    if (!(game.isGameOver())) {
        Enemy = randint(0, 4)
        strip5.setPixelColor(Enemy, neopixel.colors(NeoPixelColors.Red))
        Enemy_list[5] = true
        basic.pause(1000)
        Enemy_list[5] = false
        strip5.setPixelColor(Enemy, neopixel.colors(NeoPixelColors.Black))
        strip4.setPixelColor(Enemy, neopixel.colors(NeoPixelColors.Red))
        Enemy_list[4] = true
        basic.pause(1000)
        Enemy_list[4] = false
        strip4.setPixelColor(Enemy, neopixel.colors(NeoPixelColors.Black))
        strip3.setPixelColor(Enemy, neopixel.colors(NeoPixelColors.Red))
        Enemy_list[3] = true
        basic.pause(1000)
        Enemy_list[3] = false
        strip3.setPixelColor(Enemy, neopixel.colors(NeoPixelColors.Black))
        strip2.setPixelColor(Enemy, neopixel.colors(NeoPixelColors.Red))
        Enemy_list[2] = true
        basic.pause(1000)
        Enemy_list[2] = false
        strip2.setPixelColor(Enemy, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(Enemy, neopixel.colors(NeoPixelColors.Red))
        Enemy_list[1] = true
        basic.pause(1000)
        Enemy_list[1] = false
        strip.setPixelColor(Enemy, neopixel.colors(NeoPixelColors.Black))
    }
})
basic.forever(function () {
    if (list[Enemy] && Enemy_list[1]) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
        strip.clear()
        strip2.clear()
        strip3.clear()
        strip4.clear()
        strip5.clear()
        game.gameOver()
    }
    shooter_x = x
    if (shooter_list.indexOf(true) == Enemy_list.indexOf(true) && shooter_x == Enemy) {
        for (let index = 0; index < 4; index++) {
            strip.clear()
            strip.setPixelColor(x, neopixel.colors(NeoPixelColors.Purple))
            strip2.clear()
            strip3.clear()
            strip4.clear()
            strip5.clear()
            Enemy_list[Enemy_list.indexOf(true)] = false
            basic.pause(1000)
        }
        game.addScore(1)
    }
})
