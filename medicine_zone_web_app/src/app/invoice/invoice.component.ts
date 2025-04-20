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
  imports: [FormsModule, CommonModule],
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})

export class InvoiceComponent {
  customerName: string = '';
  contactNumber: string = '';
  items: InvoiceItem[] = [{ itemName: '', quantity: 0, price: 0, total: 0 }];
  totalAmount: number = 0;
  salesHistory: any[] = [];
  discount: number = 0; // Discount percentage

  ngOnInit(): void {
    this.loadSalehistory();
  }

  loadSalehistory() {
    const invoices = JSON.parse(localStorage.getItem('invoices') || '[]');
    this.salesHistory = invoices;
  }

  addItem(): void {
    this.items.push({ itemName: '', quantity: 0, price: 0, total: 0 });
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
    this.calculateTotal();
  }

  calculateTotal(): void {
    let subtotal = this.items.reduce((sum, item) => {
      item.total = item.quantity * item.price;
      return sum + item.total;
    }, 0);

    // Apply the discount as percentage
    const discountAmount = (subtotal * this.discount) / 100;
    this.totalAmount = subtotal - discountAmount;
  }

  onSubmit(): void {
    const invoiceData = {
      customerName: this.customerName,
      contactNumber: this.contactNumber,
      items: this.items,
      totalAmount: this.totalAmount,
      discount: this.discount
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
    this.discount = 0;

    alert('Invoice saved successfully!');
    this.loadSalehistory();
  }

  deleteSale(index: number): void {
    if (confirm('Are you sure you want to delete this sale history?')) {
      this.salesHistory.splice(index, 1);
      localStorage.setItem('invoices', JSON.stringify(this.salesHistory));
    }
  }
}
