export interface SuccessloginResponse{
    message: string,
    user:UserResponse
    token: string
}
export interface FailloginResponse{
    message: string,
    statusMsg:string
}

export interface UserResponse{
     
        name: string,
        email: string,
        role: string
     
}