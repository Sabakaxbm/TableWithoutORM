class ApiError extends Error {
    private status: number;

    constructor(status: any, message: any) {
        super();
        this.message = message;
        this.status = status
    }

    static badRequest(message: any) {
        return new ApiError(404, message)
    }

    static internal(message: any) {
        return new ApiError(500, message)
    }

    static forbidden(message: any) {
        return new ApiError(403, message)
    }
}

module.exports = ApiError
