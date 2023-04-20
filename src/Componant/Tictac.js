import React, { useEffect, useState } from 'react'
import './Tictac.css'
import o from '../Assets/o.jpg'
import x from '../Assets/x.jpg'
function Tictac() {
    
     const [hint,setHint]=useState("X Turn")
     //x=1,O=0
    
     const [turn,setTurn]=useState(1);
     const [isGameActive,setIsGameActive]=useState(true);
     const [gameState,setGameState]=useState(["","","","","","","","",""])
     //const [gameOver,setgameOver]=useState(true); 
     var winPosition=[[0,1,2],[0,3,6],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[0,4,8],[2,4,6]];
    // turn
    const boxClick =(index)=>{
         if(isGameActive && gameState[index]===""){
            if(turn===1){
               setTurn(0);
               gameState[index]="X";
               setGameState(gameState);
               setHint("o Turn");
            }
            else if(turn===0){
               setTurn(1);
               gameState[index]="O";
               setGameState(gameState);
               setHint("X Turn");
            }
         }
    }

    useEffect(()=>{
      //console.log("check");
      //check game Over
      let status=true;
      for(let i=0;i<gameState.length; i++){
         if(gameState[i]==""){
            status=false;
            break;
         }
      }
      if(status){
         setHint("Game Over");
         setIsGameActive(false);
      }

      //check game win
      let winStatus=false;
      winPosition.forEach(element => {
         if(gameState[element[0]]==gameState[element[1]] &&gameState[element[1]]==gameState[element[2]] && gameState[element[2]]!=""){
            winStatus=true;
         }
      });
      //check winner
      var winner=2;
      if(winStatus){
         if(turn==1){
            winner=0;
         }
         else if(turn==0){
            winner=1;
         }
      }
      if(winner==1){
         setHint("X is won the game");
         setIsGameActive(false);
         winAnimation();
      }
      else if(winner==0){
         setHint("O is won the game");
         setIsGameActive(false);
         winAnimation();
      }
      //reset
    })

    const resetGame=()=>{
      setTurn(1);
      setHint("X Turn");
      setGameState(["","","","","","","","",""]);
      setIsGameActive(true);
      removeAnimation();
   }
   //call animations
   const winAnimation=()=>{
      var box=document.getElementsByClassName("board")[0];
      box.style.backgroundImage="url('https://i.pinimg.com/originals/15/86/22/158622b81a98770610dc8eb22214a080.gif')";
      
      var box1=document.getElementsByClassName("outerBoard")[0];
      box1.style.backgroundImage="url('https://i.pinimg.com/originals/15/86/22/158622b81a98770610dc8eb22214a080.gif')";
   }

   //remove Animation

   const removeAnimation=()=>{
      var box=document.getElementsByClassName("board")[0];
      box.style.backgroundImage="url('')";
      
      var box1=document.getElementsByClassName("outerBoard")[0];
      box1.style.backgroundImage="url('')";
   }


  return (
   <div className="outerBoard">

   <h1 className="hint">{hint}</h1>
   <button onClick={resetGame} className="restartBtn" >Restart the Game</button>

   <div className="board">
     <div className="row">
       <div className="col" onClick={()=>boxClick(0)} > {gameState[0]} </div>
       <div className="col" onClick={()=>boxClick(1)} > {gameState[1]} </div>
       <div className="col" onClick={()=>boxClick(2)} > {gameState[2]} </div>
     </div>
     <div className="row">
       <div className="col" onClick={()=>boxClick(3)} > {gameState[3]} </div>
       <div className="col" onClick={()=>boxClick(4)} > {gameState[4]} </div>
       <div className="col" onClick={()=>boxClick(5)} > {gameState[5]} </div>
     </div>
     <div className="row">
       <div className="col" onClick={()=>boxClick(6)} > {gameState[6]} </div>
       <div className="col" onClick={()=>boxClick(7)} > {gameState[7]} </div>
       <div className="col" onClick={()=>boxClick(8)} > {gameState[8]} </div>
     </div>
     
   </div>

   </div>
  )
}

export default Tictac