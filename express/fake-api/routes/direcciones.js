const express = require('express')

const { create_user,create_company} = require('../models/direcciones')


const router = express.Router()


router.get('/api/users/new', (req, res) => {
    const user = create_user()
    
    res.json(user)
})

router.get('/api/companies/new', (req, res) => {
    const company = create_company()
    res.json(company)
})

router.get('/api/user/company', (req, res) => {
    const user = create_user()
    const company = create_company()

    res.json({
        "user":user,
        "company":company,
    })

})


module.exports = router