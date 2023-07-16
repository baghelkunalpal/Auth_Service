const {User} = require('../models/index');

class UserRepository{
    async create(data){
        try{
            const user = await User.create(data);

        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }

    async destroy(userId){
        try{

            await User.destroy({
                where:{
                    id:userId
                }
            });
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw error;
        }

    }
    async getById(userId){
        try{

        }catch(error){
            console.log("Something went wrong in the repository layer")
        }
    }
}

module.exports = UserRepository;