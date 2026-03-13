import { Component, ViewChild } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
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
  readonly marcarAmistosoLink = 'https://forms.gle/8zfC5mwnpNecDrhJ6';

  @ViewChild(ToastComponent) toast!: ToastComponent;

  showToastIfNeeded(event: Event, item: any) {
    const hasLink = typeof item?.link === 'string'
      ? item.link.trim().length > 0
      : !!item?.link;

    if (!hasLink) {
      event.preventDefault();
      this.toast.show(item.toast || `${item.label} em breve.`);
      return;
    }

    if (item.toast) {
      event.preventDefault();
      this.toast.show(item.toast);
    }
  }

  proximoJogo: any = '18/03 - Real Matriz x Setor Leste'

  category: any[] = [
    { icon: 'assets/icon-rocket.svg', label: '🏆 1ª Campeão da ADBangu.' },
    { icon: 'assets/icon-book.svg', label: '☝️ O Real Clube de Cristo.' },
  ]

  calendario: any[] = [
    { data: '18/03 - Real Matriz x ADVEC' },
  ];

  get calendarioExistente(): any[] {
    return this.calendario.filter((item) => item?.data?.trim());
  }

  button: any[] = [
    { label: 'Faça parte do time', icon: 'export', link: 'https://forms.gle/YNwukJH3vUTdZqsH9', target: '_blank', disabled: false },
    { label: 'Treine com o time', icon: 'export', link: 'https://forms.gle/MYLs7Xw7Pts3V7Nk7', target: '_self', disabled: false },
    { label: 'Instagram', icon: 'export', link: 'https://instagram.com/cluberealmatriz', target: '_blank', disabled: false },
    { label: 'Conheça nossa comunidade', icon: 'export', link: 'https://chat.whatsapp.com/BZTDChs8zNT6W0643Tjwts', target: '_blank', disabled: false },
    { label: 'Elenco', icon: 'export', link: '', target: '_self', disabled: true },
    { label: 'Seja um apoiador', icon: 'export', link: '', target: '_self', disabled: true },
    { label: 'Ultimos resultados', icon: 'export', link: '', target: '_blank', disabled: true },
    { label: 'Nossa loja', icon: 'export', link: '', target: '_self', disabled: true },
    { label: 'Sala de troféus', icon: 'export', link: '', target: '_self', disabled: true },
    { label: 'Galeria de imagens', icon: 'export', link: '', target: '_blank', disabled: false },
  ]

  apoio: any[] = [
    { icon: '', alt: 'FullDev', href: 'https://fulldev.com.br', },
    { icon: '', alt: 'Harpia Precatórios', href: 'https://www.instagram.com/harpiaprecatorios/', },
    { icon: '', alt: 'WB Griff', href: 'https://share.google/JiHHMZQBB3ViCyc3R', },
    { icon: 'gol-do-rayo.png', alt: 'Gol do Rayo', href: 'https://www.instagram.com/goldorayo/', },
  ]

}
