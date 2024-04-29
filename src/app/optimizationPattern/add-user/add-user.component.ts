import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  userFullName = '';
  @Output() add = new EventEmitter<string>();
  addUser() {
    this.add.emit(this.userFullName);
    this.userFullName = '';
  }
}
