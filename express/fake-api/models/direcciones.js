const { faker } = require('@faker-js/faker');



function create_user () {
    console.log("create_user")
    const id = faker.datatype.uuid() // '4136cd0b-d90b-4af7-b485-5d1ded8db252'
    const firstName = faker.name.firstName() // 'Italo'
    const lastName = faker.name.lastName() // 'Hauck'
    const number = faker.phone.number() // '961-770-7727'
    const email = faker.internet.email(firstName,lastName) // 'Kassandra4@hotmail.com'
    
    

    return {
        id,
        firstName,
        lastName,
        number,
        email
    }
}

function create_company () {
    console.log("create_company")
    const id = faker.datatype.uuid() // '4136cd0b-d90b-4af7-b485-5d1ded8db252'
    const name = faker.company.name() // 'Zieme, Hauck and McClure'
    const street = faker.address.streetName() // 'Cavill Avenue'
    const city = faker.address.cityName() // 'San Rafael'
    

    return {
        id,
        name,
        street,
        city
    }
}



module.exports = {
    create_user,
    create_company
}