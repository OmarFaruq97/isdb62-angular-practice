import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Medicine } from '../app.component';


@Component({
  selector: 'app-add-med',
  imports: [FormsModule],
  templateUrl: './add-med.component.html',
  styleUrl: './add-med.component.css'
})
export class AddMedComponent {

  p: Medicine = new Medicine
    ('', '', '', '', '', 0);
    isUpdate = false;

    constructor(private router: Router) {
      const nav = this.router.getCurrentNavigation();
      if(nav?.extras?.state?.['medicine']){
        this.p = nav.extras.state['medicine'];
        this.isUpdate = true;
      }
    }

    ngOnInit(): void{
      // initial should be correctly but make sure
      console.log('CreateUserComponent!!');
    }

    onSubmit(): void{
      // Retrive users from localStoreage
      let medicines : Medicine[] = JSON.parse(localStorage.getItem('medicine') || '[]');

      // Update or add product
      if (this.isUpdate){
        // update the product if sNumber matchs
        medicines = medicines.map((medicine) => (medicine.sNumber === this.p.sNumber? this.p : medicine));        
      } else {
        // Add a new product to the array
        medicines.push(this.p);
      }

      // Save the updated list of product back to localstorage
      localStorage.setItem('product', JSON.stringify(medicines));

      // reset the '' object
      this.p = new Medicine('', '', '', '', '', 0);

      // navigate to the table page
      this.router.navigate(['/all-med']);
    }

}
