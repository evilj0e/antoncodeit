function SnakesLadders() {
    this.currentMovePlayer=1;
    this.player1=0;
    this.player2=0;
    this.gameOver=false;
  };
   
  SnakesLadders.prototype.play = function(die1, die2) {
    if(this.gameOver){
      return 'Game over!';
    }
   
    if(die1===die2){
   
      if(this.currentMovePlayer===1){
        this.player1=move(this,die1+die2);
        return (this.player1===100) ? 'Player 1 Wins!' : `Player 1 is on square ${this.player1}`
      }else{
        this.player2=move(this,die1+die2);
        return (this.player2===100) ? 'Player 2 Wins!' : `Player 2 is on square ${this.player2}`
      }
     
    }else{
   
      if(this.currentMovePlayer===1){
        this.player1=move(this,die1+die2);
        this.currentMovePlayer=2;
        return (this.player1===100) ? 'Player 1 Wins!' : `Player 1 is on square ${this.player1}`
      }else{
        this.player2=move(this,die1+die2);
        this.currentMovePlayer=1;
        return (this.player2===100) ? 'Player 2 Wins!' : `Player 2 is on square ${this.player2}`
      }
     
    }
  }
   
  function move(game,steps){
   
    const moves={2:38,7:14,8:31,15:26,16:6,21:42,28:84,36:44,46:25,49:11,51:67,
    62:19,64:60,71:91,74:53,78:98,87:94,89:68,92:88,95:75,99:80};
   
    let playerPos=game.currentMovePlayer===1 ? game.player1 : game.player2;
   
    if(playerPos+steps>100){
      playerPos=100-(playerPos+steps-100);
    }else{
      playerPos=playerPos+steps;
    }
   
    if(moves[playerPos]){
      playerPos=moves[playerPos];
    }
   
    if(playerPos===100){
      game.gameOver=true;
    }
    return playerPos;
  }
  