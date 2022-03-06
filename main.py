kanguru1 = images.create_image("""
    . # . . #
        # # . . #
        . # # # .
        . . # . .
        # # . . .
""")
kanguru2 = images.create_image("""
    # # . . #
        . # # # .
        . . # . .
        # # . . .
        . . . . .
""")
kanguru3 = images.create_image("""
    . # # # .
        . . # . .
        # # . . .
        . . . . .
        . . . . .
""")
kanguru4 = images.create_image("""
    . . # . .
        # # . . .
        . . . . .
        . . . . .
        . . . . .
""")
kanguru5 = images.create_image("""
    # # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
""")
kanguru1.show_image(0)

def on_forever():
    if input.button_is_pressed(Button.A):
        music.start_melody(music.built_in_melody(Melodies.JUMP_UP), MelodyOptions.ONCE)
        music.set_tempo(180)
        kanguru1.scroll_image(5, 50)
        kanguru2.scroll_image(5, 50)
        kanguru3.scroll_image(5, 50)
        kanguru4.scroll_image(5, 50)
        kanguru5.scroll_image(5, 50)
        kanguru1.scroll_image(5, 50)
basic.forever(on_forever)
