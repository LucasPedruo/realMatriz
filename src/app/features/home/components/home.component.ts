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
  readonly defaultApoioIcon = 'assets/favicon.png';

  @ViewChild(ToastComponent) toast!: ToastComponent;
  showToastIfNeeded(event: Event, item: any) {
    if (item.toast) {
      event.preventDefault();
      this.toast.show(item.toast);
    }
  }

  category: any[] = [
    { icon: 'assets/icon-rocket.svg', label: '🏆 1ª Campeão da ADBangu.' },
    { icon: 'assets/icon-book.svg', label: '☝️ O Real Clube de Cristo.' },
  ]

  calendario: any[] = [];

  button: any[] = [
    { label: 'Marque um amistoso', icon: 'export', link: '', target: '_self', disabled: true },
    { label: 'Conheça nossa comunidade', icon: 'export', link: 'https://chat.whatsapp.com/BZTDChs8zNT6W0643Tjwts', target: '_blank', disabled: false },
    { label: 'Faça parte do time', icon: 'export', link: 'https://forms.gle/YNwukJH3vUTdZqsH9', target: '_blank', disabled: false },
    { label: 'Instagram', icon: 'export', link: 'https://instagram.com/cluberealmatriz', target: '_blank', disabled: false },
    { label: 'Nossa loja', icon: 'export', link: '', target: '_self', disabled: true },
    { label: 'Sala de troféus', icon: 'export', link: '', target: '_self', disabled: true },
    { label: 'Treine com o time', icon: 'export', link: '', target: '_self', disabled: true },
    { label: 'Galeria de imagens', icon: 'export', link: '', target: '_blank', disabled: false },
  ]

  apoio: any[] = [
    { icon: '', alt: 'FullDev', href: 'https://fulldev.com.br', },
    { icon: '', alt: 'Harpia Precatórios', href: '', },
    { icon: '', alt: 'Gol do Rayo', href: '', },
    { icon: '', alt: 'WB Griff', href: '', },
  ]

}
