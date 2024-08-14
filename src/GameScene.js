// src/scenes/GameScene.js
import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    create() {
        // Create your game objects here
        const text = this.add.text(200, 200, 'Hello, Phaser!', {
            fontSize: '32px',
            fill: '#ffffff',
        });
    }
}
