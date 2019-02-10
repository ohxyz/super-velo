const REFRESH_RATE = 60;

const NONE = 0
const UP = 1;
const RIGHT = 2;
const DOWN = 3;
const LEFT = 4;

const MOVE = 'move';
const IDLE = 'idle';
const WALK = 'walk';
const JUMP = 'jump';
const ATTACK = 'attack';
const JUMP_ATTACK = 'jump-attack';
const DEAD = 'dead';
const DIED = 'dead';

const CONSTANTS = {

    REFRESH_RATE,
    
    NONE,
    UP, 
    RIGHT, 
    DOWN, 
    LEFT,

    MOVE,
    IDLE,
    WALK,
    JUMP,
    ATTACK,
    DIED,
    DEAD,
};

module.exports = {

    CONSTANTS, ...CONSTANTS
};
