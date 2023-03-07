import jwt from 'jsonwebtoken'
import { StatusCodes } from 'http-status-codes'



 export const AuthUser = (req , res , next ) =>{


    
    const token = req.get('Authorization')
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



//  import { StatusCodes } from "http-status-codes";
// import jwt from 'jsonwebtoken'
// export function verifyToken(req, res, next) {
 

//     const Authorization = req.get('Authorization')


//   if (Authorization) {

//     let token = Authorization.split(" ")[1]

//     // here is jwt.verify() is inbuilt function of jwt 

// // we will give two argument inside the verify 1. token 2. password and a callback function 

//              jwt.verify(token,'ilove123',(error,payload)=>{
//         if(error) 
//         {   
//             res.status(StatusCodes.UNAUTHORIZED).json({massage:"access denied 1", a:error})
//         }
//         else {
//             next()
//         }
//     })
    

    
//   } else {

//     res
//       .status(StatusCodes.UNAUTHORIZED)
//       .json({ massage: " access denied 2 " });
//   }
// }