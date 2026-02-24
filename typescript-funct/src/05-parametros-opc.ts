export const createProduct = (
    id: number | string , 
    isNew?: boolean, // el signo de interrogacion hace que el parametro sea opcional, es decir que no es necesario pasarlo al llamar la funcion
    sotck?: number,
) => {
   return {
    id,
    sotck: sotck ?? 10, // este operdor no toma en cuenta 0 y null, pero si undefined, nullis colections
    isNew: isNew ?? true // es decir que datos como 0, null, ' ', false no se toman en cuenta y se asigna el valor por defecto, si no se le da un valor a isNew se le asigna true, pero si se le da un valor como false, se toma ese valor y no el por defecto, al llamar la funcion sin pasar el parametro isNew, se le asigna el valor por defecto true, pero si se le pasa el valor false, se toma ese valor y no el por defecto, lo mismo con sotck, si no se le da un valor a sotck se le asigna 10, pero si se le da un valor como 0, se toma ese valor y no el por defecto
   } 
}

const p1 = createProduct(123,true, 100);

const p2 = createProduct(1233, true);

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