import Phaser from 'phaser';

class MatchIT extends Phaser.Scene {
  constructor() {
    super({ key: 'MatchIT' });
  }

  preload() {
    // Load the ball image
    this.load.image('ball', '../assets/ball.jpeg');
  }

  create() {
    // Create the ball sprite and place it in the center of the scene
     // Create the ball sprite and place it in the center of the scene
     this.cameras.main.setBackgroundColor('#d3d3d3');

     this.ball = this.physics.add.sprite(this.cameras.main.width / 2, this.cameras.main.height / 2, 'ball');
     this.ball.setOrigin(0.5, 0.5); // Set the origin to the center of the ball
     this.ball.setCollideWorldBounds(true); // Make the ball collide with the world bounds
     this.ball.setBounce(1); // Set the bounce factor
  }

  update() {
    // Game logic here
  }

  // Expose a method to be called from React
  customMethod() {
    
    // Add your custom logic here
    const originalY = this.ball.y;
    console.log('Custom method called from React! '+originalY );
    this.tweens.add({
      targets: this.ball,
      y: originalY - 50,
      duration: 250,
      ease: 'Power1',
      yoyo: true,
      onComplete: () => {
        this.ball.y = originalY; // Ensure the ball returns to its original position
      }
    });
  }
}

const config = {
  type: Phaser.AUTO,
  width: '90%',
  height: 550,
  autoCenter:true,
  scene: MatchIT,
  canvasStyle: 'top:0; position: relative',
  physics: {
    default: 'arcade',
    // arcade: {
    //   gravity: { y: 0 },
    //   debug: false
    // }
  },

};

const game = new Phaser.Game(config);

export const callCustomMethod = () => {
  const scene =game.scene.keys['MatchIT'];
  console.log(scene)
  if (scene) {
    scene.customMethod();
  } else {
    console.error('Scene not found or not initialized');
  }
};

export default game;
