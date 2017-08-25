
function hero (name, att, hp, id){ 
	this.name = name;
	this.att = att;
	this.hp = hp;
	this.id = id;
	this.hit = 1;
	this.wins = 0;
	this.getId = getId;
	this.getInfo = getInfo;
	this.resetGame = resetGame;
}
function resetGame(name, att, hp, id){
	this.name = name;
	this.att = att;
	this.hp = hp;
	this.id = id;
	this.hit = 1;
}

function getId(){
	return this.id;
}

var obi  = new hero("Obi Wan", 8, 120, "obi");
var luke = new hero("Luke Skywalker", 5, 100, "luke");
var sid = new hero("Darth Sidious", 20, 150, "sid");
var maul = new hero("Darth Maul", 25, 180, "maul");

var game = {
	p1: "",
	com: "",
	info: [obi, luke, sid, maul],
	cast: [],

	removeCast: function(player){
		for(var i = game.cast.length - 1; i >= 0; i--) {
		   if(game.cast[i].attr('id') == player.attr('id')) {
		   	console.log("about to remove the player: " + player.attr("id"));
   			game.cast.splice(i, 1);
		    }
		}
	},

	addInfo: function(hero){
		this.info.upshift(hero);
	},

	setP1: function(player){
		p1 = player;
	},

	setCom: function(player){
		com = player;
	},

	addCast: function(player){
		cast.push(player);
	}
};


// FUNCTIONS
 function selectCharacter(player){
 	//select player
 	//move the rest to enemies
 	//if player is selected BUT game.p1 is already set don't do anything 
 	console.log(player);
	console.log("adding player to p1: " + player.attr('id'));
	game.p1 = player;
	$('#p1').prepend(player);
 	game.setP1(player);
 	game.removeCast(player);
 	//$('#com').prepend(game.cast[0], game.cast[1], game.cast[2]);		
 	for(var i = 0; i < game.cast.length; i++){
 		$('#com').prepend(game.cast[i]);		
 	}
 	 	
}
function selectEnemy(enemy){
//selected enemy goes to defender
//should not go to defender if defeder is full
	if(!(enemy.attr('id') == game.p1.attr('id'))){
		console.log("adding player to com: " + enemy.name);
		game.com = enemy;
		$('#def').prepend(enemy);
		game.setCom(enemy);
		game.removeCast(enemy);
		for(var i = 0; i < game.cast.length; i++){
			$('#com').append(game.cast[i]);		
		}
	}
}

 function getInfo(player){
 	for(var i = 0; i< game.info.length; i++){
		if(player.attr('id') == game.info[i].id){
			return game.info[i];
		}
	}
 }
 function fight(p1,com){
 	//compare atts
 	//deduct hp
 	var fighter = getInfo(p1);
 	var defender = getInfo(com);
 	var damage = fighter.att * fighter.hit;
	defender.hp = defender.hp - damage;
 	fighter.hit++;
 	fighter.hp = fighter.hp - defender.att;
 	if(fighter.hp <= 0 || defender.hp <= 0){
 		if(fighter.hp <= 0){
 			gameOver();
 		}else if(defender.hp <= 0){
 			game.com.hide();
 			game.com = "";
 			fighter.wins++;
 			if(fighter.wins == 3){
 				$("#print2").text("you win, click restart to play again.");
 				$(".action").append("<button onclick = " + "'history.go(0)'"  + ">Restart</button>");
 			}else{
 				$("#print2").text("you killed the bad guy, choose someone else. ");
 			}
 		}
 	}
 	return damage;
 }

 function gameOver(){
 	console.log("inside of gameOver");
 	game.cast = [$('#obi'), $('#maul'), $('#sid'), $('#luke')];	
	obi  = resetGame("Obi Wan", 8, 120, "obi");
	luke = resetGame("Luke Skywalker", 5, 100, "luke");
	sid = resetGame("Darth Sidious", 20, 150, "sid");
	maul = resetGame("Darth Maul", 25, 180, "maul");
 	game.info = [obi, maul, sid, luke];
 	game.p1 = "";
 	game.com = "";
 	//show the restart button. 
 	console.log("THE LINE")
 	$( ".action" ).append("<button onclick = " + "'restartGame()'"  + ">Restart</button>");
 	$("#print2").text("you ded")

 }

 function restartGame(){
 	console.log("inside of restartGame");
 	for(var i = 0; i <game.cast.length; i++){
 		//show all of the cast
 		//move them all to the  selection. 
 		$("#selection").append(game.cast[i]);
 		game.cast[i].show();
 	}

 }
 function printFight(p1, com, damage){
 	//print the att
 	//print the hp 
 	$("#print1").text("You attacked "+ com.name + " for " + damage + " damage.");
 	$("#print2").text("" + com.name + " attacked you back for " + p1.att + " damage.");
 	console.log("You attacked "+ com.name + " for " + damage + " damage.");
 	console.log("" + com.name + " attacked you back for " + com.att + " damage.");

 }

 $(document).ready(function() {
 	
 	game.cast = [$('#obi'), $('#maul'), $('#sid'), $('#luke')];
 	game.info = [obi, maul, sid, luke];
 	$(".player").on("click", function() {
 		if(game.p1 === ""){
 			selectCharacter($(this))
 		}
 		else if(game.com == ""){
 			selectEnemy($(this));
 		}
 		
 	});
 	$("#rumble").on("click", function() {
 		if(game.p1 != "" && game.com != ""){
 			var damage = fight(game.p1, game.com);
 			printFight(getInfo(game.p1),getInfo(game.com), damage);
 		}
 	});
});
 	// $("#maul").on("click", function(){
 	// 	selectCharacter($("#maul"))
 	// });
 	// $("#sid").on("click", function(){
 	// 	selectCharacter($("#sid"))
 	// });
 	// $("#luke").on("click", function(){
 	// 	selectCharacter($("#luke"))
 	// });


 	// $("#maul").on("click", function(){
 	// 	selectEnemy($("#maul"));
 	// });
 	// $("#sid").on("click", function(){
 	// 	selectEnemy($("#sid"));
 	// });
 	// $("#luke").on("click",function(){
 	// 	selectEnemy($("#luke"));
 	// });
 	//when one of the 
 	// // the player will choose a character
 	// $("#obi").on("click", function(){
 	// 	console.log("adding obi to p1");
 	// 	$('#p1').prepend($('#obi'));
 	// 	game.p1 = obi;
 	// 	$('#com').append($("#luke"), $("#sid"), $("#maul"));
 	// 	alert("select villian");
 	// 		$("#maul").on("click", function(){
 	// 			console.log("maul was selelcted");
 	// 			$("#def").prepend($('#maul'));
 	// 		});
 	// });

 	// $("#luke").on("click", function(){
 	// 	$('#p1').prepend($("#luke"));
 	// });

 	// $("#sid").on("click", function(){
 	// 	$('#p1').prepend($("#sid"));
 	// });


 	// $("#maul").on("click", function(){
 	// 	$('#p1').prepend($("#maul"));
 	// });

 	// if(){

 	// }
  	 	
