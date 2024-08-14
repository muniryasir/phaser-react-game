import React, { useEffect } from 'react';
import game from './MatchIT';
import './GameComponent.css'

const GameComponent = () => {
  useEffect(() => {
    // Initialize Phaser game
    
    return () => {
      // Cleanup Phaser game
      game.destroy(true);
    };
  }, []);

  return <div id="phaser-game"  className='gameDesign'/>;
};

export default GameComponent;
