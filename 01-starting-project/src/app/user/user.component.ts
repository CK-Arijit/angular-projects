import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<{ id: string; name: string }>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser() {
    this.select.emit({ id: this.user.id, name: this.user.name });
  }
}
