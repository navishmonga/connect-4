import React,{useState} from "react";
import GameCircle from "./GameCircle";
import './Game.css'
import Header from "./Header";
import Footer from "./Footer";

const NO_PLAYER=0;
const PLAYER_1=1;
const PLAYER_2=2;



const GameBoard= () =>{
    const [gameboard,setGameBoard]=useState(Array(16).fill(NO_PLAYER));
    const [currentplayer, setcurrentplayer]= useState(PLAYER_1);

    

    const circleClicked = (id) =>{
        console.log('circle clicked:' + id);
        
        setGameBoard(prev=>{
            return prev.map((circle,pos)=>{
                if(pos===id) return currentplayer;
                return circle;
            })
        })
        setcurrentplayer(currentplayer === PLAYER_1?PLAYER_2 : PLAYER_1);
        console.log(gameboard);
    }

    const renderCircle= id =>{
        return <GameCircle key={id} id={id} className={`player_${gameboard[id]}`} onCircleClicked={circleClicked} />;
    }

    const initboard=()=>{
        const circles=[];
        for(let i=0;i<16;i++){
            circles.push(renderCircle(i));
        }
        return circles;
    }

    return (
        <>
            <Header />
            <div className='gameBoard' >
                {initboard()};
            </div>
            <Footer />
        </>
    )
}

export default GameBoard; 