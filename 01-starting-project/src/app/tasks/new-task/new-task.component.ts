import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredDueDate = '';
  enteredSummary = '';
  private tasksService = inject(TasksService);

  onCancel() {
    // Logic to add a new task`
    this.close.emit();
  }

  onSubmit() {
    // Logic to add a new task
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        dueDate: this.enteredDueDate,
        summary: this.enteredSummary,
      },
      this.userId
    );
    this.close.emit();
  }
}
