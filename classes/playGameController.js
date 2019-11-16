function PlayGameControllerObj() {

    this.state = "play";
    this.inited = false;
    this.transitionToStart = false;

    this.init = function() {

    }

    this.reset = function() {
        this.state = "play";
        this.inited = false;
        this.transitionToStart = false;
        this.init();
    }

    this.draw = function() {
        switch(this.state) {
            case "play":

            break;
            case "shop":

            break;
        }
    }

    this.execute = function() {

    }

    this.shouldTransitionToStart = function() {
        return this.transitionToStart;
    }

}