class Player{
    constructor(){
      this.name= null;
      this.index= 0; 
      this.selection= null;    
    }

    getPlayerCount(){
        var playerCountRef= database.ref("playerCount")
        playerCountRef.on("value", (data)=>{
            playerCount= data.val();
        })
    }

    updateCount(data){
        database.ref("/").update({
            playerCount: data
        })
    }

    update(){
        var playerIndex= "players/player"+ this.index;
        database.ref(playerIndex).set({
            name:this.name,
            selection: this.selection
        })
    }

    static getPlayerInfo(){
        var getPlayerInfo= database.ref("players")
        getPlayerInfo.on("value", (data)=>{
            allPlayers= data.val();
        })
    }
}