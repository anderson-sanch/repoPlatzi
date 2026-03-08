export interface BaseModel {
    readonly id: string ;
    readonly createdAt: Date;
    updatedAt: Date;
}

//readonly
//es una flag que permite la solo lectura, nunca la escritura de caracteristicas, util para evitar escribir datos que ya vienen por defecto o no puede ser sobreescrito por reglas de negocio