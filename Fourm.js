class Fourm{

constructor(){}

display(){

var title = createElement('h2')
title.html("The Impossible Game")
title.position(130,0)
var input = createInput("Name")
var button = createButton("Click to Join")
var message = createElement('h3')
input.position(130,160)
button.position(250,200)

button.mousePressed(function(){

input.hide()
button.hide()
var Name = input.value()
playerCount += 1
player.update(Name)
player.updateCount(playerCount)
message.html("Welcome to the Game "+ Name)
message.position(130, 160)

})

}

}