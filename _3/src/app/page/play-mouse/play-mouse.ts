import { Component, HostListener, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-play-mouse',
  standalone: true,
  templateUrl: './play-mouse.html',
  styleUrls: ['./play-mouse.css']
})

export class PlayMouse implements OnDestroy {

  public backgroundGradient = 'radial-gradient(circle, black, white)';

  private audioCtx: AudioContext;
  private oscillator: OscillatorNode;
  private gainNode: GainNode;
  private isMouseDown = false;
  private freq = 0;
  private volume = 0.05;
  private minFreq = 0;  
  private maxFreq = 5000; 

  constructor() {
    this.audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    this.gainNode = this.audioCtx.createGain();
    this.oscillator = this.audioCtx.createOscillator();

    this.oscillator.type = 'square';

    this.oscillator.frequency.setValueAtTime(this.freq, this.audioCtx.currentTime); // Dó inicial

    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.audioCtx.destination);

    this.gainNode.gain.setValueAtTime(0, this.audioCtx.currentTime);

    this.oscillator.start();
  }

  

  @HostListener('document:mousedown', ['$event'])
  onMouseDown(evenet: MouseEvent) {
    this.isMouseDown = true;
    this.play({...evenet})
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.isMouseDown = false;
    this.gainNode.gain.setValueAtTime(0, this.audioCtx.currentTime); // Silencia ao soltar
  }

  // ?? Captura o movimento do mouse na página
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    
    const hue = (this.freq / this.maxFreq) * 360;
    if (this.freq < 150) {
      this.backgroundGradient = 'radial-gradient(circle, black 0%, #222 100%)';
    } else {
      this.backgroundGradient = `radial-gradient(circle at ${event.clientX}px ${event.clientY}px, hsl(${hue}, 100%, 50%) 0%, black 100%)`;
    }

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
  
    const centerX = screenWidth / 2;
    const centerY = screenHeight / 2;
  
    const dx = event.clientX - centerX;
    const dy = event.clientY - centerY;
  
    const distanceFromCenter = Math.sqrt(dx * dx + dy * dy);
  
    const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
    const normalized = distanceFromCenter / maxDistance;
    this.freq = this.minFreq + normalized * (this.maxFreq - this.minFreq);
  
    if (this.isMouseDown) {
      this.gainNode.gain.setValueAtTime(this.volume, this.audioCtx.currentTime);
      this.oscillator.frequency.setValueAtTime(this.freq, this.audioCtx.currentTime);
    }
  }
  

  play(props: {clientX: number, clientY: number}) {
    this.gainNode.gain.setValueAtTime(this.volume, this.audioCtx.currentTime);
    this.oscillator.frequency.setValueAtTime(this.freq, this.audioCtx.currentTime);
  }

  ngOnDestroy() {
    this.oscillator.stop();
    this.audioCtx.close();
  }
}
