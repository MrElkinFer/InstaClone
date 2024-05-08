const userController = require("../controller/user");
const followController = require("../controller/follow");
const publicationController = require("../controller/publication");
const commentController= require("../controller/comment");
const likeController = require("../controller/like");


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
        //Publication
        getPublications: (_, {username})=> publicationController.getPublications(username),
        getPublicationsFolloweds: (_,{},ctx)=> publicationController.getPublicationsFolloweds(ctx),
        //Comment
        getComments: (_,{idPublication}) => commentController.getComments(idPublication),
        PruebaUser:(_,{idUser})=> commentController.PruebaUser(idUser),// Borrar cuando termine la prueba.
        PruebaUserDos:(_, {idPublication})=> commentController.PruebaUserDos(idPublication),
        //Like
        isLike: (_,{idPublication}, ctx) => likeController.isLike(idPublication, ctx),
        countLikes: (_,{idPublication}) => likeController.countLikes(idPublication),
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
        //Publication
        publish: (_,{ file }, ctx) => publicationController.publish(file,ctx),
        //Comment
        addComment: (_,{input}, ctx) => commentController.addComment(input,ctx),
        //Like:
        addLike: (_,{idPublication}, ctx) => likeController.addLike(idPublication,ctx), 
        deleteLike: (_,{idPublication},ctx)=> likeController.deleteLike(idPublication, ctx),
    },
}; 

module.exports = resolvers;