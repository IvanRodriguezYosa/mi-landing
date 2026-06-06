from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/contacto' , methods=['POST'])
def contacto():
    data = request.get_json()
    nombre = data.get('nombre')
    email = data.get('email')
    mensaje = data.get('mensaje')

    print(f"Nuevo mensaje de {nombre} ({email}): {mensaje}")

    return jsonify({'ok' : True, 'mensaje': 'Mensaje recibido'})

if __name__ == '__main__':
    app.run(debug=True)