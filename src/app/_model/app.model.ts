export interface DefaultResponse{
    response: DataResponse<any>;
}

export interface DataResponse<T>  {
    data: T;
    success_code?: string;
    success_msg?: string;
    err_code?: string;
    err_msg?: string;
    verification_methods?: Array<any>;
}