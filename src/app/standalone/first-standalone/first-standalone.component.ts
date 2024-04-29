import { Component } from '@angular/core';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-first-standalone',
  standalone: true,
  imports: [NgIf, NgForOf],
  templateUrl: './first-standalone.component.html',
  styleUrls: ['./first-standalone.component.css'],
  providers: []
})
export class FirstStandaloneComponent {
  users = ['alex', 'aziz', 'mickaek', 'said', 'jaouad'];
}
