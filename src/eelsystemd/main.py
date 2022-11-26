import eel

def run():
    print('hello')

    eel.init('src/eelsystemd/web/dist')
    eel.start('index.html', size=(800, 600), port=8088)
