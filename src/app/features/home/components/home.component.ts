import { Component, inject, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastComponent } from '../../../component/toast/toast.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatExpansionModule, MatIconModule, MatSnackBarModule, ToastComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  @ViewChild(ToastComponent) toast!: ToastComponent;
  showToastIfNeeded(event: Event, item: any) {
    if (item.toast) {
      event.preventDefault();
      this.toast.show(item.toast);
    }
  }

  category: any[] = [
    { icon: 'assets/icon-rocket.svg', label: '🏆 1ª Campeão da copa ADB.' },
    { icon: 'assets/icon-pasta.svg', label: '🪙 Vice Campeão Ujadb 2025.' },
    { icon: 'assets/icon-book.svg', label: '☝️ O Real Clube de Cristo.' },
    /* {icon: 'assets/icon-download.svg', label: 'Curriculo'}, */
  ]

  button: any[] = [
    { label: 'Instagram', icon: 'export', link: 'https://instagram.com/cluberealmatriz', target: '_blank' },
    { label: 'Faça parte do time', icon: 'export', link: 'https://forms.gle/YNwukJH3vUTdZqsH9', target: '_blank' },
  ]

  social: any[] = [
   // { icon: 'assets/icon-github.svg', alt: 'GitHub', href: 'https://github.com/LucasPedruo' },
   // { icon: 'assets/icon-linkedin.svg', alt: 'Linkedin', href: 'https://www.linkedin.com/in/lucaspedruo/' },
   // { icon: 'assets/icon-whatsapp.svg', alt: 'Whatsapp', href: 'http://wa.me/5521989560135' },
    //{ icon: 'assets/icon-youtube.svg', alt: 'Youtube', href: 'https://www.youtube.com/@Lucaspedruo' },
  ]

}
