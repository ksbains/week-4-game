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
 	cast: []
 };

 function selectCharacter(player){
 	game.p1 = player;
 	$('#p1').prepend($(player))
 }

 $(document).ready(function() {

 	// the player will choose a character
 	$("#obi").on("click", function(){
 		console.log("adding obi to p1");
 		$('#p1').prepend($('#obi'));
 		game.p1 = obi;
 		$('#com').append($("#luke"), $("#sid"), $("#maul"));
 		alert("select villian");
 			$("#maul").on("click", function(){
 				console.log("maul was selelcted");
 				$("#def").prepend($('#maul'));
 			});
 	});

 	$("#luke").on("click", function(){
 		$('#p1').prepend($("#luke"));
 	});

 	$("#sid").on("click", function(){
 		$('#p1').prepend($("#sid"));
 	});


 	$("#maul").on("click", function(){
 		$('#p1').prepend($("#maul"));
 	});

 	// if(){

 	// }
 }); 