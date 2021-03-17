class Game{
    constructor(){     
    }

    getState(){
        var state= database.ref("gameState");
        state.on("value", (data)=>{
            multiState= data.val();
        })
    }

    updateState(data){
        database.ref("/").update({
            gameState: data
        })
    }

    start(){
        if(multiState===0){
            player= new Player();
            player.getPlayerCount();
            form= new Form();
            form.display();
        }

        player1= createSprite(170,450, 50,50);
        player1.addImage("red", redButtonImg);
        player1.addImage('ro', rockImg);
        player1.addImage('pap', paperImg);
        player1.addImage('scis', scissorImg);
        player1.visible=false;
        player1.scale= 0.5;

        player2= createSprite(550, 450, 50, 50);
        player2.addImage("red", redButtonImg);
        player2.addImage('ro', rockImg);
        player2.addImage('pap', paperImg);
        player2.addImage('scis', scissorImg);
        player2.visible=false;
        player2.scale= 0.5;
        players=[player1,player2];

        rock= createSprite(100, 870, 50,50);
        rock.addImage("ro", rockImg)
        rock.scale= 0.7;
        rock.visible= false;

        paper= createSprite(350, 870, 50, 50 );
        paper.addImage("pap", paperImg);
        paper.scale=0.7;
        paper.visible= false;

        scissor= createSprite(600, 870, 50, 50);
        scissor.addImage("scis", scissorImg);
        scissor.scale= 0.7;
        scissor.visible= false;
    }

    play(){
        form.hide();
        Player.getPlayerInfo();
        image(bgImg, 0, 0, 700, 1000);
        var x =170;
        var y =450;
        rock.visible= true; 
        paper.visible= true; 
        scissor.visible= true;     
        player1.visible= true;
        player2.visible= true; 


        drawSprites();
    if(allPlayers!== undefined){
        var index =0;
        for(var plr in allPlayers){
           
            index = index+1;
             x = x+380;
             y=450;

             if(mousePressedOver(rock)){
                players[index-1].changeImage("ro",rockImg);   
                player.selection= "'ro',rockImg";
                player.update();
                players[index].changeImage(player.selection);    
            }
            if(mousePressedOver(paper)){
                players[index-1].changeImage("pap",paperImg);
                player.selection= "'pap',paperImg";
                player.update();
                players[index].changeImage(player.selection);    
            }
            if(mousePressedOver(scissor)){
                players[index-1].changeImage("scis",scissorImg);
                player.selection= "'scissor',scissorImg";
                player.update();
                players[index].changeImage(player.selection);    
            }

        }

    }
    }
} 