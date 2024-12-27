import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss',
})
export class WishlistComponent {
  newWish: string = '';
  wishlist: { text: string; completed: boolean }[] = [];

  addWish() {
    if (this.newWish.trim()) {
      this.wishlist.push({ text: this.newWish.trim(), completed: false });
      this.newWish = '';
    }
  }

  toggleCompleted(index: number) {
    this.wishlist[index].completed = !this.wishlist[index].completed;
  }

  removeWish(index: number) {
    this.wishlist.splice(index, 1);
  }
}
