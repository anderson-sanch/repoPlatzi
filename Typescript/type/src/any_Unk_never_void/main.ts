let varAny : any;
varAny = 24;
varAny = 'anderson';
varAny = true;

let varUnk: unknown;
varUnk = 24;

if(typeof(varUnk) == 'string'){
    console.log(`Esta es un string ${varUnk.toUpperCase()}`);
}else if(typeof(varUnk) == 'number'){
    console.log(`Esta es un string ${varUnk.toFixed(2)}`);
}