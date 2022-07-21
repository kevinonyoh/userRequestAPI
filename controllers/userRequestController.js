const requestSevices = require("../services/userRequestservices")
const ErrorHandler = require("../utils/ErrorHandler")
const responseHandler = require("../utils/responseHandler")

exports.postRequest = async (req,res,next)=>{
     try{
         const makePost = await requestSevices.saveRequest(req.body)   
         if(makePost){
               responseHandler(res,null,makePost)
         }else{
            throw new ErrorHandler(500,"internal Error occur")
         }
        next()
    }catch(err){
        
        next(err)
    }
}

exports.getRequest = async (req,res,next) => {
     try{
        let result;
        result = await requestSevices.findRequest();
        if(result){
            responseHandler(res,result,null)

        }else{
            throw new ErrorHandler(500,"internal Error occur")
        }

             next()
    }catch(err){
        
       next(err)
    }
   
}

exports.patchRequest = async (req,res,next) => {
    
    try{
        let update
      update  = await requestSevices.updateRequest(req.body)
      if(update){
        
        responseHandler(res,update,"update was successful")

      }else{
        throw new ErrorHandler(500,"internal Error occur")
      }
     
         next()
    }catch(err){
        
         next(err)
    }
    

}

exports.getFilterRequest = async (req,res,next) => {
    try{
        let result;
        let state = req.params.status.toLowerCase();
        result = await requestSevices.findFilterRequest(state)
        if(result){
            responseHandler(res,result,"filter request")
        }else{
            throw new ErrorHandler(500,"internal Error occur")
        }
        
             next()
   }catch(err){
     
     next(err)
   }
}
  
