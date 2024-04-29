import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-on-push-fils',
  templateUrl: './on-push-fils.component.html',
  styleUrls: ['./on-push-fils.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushFilsComponent {
  @Input() name = 'push-fils';
  @Input() user!: User;
}
