const express = require("express"); 
const faker = require('faker');
const app = express();
// setting the port that it's available.
const port = 8000;
// starts the server listening for requests.
// takes in the port then the callback function see port being called in the callback
app.listen(port, () => {
    console.log(`Express server is listening on ${port}`);
})

const createUser = () => {
    const newUser = {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email()
    };
    return newUser;
}

const thisUser = createUser();
console.log(thisUser);


const createCompany = () => {
    const newCompany =  {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.stateAbbr(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        },
    };
    return newCompany;
}

const companyOne = createCompany();
console.log(companyOne);



// req = request object from the server and the
// res = response from the server.  could be called whatever, but this makes the most sense
app.get("/api/users/new", (req, res) => {
    const newUser1 = createUser();
    res.json({newUser1});
});

app.get("/api/companies/new", (req, res) => {
    const newCompany1 = createCompany();
    res.json({newCompany1});
})

app.get("/api/user/company", (req, res) => {
    const newUserComp = createUser();
    const newCompUser = createCompany();
    res.json({newUserComp, newCompUser});
})