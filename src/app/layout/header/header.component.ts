import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <div class="container header__inner">
        <a routerLink="/" class="header__logo">Dulce Valeriana</a>
        <nav class="header__nav">
          <a routerLink="/work" routerLinkActive="active" class="header__link">Trabajo</a>
          <a routerLink="/about" routerLinkActive="active" class="header__link">Sobre mí</a>
          <a routerLink="/contact" routerLinkActive="active" class="header__link">Contacto</a>
        </nav>
        <button class="header__menu-btn" (click)="menuOpen = !menuOpen" aria-label="Abrir menú">
          <span></span><span></span>
        </button>
      </div>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: rgba(250, 250, 248, 0.85);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border-light);
    }

    .header__inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: var(--nav-height);
    }

    .header__logo {
      font-family: var(--font-serif);
      font-size: 20px;
      color: var(--text-primary);
    }

    .header__nav {
      display: flex;
      align-items: center;
      gap: 32px;
    }

    .header__link {
      font-family: var(--font-sans);
      font-size: 13px;
      color: var(--text-secondary);
      letter-spacing: 0.5px;
      transition: color 0.2s ease;

      &:hover, &.active {
        color: var(--text-primary);
      }
    }

    .header__menu-btn {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;

      span {
        display: block;
        width: 20px;
        height: 1.5px;
        background: var(--text-primary);
        transition: all 0.3s ease;
      }
    }

    @media (max-width: 768px) {
      .header__nav {
        display: none;
      }

      .header__menu-btn {
        display: flex;
      }
    }
  `]
})
export class HeaderComponent {
  menuOpen = false;
}
