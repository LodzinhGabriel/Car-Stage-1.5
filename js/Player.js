class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
  }

  // Obter o número de jogadores no jogo no Firebase
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  // Atualizar o número de jogadores no jogo
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  // Atualizar o número de jogadores no jogo (antigo), Define o nome do jogador e a distancia dele
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  // Gere as informações do jogador
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  // atribuir rank ao jogador
  getCarsAtEnd() {
    database.ref('carsAtEnd').on('value', (data)=>{
      this.rank = data.val();
    });
  }

  //atualizar o total de carros na linha de chegada
  static updateCarsAtEnd(rank){
    database.ref('/').update({
      carsAtEnd: rank,
    });
  }
}
