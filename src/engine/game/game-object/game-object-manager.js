class GameObjectManager {

    constructor() {

        this.gameObjects = [];
    }

    add( gameObject ) {

        this.gameObjects.push( gameObject );
    }

    getObjects() {

        return this.gameObjects;
    }

}

export {

    GameObjectManager
};