function PlayGameControllerObj() {

    this.state = "play";
    this.inited = false;
    this.transitionToStart = false;
    this.otherFrame = true;
    this.deltaX = 0;

    this.init = function() {
        // Set the initial parameter values.
        this.state = "play";
        this.inited = false;
        this.transitionToStart = false;

        // Create the player and NPC containers.
        this.player = new Player(200, 350);
        this.bombers = [];
        this.sweepers = [];

        this.mountains = [
            new Mountain(0.020, 105, 290, COLORS.evilGrey),
            new Mountain(0.011, 120, 290, COLORS.highPeakGrey),
            new Mountain(0.009, 135, 290, COLORS.sageGreen),
            new Mountain(0.009, 130, 310, COLORS.oliveGreen),
            new Mountain(0.009, 160, 320, COLORS.armyGreen),
            new Mountain(0.004, 305, 320, COLORS.seaweedGreen),
            new Mountain(0.004, 365, 375, COLORS.dirt)
        ]; 
    }

    this.reset = function() {
        this.init();
    }

    this.drawGame = function() {

        // Draw the backdrop.
        noStroke();

        if(this.player.position.y < 100) {
            push();
            translate(0, -this.player.position.y + 100);
        }

        // Draw the height meter.
        stroke(COLORS.fadedBlack);
        strokeWeight(3);
        line(10, -HEIGHT_METER_LENGTH-height, 10, height);

        for(var i = 0; i >= -HEIGHT_METER_LENGTH; i = i - HEIGHT_METER_INTERVAL) {
            line(10, i+height, 30, i+height);
        }

        noStroke();
        for(var i = 0; i >= -HEIGHT_METER_LENGTH; i = i - HEIGHT_METER_INTERVAL) {
            text((-i).toString(), 20, i+height-5);
        }

        fill(COLORS.skyBlue);

        this.mountains.forEach(mountain => {
            mountain.draw();
            mountain.move();
        });

        this.player.draw();

        if(this.player.position.y < 100) {
            pop();
        }

        //this.player.draw();
        // this.bombers.forEach(bomber => bomber.draw());

    }

    this.draw = function() {
        // console.log("Drawing game!");
        switch(this.state) {
            case "play":
                this.drawGame();
            break;
            case "shop":
                this.drawShopScreen();
            break;
        }
    }

    this.executeGame = function() {
        // Move the player based on their inputs.
        this.player.move();
    }

    this.execute = function() {
        switch(this.state) {
            case "play":
                this.executeGame();
            break;
            case "shop":
                this.executeShop();
            break;
        }
    }

    this.shouldTransitionToStart = function() {
        return this.transitionToStart;
    }

}