import {User, ROLES} from './01-enums';

const currentuser: User = {
    username: 'anderson',
    rol: ROLES.ADMIN
}

export const checkRoleAdmin = () => {
    if(currentuser.rol === ROLES.ADMIN){
        return 'es admin';
    }
    return 'no es admin';
}

const user1 = checkRoleAdmin();

console.log(user1);


export const checkRolV2 = (role1: string, role2: string) => {
    if(currentuser.rol === role1){
        return 'es admin';
    };
    if(currentuser.rol === role2){
        return 'es seller';
    }
    return 'no es admin ni seller';
}

const prueba2 = checkRolV2(ROLES.ADMIN, ROLES.SELLER);

console.log(prueba2);

export const checkRolV3 = (roles: string[]) => {
    if(roles.includes(currentuser.rol)){
        return 'es admin';
    }
    return 'no es admin';
}

const prueba3 = checkRolV3([ROLES.ADMIN, ROLES.SELLER]);

console.log(prueba3);

export const checkRolV4 = (...roles: string[]) => {
    if(roles.includes(currentuser.rol)){
        return 'es admin';
    }
    return 'no es admin';
}

const prueba4 = checkRolV4(ROLES.ADMIN, ROLES.SELLER);

console.log(prueba4);

// con el operador rest, podemos recibir un numero indefinido de parametros, y se guardan en un array, para luego poder manipularlos como queramos, en este caso, con el metodo includes, podemos verificar si el rol del usuario actual esta incluido en el array de roles que recibimos como parametro.