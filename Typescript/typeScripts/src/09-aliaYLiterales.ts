console.log('esto es una prueba de alias y literales');
// Literal Types - tipos literales específicos
type Direction = 'up' | 'down' | 'left' | 'right';
type HttpStatus = 200 | 201 | 400 | 404 | 500;
type Toggle = true | false;

// Ejemplos de uso
const movePlayer = (direction: Direction) => {
    console.log(`Moviendo jugador hacia: ${direction}`);
};

const handleResponse = (status: HttpStatus) => {
    if (status === 200) {
        console.log('Éxito');
    } else if (status === 404) {
        console.log('No encontrado');
    }
};

// Uso válido
movePlayer('up');
movePlayer('left');
handleResponse(200);
handleResponse(404);

// Tipo combinado con literal
type User = {
    name: string;
    role: 'admin' | 'user' | 'guest';
};

const user: User = {
    name: 'Juan',
    role: 'admin'
};