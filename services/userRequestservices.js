const userRequest = require("../models/userRequest");

exports.saveRequest = async (data) => {
    try{
        let checkDB = await userRequest.findOne({name:data.name, status:'pending'})
                  
         if(!checkDB){
            let newRequest = new userRequest({
                 name: data.name,
                 title: data.title,
                 request: data.request
              })
     
            await  newRequest.save()
              return "request send successfully"
         }else{
             return "previous request still pending, please wait till it get approved."
         }
    }catch(err){
        throw new Error(err)
    }
}
exports.findRequest = async () =>{
    try{
        let result;
        result = await userRequest.find({})
        return result;
    }catch(err){
        throw new Error(err)
    }
}

exports.updateRequest = async (data) =>{
    try{
        let update;
      ({name, status} = data)
       update = await userRequest.findOneAndUpdate({name:name, status:'pending'},{status:status},{new: true})
       return update;
    }catch(err){
        throw new Error(err)
    }
}

exports.findFilterRequest = async (data) =>{
    try{
        let result;
        result = await userRequest.find({status: data}); 
        return result 
   }catch(err){
    throw new Error(err)
   }
}