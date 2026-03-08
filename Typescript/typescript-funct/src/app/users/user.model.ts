import { BaseModel } from '../base.model';

export enum ROLES {
    ADMIN = 'admin',
    USER = 'user',
    SELLER = 'seller'
}

export interface User extends BaseModel {
    name: string;
    email: string;
    role: ROLES;
}