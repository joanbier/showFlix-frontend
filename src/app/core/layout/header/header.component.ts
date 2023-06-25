import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LogoComponent } from '../../../shared/logo/logo.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-layout-header',
  standalone: true,
  imports: [CommonModule, LogoComponent, RouterLink, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showButton!: boolean;
  constructor(private router: Router) {
    this.showButton = false;
  }
  ngOnInit() {
    this.checkCurrentRoute();
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkCurrentRoute();
      });
  }

  checkCurrentRoute(): void {
    const currentUrl = this.router.url;
    this.showButton = currentUrl === '/';
  }
}
