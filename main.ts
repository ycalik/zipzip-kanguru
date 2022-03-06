let kanguru1 = images.createImage(`
    . # . . #
    # # . . #
    . # # # .
    . . # . .
    # # . . .
    `)
let kanguru2 = images.createImage(`
    # # . . #
    . # # # .
    . . # . .
    # # . . .
    . . . . .
    `)
let kanguru3 = images.createImage(`
    . # # # .
    . . # . .
    # # . . .
    . . . . .
    . . . . .
    `)
let kanguru4 = images.createImage(`
    . . # . .
    # # . . .
    . . . . .
    . . . . .
    . . . . .
    `)
let kanguru5 = images.createImage(`
    # # . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
kanguru1.showImage(0)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        music.setTempo(180)
        kanguru1.scrollImage(5, 50)
        kanguru2.scrollImage(5, 50)
        kanguru3.scrollImage(5, 50)
        kanguru4.scrollImage(5, 50)
        kanguru5.scrollImage(5, 50)
        kanguru1.scrollImage(5, 50)
    }
})
