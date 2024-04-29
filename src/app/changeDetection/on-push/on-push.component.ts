import { Component } from '@angular/core';
import { User } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.css']
})
export class OnPushComponent {
changeUser(newEmail: string) {
  this.user = {...this.user, email: newEmail};
}
  user: User = {id: 1, email: 'testa@example.com'};
  name = 'aymen';
}
