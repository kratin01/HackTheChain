class Apierror extends Error {
  constructor(statusCode, message="Something went wrong",errors=[],stack='') {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.data=null
    this.sucess=false
    this.errors=errors
    if(stack){
      this.stack=stack
    }
    else{
      Error.captureStackTrace(this, this.constructor);
    }

  }
}
//explain the above code
//this is a class which extends the Error class of javascript
//this class is used to make the custom error class
//this class takes 4 parameters
//statusCode,message,errors,stack
//statusCode is the status code of the error
//message is the message of the error
//errors is the array of errors
//stack is the stack trace of the error
//we are exporting this class

export default Apierror;



