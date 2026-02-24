export enum ROLES {
    ADMIN = 'admin',
    USER = 'user',
    SELLER = 'seller'
}

export interface User {
    id: number | string;
    name: string;
    email: string;
    role: ROLES;
}