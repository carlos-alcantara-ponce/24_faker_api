// ---------------------------------------------------
// SERVER INITIALIZATION AND CONFIGURATION SETUP
// ---------------------------------------------------
const express = require("express");
const { faker } = require("@faker-js/faker");
const app = express();
const port = 8000;

// ---------------------------------------------------
// MODEL DEFINITIONS
// ---------------------------------------------------

class Usuario {
    constructor() {

        // this._id
        this.primerNombre = faker.person.firstName();
        this.apellido = faker.person.lastName();
        this.teléfono = faker.phone.number();
        this.email = faker.internet.email();
        this.contraseña = faker.internet.password();
    }
}

class Empresa {

    constructor() {
        // this._id
        this.nombre = faker.company.name();
        this.direccion = {
            calle: faker.location.street(),
            ciudad: faker.location.city(),
            estado: faker.location.state(),
            codigoPostal: faker.location.zipCode(),
            pais: faker.location.country(),
        }
    }
}


// ---------------------------------------------------
// ROUTES SETUP
// ---------------------------------------------------

app.get("/api/users/new", (req, res) => {
    let newUser = new Usuario();
    // res.json({ message: "New User" });
    res.json({ UsuarioCreado: newUser });
});

app.get("/api/companies/new", (req, res) => {
    let newCia = new Empresa();
    // res.json({ message: "New Company" });
    res.json({ CiaCreada: newCia });
});

app.get("/api/user/company", (req, res) => {

    let newUser = new Usuario();
    let newCia = new Empresa();
    // res.json({ message: "New User and company" });
    res.json({
        UsuarioCreado: newUser,
        CiaCreada: newCia
    });

});


// ---------------------------------------------------
// SERVER STARTUP
// ---------------------------------------------------
app.listen(port, () => console.log(`Listening on port: ${port}`));
