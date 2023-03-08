import jwt from 'jsonwebtoken'
import { StatusCodes } from 'http-status-codes'



 export const AuthUser = (req , res , next ) =>{


    
    const token = req.get('Authorization')
    console.log(token)
 if(token)
 {
    jwt.verify( token ,'xxx',(error,payload)=>{
                if(error) 
                {   console.log(error)
                    res.status(StatusCodes.UNAUTHORIZED).json({massage:"access denied 1", a:error})
                }
                else {
                    next()
                }
            })
 }


 }




