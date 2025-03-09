import { Component, OnInit } from '@angular/core';
import { Medicine } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-med',
  imports: [],
  templateUrl: './all-med.component.html',
  styleUrl: './all-med.component.css'
})
export class AllMedComponent implements OnInit{

  medicine : Medicine []  = [];

  constructor (private router: Router){}
  
  ngOnInit() {
      let medicines = JSON.parse(localStorage.getItem('medicine') || '[]');
      this.medicine = medicines;
  }

  editMedicine( medicine: Medicine){
    this.router.navigate(['/add-med'], {state: {medicine}});
  }

  deleteMedicine ( medicines : Medicine){
    if(confirm('Are sure to delete this product?' )) {
      this.medicine = this.medicine.filter((medicine) => medicine !== medicines);
      localStorage.setItem ('medicine', JSON.stringify(this.medicine));
    }
  }
}
