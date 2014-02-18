var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {

}

var player;
var peasants;

var cursors;

var peasantGroup;

function create() {

	player = game.add.sprite(10, 300, 'player');
	cursors = game.input.keyboard.createCursorKeys();

	peasantGroup = game.add.group();
	peasants = [];

	for(var i = 0; i < 7; i++){
		reverse = i % 2;
		if (reverse === 1)
			reverse = true;
		else
			reverse = false;

		x = (i+1) * 100;
		if(!reverse)
		{
			y = 10;
		}
		else
		{
			y = 550;
		}

		peasants.push(new peasant(x,y, reverse, peasantGroup, 'peasant'));
	}
	

}

function update() {
	player.body.velocity.setTo(0,0);
	if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -150;
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 150;
    }
    if (cursors.up.isDown)
    {
    	// left
    	player.body.velocity.y = -150;
    }
    if(cursors.down.isDown)
    {
    	// right
    	player.body.velocity.y = 150;
    }

    for(var i = 0; i < peasants.length; i++){
    	if(peasants[i].reverse === false){
    		peasants[i].peasant.body.velocity.y = 150;
    	}
    	else
    	{
    		peasants[i].peasant.body.velocity.y = -150;
    	}
    	if(peasants[i].reverse === false && peasants[i].peasant.body.y >= game.height){
    		peasants[i].reverse = !peasants[i].reverse;
    	}
    	else if(peasants[i].reverse === true && peasants[i].peasant.body.y <= 0)
    	{
			peasants[i].reverse = !peasants[i].reverse;
    	}
    }

}

peasant = function(x, y, reverse, group, sprite) {
	this.x = x;
	this.y = y;

	this.reverse = reverse;

	this.peasant = group.create(x, y, sprite);
}