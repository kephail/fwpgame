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

	for(var i = 0; i < 5; i++){
		peasants.push(new peasant(i * 100,10, peasantGroup, 'peasant'));
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

}

peasant = function(x, y, group, sprite) {
	this.x = x;
	this.y = y;

	this.peasant = group.create(x, y, sprite);
}