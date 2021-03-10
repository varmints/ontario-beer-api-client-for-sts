import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../_services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent implements OnInit {
  theme: string = 'bootstrap';
  isDarkMode: boolean;

  constructor(private themeService: ThemeService) {
    this.isDarkMode = this.themeService.isDarkMode();
  }

  ngOnInit(): void {}

  toggleDarkMode() {
    this.isDarkMode = this.themeService.isDarkMode();

    this.isDarkMode
      ? this.themeService.update('bootstrap')
      : this.themeService.update('bootstrap-dark');

    this.isDarkMode = this.themeService.isDarkMode();
  }
}
