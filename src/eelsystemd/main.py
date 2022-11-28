import json
import subprocess
from typing import Any
import eel
import jc


@eel.expose
def hello(msg: str):
    print(f"Hello from Python.  {msg=}")


@eel.expose
def py_systemctl() -> list[dict[str, Any]]:
    print('py_systemctl')
    proc = subprocess.run(['systemctl'], check=True, capture_output=True, text=True)
    return jc.parse('systemctl', proc.stdout)

def run():
    print('hello')

    eel.init('src/eelsystemd/web/dist')
    eel.echo('hello')
    eel.start('index.html', size=(1500, 931), port=8088)
