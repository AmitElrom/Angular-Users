const user = require('./userModel')

const getUsers = () =>
{
    return new Promise((resolve,reject) =>
    {
        user.find({}, function(err,data)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(data);
            }
        })
    })
}

const updateUser = (_id,obj) =>
{
    return new Promise((resolve,reject) =>
    {
        user.findByIdAndUpdate(_id, obj, function(err)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve('User Updated !');
            }
        })
    })
}

const deleteUser = (_id) =>
{
    return new Promise((resolve,reject) =>
    {
        user.findByIdAndDelete(_id, function(err)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve('User Deleted !');
            }
        })
    })
}

const addUser = (obj) =>
{
    return new Promise((resolve,reject) =>
    {
        let newUser = new user({
            id : obj.id,
            name : obj.name,
            email : obj.email,
            address : {street : '', city : '', zipcode : null},
            tasks : [],
            posts : [],
            isSelected : false
        });

        newUser.save(function(err)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve('User Created !');
            }
        })
    })
}

// task


module.exports = {getUsers, updateUser, deleteUser, addUser}