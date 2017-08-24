var hero = {
	name: "",
	att: 0,
	hp: 0,

	init: function(name, att, hp){
		this.name = name;
		this.att = att;
		this.hp = hp;
		return this;
	}
}
var obi = hero.init("Obi Wan", 25, 120);
var luke = hero.init("Luke Skywalker", 25, 120);
var sid = hero.init("Darth Sidious", 25, 120);
var maul = hero.init("Darth", 25, 120);

var game = {
	p1: "",
	com: "",
	cast: [],

	removeCast: function(player){
		for(var i = game.cast.length - 1; i >= 0; i--) {
		   if(game.cast[i].attr('id') == player.attr('id')) {
		   	console.log("about to remove the player: " + player.attr("id"));
   			game.cast.splice(i, 1);
	    }
	}
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

 function fight(p1,com){
 	//compare atts
 	//deduct hp

 }

 function printFight(){
 	//print the att
 	//print the hp 

 }

 $(document).ready(function() {

 	$("#obi")

 	game.cast = [$('#obi'), $('#maul'), $('#sid'), $('#luke')];
 	// $('#mydiv .myclass');
 	$(".player").on("click", function() {
 		if(game.p1 === ""){
 			selectCharacter($(this))
 		}
 		else if(game.com == ""){
 			selectEnemy($(this));
 		}
 		
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

});
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
  	 	
