const EmptyDataError = require("./error/emptyDataError")
const InvalidDataError = require("./error/invalidDataError")
const Post = require("../entity/post")

module.exports = class PostService{
    constructor(userRepository){    
        this.userRepository = userRepository
    }

    create(post){
        if(!post){
            throw new EmptyDataError("Post data cannot be empty")
        }
        if(!(post instanceof Post)){
            throw new InvalidDataError("Post data is not a instance of Post")
        }
        this.userRepository.create(post)
    }
}