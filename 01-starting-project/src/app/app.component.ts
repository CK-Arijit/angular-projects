import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  userName!: string;
  userId!: string;

  onSelectUser(id: string, name: string) {
    console.log(`Selected user ID: ${id}`);
    console.log(`Selected user Name: ${name}`);
    this.userName = name;
    this.userId = id;
  }
}
