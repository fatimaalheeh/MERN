const express = require("express");
const app = express();
const port = 8001;
const faker = require('faker');
class user {
    constructor(){
        this._id = faker.datatype.uuid(); 
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password =faker.internet.password();
    }
}
class Address{
    constructor(){
        this.street = faker.address.streetName();
        this.city = faker.address.cityName();
        this.zipCode = faker.address.zipCode();
        this.contry = faker.address.country();
    }
}
class company {
    constructor(){
        this._id = faker.datatype.uuid();
        this.companyName = faker.company.companyName();
        this.address = newAddress
    }
}
const newUser = new user();
const newAddress = new Address();
const newCompany = new company();
//------------------------------GET
app.get("/api/users", (req, res) => {
    res.json( users );
});
app.get("/api/companies", (req, res) => {
    res.json( companies );
});
app.get("/api/users/new", (req, res) => {

    res.json(newUser);
});
app.get("/api/companies/new", (req, res) => {
    res.json(newCompany);
});
app.get("/api/user/company", (req, res) => {
    res.send(`${newCompany.companyName};  ${newUser.firstName}` );
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );