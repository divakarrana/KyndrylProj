const userData = require("../data/usersData.json");
const file = require("fs");

//helper function
const findUser = (user) => {
    let isFound = false;

    for(var i=0; i<userData.length; i++){
        if(user.id === userData[i].id){
            //user found
            isFound = true;
            break;
        }
    }
    if(isFound) return { user: userData[i], index: i};
    else return isFound;
}


    const insertNewUser = (req, res, next) => {
    
    let user = req.body;
    
    let userInFile = findUser(user);

    //call for update user
    if(userInFile){
        updateUser(req, res, next);
    } else{
        userData.push(user);
        //synchronously write into the file
        //insert user
        file.writeFileSync(`${__dirname}/data/usersData.json`, userData);
        //return res with updated statusCode
        res.json({
            message:"success",
            statusCode: 200
        });

        //failure in insertion? update error response
    }
}

    const updateUser = (req, res, next) => {
    let user = req.body;
    let userInFile = findUser(user);
    if(userInFile){
        //update user at the index
        userData[userInFile.index] = user;
    } else{
        //do something
    }
}

    const deleteUser = (req, res, next) => {
    //pergorm delet based on id

    //return res
}

module.exports = {deleteUser, updateUser, insertNewUser};