import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-history',
  templateUrl: './sales-history.component.html',
  styleUrls: ['./sales-history.component.css'], 
  imports: [CommonModule]
})
export class SalesHistoryComponent implements OnInit {

  // ➕ Define required properties
  customerName: string = '';
  contactNumber: string = '';
  items: { itemName: string; quantity: number; price: number; total: number }[] = [
    { itemName: '', quantity: 0, price: 0, total: 0 }
  ];
  totalAmount: number = 0;

  salesHistory: any[] = []; 

  ngOnInit(): void {
    this.loadSaleHistory(); //  Load on component init
  }

  onSubmit(): void {
    const invoiceData = {
      customerName: this.customerName,
      contactNumber: this.contactNumber,
      items: this.items,
      totalAmount: this.totalAmount      
    };

    // Save to localStorage
    let invoices = JSON.parse(localStorage.getItem('invoices') || '[]');
    invoices.push(invoiceData);
    localStorage.setItem('invoices', JSON.stringify(invoices));

    // Reset form
    this.customerName = '';
    this.contactNumber = '';
    this.items = [{ itemName: '', quantity: 0, price: 0, total: 0 }];
    this.totalAmount = 0;

    alert('Invoice saved successfully!');  
    this.loadSaleHistory(); //  Update UI after saving
  }

  deleteSale(index: number): void {
    if (confirm('Are you sure you want to delete this sale history?')) {
      this.salesHistory.splice(index, 1); // Remove from array
      localStorage.setItem('invoices', JSON.stringify(this.salesHistory)); // Update localStorage
    }
  }

  loadSaleHistory(): void {
    this.salesHistory = JSON.parse(localStorage.getItem('invoices') || '[]');
  }
}
