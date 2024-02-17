
class ApiResponse {
    constructor(statusCode,data, message = "Success"){
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.sucess = statusCode < 400; //if status code is less than 400 then sucess is true else false status code is basically the status code of the response in simple words if the request is sucessfull then status code is 200 if the request is not sucessfull then status code is 400
    }
}

export {ApiResponse}