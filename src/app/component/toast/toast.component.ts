import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  templateUrl: './toast.component.html' ,
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  @Input() message = '';
  visible = false;

  show(msg: string, time = 3000) {
    this.message = msg;
    this.visible = true;
    setTimeout(() => this.visible = false, time);
  }
}
