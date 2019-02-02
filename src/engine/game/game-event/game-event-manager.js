class GameEventManager {

    constructor() {

        this.gameEvents = [];
    }

    add( gameEvent ) {

        this.gameEvents.push( gameEvent );
    }

    getEvents() {

        return this.gameEvents;
    }

}

export {

    GameEventManager
};