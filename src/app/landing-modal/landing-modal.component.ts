import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-modal.component.html',
  styleUrls: ['./landing-modal.component.css']
})
export class LandingModalComponent {
  isOpen = false;
  isClosing = false;

  constructor() {}

  ngOnInit() {
    this.isOpen = true; // Open modal on component initialization
  }

  close() {
    this.isClosing = true; // Trigger closing transition
    setTimeout(() => {
      this.isOpen = false; // Hide modal after transition duration
      this.isClosing = false; // Reset closing state
    }, 300); // Match this duration with your CSS transition duration
  }
}
