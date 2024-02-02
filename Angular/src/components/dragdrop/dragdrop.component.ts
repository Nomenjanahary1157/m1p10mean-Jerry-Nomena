import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dragdrop',
  standalone: true,
  imports: [],
  templateUrl: './dragdrop.component.html',
  styleUrl: './dragdrop.component.css'
})
export class DragdropComponent {
  items = ['Carrots', 'Tomatoes', 'Onions', 'Apples', 'Avocados'];
  basket = ['Oranges', 'Bananas', 'Cucumbers'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
