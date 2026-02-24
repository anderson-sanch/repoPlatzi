export const createProduct = (
    id: number | string , 
    isNew: boolean = false, // el signo de interrogacion hace que el parametro sea opcional, es decir que no es necesario pasarlo al llamar la funcion
    sotck: number = 10,
) => {
   return {
    id,
    sotck,
    isNew
   } 
}

const p1 = createProduct(123,true, 100);

const p2 = createProduct(1233, true);

const p3 = createProduct(1234);

// otra manera de escribirlo es con un objeto como parametro

export const createProductV2 = ({
    id,
    isNew = false,
    sotck = 10
}: {
    id: number | string,
    isNew?: boolean,
    sotck?: number
}) => {
    return {
        id,
        sotck,
        isNew
    }
}