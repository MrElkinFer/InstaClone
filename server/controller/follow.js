const Follow = require("../models/follow")
const User = require("../models/user");



async function follow(username, ctx){
    //console.log(username);
    //console.log(ctx);
    const userFound= await User.findOne({ username });
    if(!userFound) throw new Error("Usuario no encontrado");
    //return false;
    
    //console.log(ctx);

    try {
        const follow = new Follow({
            idUser: ctx.user.id,
            follow: userFound._id
        });

        follow.save();
        return true;
        
    } catch (error) {
        console.log(error)
        return false;
    }  
    
}

async function isFollow( username, ctx ){
    const userFound = await User.findOne({ username });
    if(!userFound) throw new Error("Usuario no encontrado");
    const follow = await Follow.find({idUser: ctx.user.id}).where("follow").equals(userFound._id);
    //console.log(ctx.user.id); 
    if (follow.length > 0) {
        return true;
    }
    return false;
    
}

async function unFollow( username, ctx ){
    const userFound = await User.findOne({ username });

    const follow = await Follow.deleteOne( {idUser: ctx.user.id}).where("follow").equals(userFound._id);
    //console.log(follow);    
    if(follow.deletedCount > 0){
        return true;
    }
    return false;
}

async function getFollowers(username){
    const user = await User.findOne({username});
    const followers = await Follow.find({follow: user._id}).populate("idUser");
    //console.log(user);
    const followersList = [];
    for await (const data of followers){
        followersList.push(data.idUser);
    }
    return followersList;
}

async function getFolloweds(username){
    const user = await User.findOne({username});
    const followeds = await Follow.find( {idUser: user._id}).populate("follow");
    const followedsList = [];
    for await (const data of followeds){
        followedsList.push(data.follow);
    }
    return followedsList;
}

async function getNotFolloweds(ctx){
    const users= await User.find().limit(50);

    const userList= [];
    for await (const user of users){
        const isFollowed = await Follow.findOne({idUser: ctx.user.id}).where("follow").equals(user._id);

        if(!isFollowed){
            if(user._id.toString()!== ctx.user.id ){
                userList.push(user);
            }

        }
    }
    return userList; 

    //console.log(ctx);
    //return null;
}

module.exports = {
    follow,
    isFollow,
    unFollow,
    getFollowers,
    getFolloweds,
    getNotFolloweds,
};