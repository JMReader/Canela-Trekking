import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2, RendererStyleFlags2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;

  constructor(
    private rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  applyTheme(theme: Record<string, string>): void {
    const root = this.document.documentElement;
    Object.entries(theme).forEach(([property, value]) => {
      this.renderer.setStyle(root, property, value, RendererStyleFlags2.DashCase);
    });
  }
}
