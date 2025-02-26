import { HarryPotterService } from './../services/harry-potter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-harry-potter',
  templateUrl: './harry-potter.component.html',
  styleUrls: ['./harry-potter.component.css']
})
export class HarryPotterComponent implements OnInit {
  spells: any[] = [];

  constructor(private harryPotterService: HarryPotterService) {}

  ngOnInit(): void {
    console.log('Harry Potter');
    this.fetchSpells();      
  }

  fetchSpells() {
    this.harryPotterService.getSpells().subscribe(
      (data) => {
        this.spells = data;
        console.log('Fetched spells:', this.spells);
      },
      (error) => {
        console.log('Error fetching spells: ', error);
      }
    );
  }
}
