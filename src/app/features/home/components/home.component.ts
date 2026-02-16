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
    { icon: 'assets/icon-rocket.svg', label: 'Frontend Engineer | Product Designer' },
    { icon: 'assets/icon-pasta.svg', label: 'VVS Sistemas' },
    { icon: 'assets/icon-book.svg', label: 'ADS - PUC Minas' },
    /* {icon: 'assets/icon-download.svg', label: 'Curriculo'}, */
  ]

  button: any[] = [
    // { label: 'Biografia', icon: 'navigation', link: '#', target: '_self', toast: 'Biografia em desenvolvimento' },
    // { label: 'Projetos', icon: 'navigation', link: '#', target: '_self', toast: 'Projetos em desenvolvimento' },
    // { label: 'Setup', icon: 'navigation', link: '#', target: '_self', toast: 'Setup em desenvolvimento' },
    { label: 'Whatsapp', icon: 'export', link: 'https://wa.me/5521989560135', target: '_blank' },
    { label: 'Linkedin', icon: 'export', link: 'https://www.linkedin.com/in/lucaspedruo', target: '_blank' },
    { label: 'NewsLetter', icon: 'export', link: 'https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7341522596053540864', target: '_blank' },
    { label: 'Behance', icon: 'export', link: 'https://be.net/lucaspedruo', target: '_blank' },
    { label: 'Instagram', icon: 'export', link: 'https://instagram.com/lucaspedruo', target: '_blank' },
    { label: 'GitHub', icon: 'export', link: 'https://github.com/LucasPedruo', target: '_blank' },
    { label: 'Currículo', icon: 'export', link: 'assets/curriculo.pdf', target: '_blank' },
  ]

  social: any[] = [
   // { icon: 'assets/icon-github.svg', alt: 'GitHub', href: 'https://github.com/LucasPedruo' },
   // { icon: 'assets/icon-linkedin.svg', alt: 'Linkedin', href: 'https://www.linkedin.com/in/lucaspedruo/' },
   // { icon: 'assets/icon-whatsapp.svg', alt: 'Whatsapp', href: 'http://wa.me/5521989560135' },
    //{ icon: 'assets/icon-youtube.svg', alt: 'Youtube', href: 'https://www.youtube.com/@Lucaspedruo' },
  ]

}
