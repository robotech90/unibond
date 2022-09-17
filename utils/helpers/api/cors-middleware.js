import Cors from "cors";

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function corsMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }

            return resolve(result);
        });
    });
}

export { corsMiddleware };
