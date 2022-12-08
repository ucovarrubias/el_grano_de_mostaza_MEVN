const mongoose = require('mongoose')
const schema = mongoose.Schema

const clienteSchema = new schema({
    _id: schema.Types.ObjectId,
    usuario: String,
    email: String,
    contrasenia: String,
    nombre: String,
    apellido: String,
    telefono: String,
    direccion: {
        calle: String,
        num_ext: String,
        codigo_postal: Number,
        ciudad: String,
        estado: String,
        pais: String
    },
    carrito: [{
        producto: {type: schema.Types.ObjectId, ref: 'producto'}, 
        precio: Number,
        cantidad: Number
    }]
})

module.exports = mongoose.model('cliente', clienteSchema)