const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler}

//Another way of doing this 

//We are using higher order function here
//Higher order function is a function which takes a function as a parameter or returns a function

// const higherOrderfunction=()=>{}
// const higherOrderfunction2=(func)=>{()=>{}}
// const higherOrderfunction3=(func)=>()=>{}
// const handler= (func)=> async(req,res,next)=>{
//     try{
//         await func(req,res,next)
//     }catch(err){
//         next(err)
//     }
// }