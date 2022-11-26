import eel


@eel.expose
def hello(msg: str):
    print(f"Hello from Python.  {msg=}")


def run():
    print('hello')

    eel.init('src/eelsystemd/web/dist')
    eel.echo('hello')
    eel.start('index.html', size=(800, 600), port=8088)
