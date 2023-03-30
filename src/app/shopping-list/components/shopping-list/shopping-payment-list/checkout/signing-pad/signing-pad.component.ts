import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-signing-pad',
  template: `
    <canvas (mousedown)="onMouseDown($event)" (mousemove)="onMouseMove($event)" (touchmove)="onMouseMove($event)"
            (touchstart)="onMouseDown($event)" #signPad width="350" height="200">
    </canvas>
    <button (click)="clearSignature()">Clear</button>
  `,
  styles: [
    `
    :host {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    button {
      background-color: #1976d2;
      color: white;
      font-weight: 200px;
      height: 35px;
      border-radius: 3px;
      border: none;
      width: 300px; 
    }

    canvas {
      border: 1px solid black;
    width: 300px; 
    height: 150px;
    }
  `,
  ],
})
export class SigningPadComponent {
  @ViewChild('signPad', { static: false })  
  @Output() signatureSaved = new EventEmitter();
  signPad!: ElementRef<HTMLCanvasElement>;
  private signatureImg?: string;
  private sigPadElement: any;
  private context: any;
  private isDrawing!: boolean;

  public ngAfterViewInit(): void {
    this.sigPadElement = this.signPad.nativeElement;
    this.context = this.sigPadElement.getContext('2d');
    this.context.strokeStyle = '#000';
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(e: any): void {
    this.isDrawing = false;
  }

  onMouseDown(e: any): void {
    this.isDrawing = true;
    const coords = this.relativeCoords(e);
    this.context.moveTo(coords.x, coords.y);
  }

  onMouseMove(e: any): void {
    if (this.isDrawing) {
      const coords = this.relativeCoords(e);
      this.context.lineTo(coords.x, coords.y);
      this.context.stroke();
    }
  }

  clearSignature(): void {
    this.signatureImg = undefined;
    this.context.clearRect(
      0,
      0,
      this.sigPadElement.width,
      this.sigPadElement.height
    );
    this.context.beginPath();
  }

  saveSignature(): void {
    this.signatureImg = this.sigPadElement.toDataURL('image/png');
    this.signatureSaved.emit(this.signatureImg);
  }

  private relativeCoords(event: any): { x: number; y: number } {
    const bounds = event.target.getBoundingClientRect();
    const cords = {
      clientX: event.clientX || event.changedTouches[0].clientX,
      clientY: event.clientY || event.changedTouches[0].clientY,
    };
    const x = cords.clientX - bounds.left;
    const y = cords.clientY - bounds.top;
    return { x, y };
  }
  
}
