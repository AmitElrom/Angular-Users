const userBL = require('../models/userBL')

const express = require('express');
const router = express.Router();

router.route('/')
    .get(async function(req,resp)
    {
        let data = await userBL.getUsers();
        return resp.json(data);
    })

router.route('/:_id')
    .put(async function(req,resp)
    {
        let id = req.params._id;
        let body = req.body;

        let status = await userBL.updateUser(id,body);
        return resp.json(status);
    })

router.route('/:_id')
    .delete(async function(req,resp)
    {
        let _id = req.params._id;
        
        let status = await userBL.deleteUser(_id);
        return resp.json(status);
    })

router.route('/')
    .post(async function(req,resp)
    {
        let user = req.body;

        let status = await userBL.addUser(user);
        return resp.json(status);
    })

module.exports = router;