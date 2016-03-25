from gpiozero import LED
from time import sleep

led = LED(17)

# while True:
#     led.on()
#     on = random.randint(1, 9)
#     print("on : for {0} seconds".format(on))
#     sleep(on)
#     led.off()
#     off = random.randint(1, 9)
#     print("off: for {0} seconds".format(off))
#     sleep(off)



from flask import Flask, jsonify
import json
app = Flask(__name__)

@app.route("/light/<int:pin>/<string:state>")
def light(pin, state):
    if(state == 'on'):
      led.on()
    else:
      led.off()
    print('pin {0}, type {1}'.format(pin, type(pin)))
    print('state {0}, type {1}'.format(state, type(state)))
    data = ['foo', {'bar': ('baz', None, 1.0, 2)}]
    return jsonify(x=data)

if __name__ == "__main__":
    app.run(host='0.0.0.0')

