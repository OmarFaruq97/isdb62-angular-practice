import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-tabel-array',
  imports: [CommonModule],
  templateUrl: './tabel-array.component.html',
  styleUrl: './tabel-array.component.css'
})
export class TabelArrayComponent {

  playerArray: any[] =[
    {name: "Lionel Messi", club: "Inter-Miami", country:"Argentina"},
    {name: "Cristiano Ronaldo", club: "Al-naser", country:"Portugal"},
    {name: "Neymar JR", club: "Santos FC", country:"Brazil"},
    {name: "Harry Kane", club: "Bayarn", country:"England"}
  ]
}
