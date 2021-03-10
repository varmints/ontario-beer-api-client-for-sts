import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

export interface ThemeObject {
  oldValue: string;
  newValue: string;
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private colorTheme: string;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initTheme() {
    this.getColorTheme();
    this.renderer.addClass(document.body, this.colorTheme);
  }

  update(theme: 'bootstrap-dark' | 'bootstrap') {
    this.setColorTheme(theme);
    const previousColorTheme =
      theme === 'bootstrap-dark' ? 'bootstrap' : 'bootstrap-dark';
    this.renderer.removeClass(document.body, previousColorTheme);
    this.renderer.addClass(document.body, theme);
  }

  isDarkMode() {
    return this.colorTheme === 'bootstrap-dark';
  }

  private setColorTheme(theme) {
    this.colorTheme = theme;
    localStorage.setItem('user-theme', theme);
  }

  private getColorTheme() {
    if (localStorage.getItem('user-theme')) {
      this.colorTheme = localStorage.getItem('user-theme');
    } else {
      this.colorTheme = 'bootstrap';
    }
  }
}
