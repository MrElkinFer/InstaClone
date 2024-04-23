const userController = require("../controller/user");
const followController = require("../controller/follow");

const resolvers ={

    //Upload: GraphQLUpload,//nuevas lineas
    Query:{
        //user
        getUser: (_,{Id, username}) => userController.getUser(Id, username),
        searchUser: (_, {search}) => userController.searchUser(search),
        //Follow:
        isFollow: (_,{ username }, ctx)=> followController.isFollow(username,ctx),
        getFollowers: (_,{username}) => followController.getFollowers(username),
        getFolloweds: (_,{username}) => followController.getFolloweds(username),
    },


    Mutation:{
        //Usuario
        Register:  (_,{input}) => userController.register(input),
        Login:  (_,{input}) => userController.login(input), 
        updateAvatar: (_,{file}) => userController.updateAvatar(file),
        updateUser: (_,{input}, ctx) => userController.updateUser(input, ctx),
        //Follow
        follow: (_, { username }, ctx) => followController.follow(username, ctx),
        unFollow: (_,{ username }, ctx) => followController.unFollow(username,ctx),
    }
}; 

module.exports = resolvers;