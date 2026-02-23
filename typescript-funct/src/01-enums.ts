// los enum, nos permite poder crear una serie de opciones a escoger, parecido a los types literals, pero con la diferencia que este viene en formato de llave valor

enum ROLES {
    ADMIN = 1,
    admin = 'si',
    SELLER = 'seller',
    COSTUMER = 'costumer'
}

type User = {
    username: string;
    rol: ROLES;
}

const nicoUser:User = {
    username: 'anderson',
    rol: ROLES.ADMIN
}

console.log(nicoUser);
