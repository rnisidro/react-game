import React from 'react';

const GameOverlay = ({onRestart, board}) => {
    if(board.hasWon()) {
        return <div className="tile2048" />
    } else if(board.hasLost()) {
        return (
            <div className="gameOver" onClick={onRestart} />
        )
    }
    
    return null;
}

export default GameOverlay;