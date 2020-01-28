export class ResponseObject<T> {
    statusCode :Number;
    data: T;
    requestId: string;
}