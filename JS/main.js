// Using everything that we've learned up to this point, and putting a heavy emphasis on if statements, it's time to create your Choose Your Own Adventure interactive website.
// Pick any topic you prefer, but make it fun!
// Try and incorporate the use of a loop if you can.
// Your page must utilize user submitted questions or responses through confirms or prompts.
// The story must branch off in at least two different directions based on user inputs.
function figure() {
    alert("You inch forward and disover a short, hooded bent figure draped in a heavy robe, right arm outstretched clutching a lantern. With the figure's free hand, it beckons you forward.");
    alert("Come child, human...Take it. Take the lantern");
    
    var takeLantern;
    takeLantern = prompt("Do you take the lantern? If yes type yes and if no.");
    takeLantern = takeLantern.toUpperCase();
    if (takeLantern === "NO"){
    alert("You didn't take the lantern.");
    alert("The figure reaches down, drawing back their cloak, placing the lantern inside.");
    alert("The figure launches forward, grabbing you in it's grasp. Pulling your head back and...");
    alert("game over...");
    
    } else if(takeLantern === "YES") {
    fantasy();
    }else{
    while (takeLantern != "YES"|| takeLantern != "NO")
    figure();
    }
    
    }
    
    function fantasy(){
    alert("The ground beneath you opens. Your heart races as you feel the heat of the flames of fire leaping up at you, engulfing you. You feel yourself falling into the obyss. You reach deep inside you to scream when you suddenly feel yourself hit something hard.");
    alert("You feel something hard and sharp against your face; your nose fills with the smell of burnt and ash; your hands push yourself up and you can't believe your eyes.");
    alert("You are surrounded by dragons. Your breath catches in your throat. You quickly scramble backwards. The movement alerts a nearby dragon of your presence and it turns to you, approaching...");
    
    var userWeapon;
    userWeapon.toUpperCase() = prompt("");
    userWeapon = userWeapon.toUpperCase()
    }
    
    
    alert("You turn down an alley...as usual...it is on your way to...");
    
    var userDestination; 
    
    do {
    userDestination = prompt("choose where you are going. Type work, a friend's house, or school.");
    userDestination = userDestination.toUpperCase();
     } while (userDestination != 'WORK' || userDestination != " A FRIEND'S HOUSE" || userDestination != "SCHOOL");
    
    alert("It is on your way to " + userDestination + "." + "You are barely down the alley, headphones blaring music, hands in your pockets, when you glance up." + "There is something strange up ahead. You slow in your tracks, barely inching forward to see what it is. As you get closer you discover...");
    
    var userChoice;
    userChoice = prompt("Choose what you discover:a shrouded figure or a shirtless man. For the figure type in figure, and for the man type in man.");
    userChoice = userChoice.toUpperCase();
    
    
    
    
    
    