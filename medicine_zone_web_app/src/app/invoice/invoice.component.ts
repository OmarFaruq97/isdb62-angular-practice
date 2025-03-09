import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface InvoiceItem {
  itemName: string;
  quantity: number;
  price: number;
  total: number;
  
}

@Component({
  selector: 'app-invoice',
  // standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent {
  customerName: string = '';
  contactNumber: string = '';
  items: InvoiceItem[] = [{ itemName: '', quantity: 0, price: 0, total: 0 }];
  totalAmount: number = 0;  
salesHistory: any[] = [] ;

ngOnInit():void {
  this.loadSalehistory();
}
  loadSalehistory() {
    const invoices = JSON.parse(localStorage.getItem('invoices') || '[]');
    this.salesHistory = invoices;
    throw new Error('Method not implemented.');
  }



  addItem(): void {
    this.items.push({ itemName: '', quantity: 0, price: 0, total: 0 });
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.totalAmount = this.items.reduce((sum, item) => {
      item.total = item.quantity * item.price;
      return sum + item.total;

    }, 0);
  }

  onSubmit(): void {
    const invoiceData = {
      customerName: this.customerName,
      contactNumber: this.contactNumber,
      items: this.items,
      totalAmount: this.totalAmount,      
    };

    // Save to localStorage (for demo purposes)
    let invoices = JSON.parse(localStorage.getItem('invoices') || '[]');
    invoices.push(invoiceData);
    localStorage.setItem('invoices', JSON.stringify(invoices));

    // Reset form
    this.customerName = '';
    this.contactNumber = '';
    this.items = [{ itemName: '', quantity: 0, price: 0, total: 0 }];
    this.totalAmount = 0;

    alert('Invoice saved successfully!');
  }
  
}