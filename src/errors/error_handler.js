class BaseError extends Error {
    constructor(message) {
        super();
        this.message = message
    }

    getCode() {
        if (this instanceof BadRequest) {
            return 400;
        }
        if (this instanceof NotFound) {
            return 404;
        }
        return 500;
    }
}

class BadRequest extends BaseError {
}

class NotFound extends BaseError {
}

const handleError = (err, req, res, next) => {
    if (err instanceof BaseError) {
        return res.status(err.getCode()).json({
            message: err.message
        });
    }

    return res.status(500).json({
        status: 'error',
        message: err.message
    });
}

const respondWithError = (message) => {
    throw new BaseError(message)
}

module.exports = {
    BaseError,
    handleError,
    respondWithError,
    BadRequest,
    NotFound
}
