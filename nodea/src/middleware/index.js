function runMiddlewares(req, res, middelwares) {
    let index = 0;

    const next = () => {
        if (index < middelwares.length) {
            const midleware = middelwares[index++];
            midleware(req, res, next)

            next();
        }
    }
}

const middleware1 = (req, res, next) => {
    console.log('middleware1; Autenticacion de la peticion');
    next()
}

const middleware2 = (req, res, next) => {
    console.log('middleware2; procesamiento de la peticion');
    next()
}

const middleware3 = (req, res, next) => {
    console.log('middleware2; finalizacion de la peticion');
    next()
}

const req = {};
const res = {};
runMiddlewares(req, res,[middleware1,middleware2,middleware3])