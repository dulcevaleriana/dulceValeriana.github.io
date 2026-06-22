import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <footer class="footer">
      <div class="container footer__inner">
        <span class="footer__copy">&copy; 2026 Dulce Valeriana</span>
        <div class="footer__links">
          <a href="https://www.linkedin.com/in/dulcevaleriana/" target="_blank" rel="noopener" class="footer__link">LinkedIn</a>
          <a href="https://github.com/dulcevaleriana" target="_blank" rel="noopener" class="footer__link">GitHub</a>
          <a href="mailto:dulceguzmantaveras@gmail.com" class="footer__link">Email</a>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      border-top: 1px solid var(--border-light);
      padding: 24px 0;
    }

    .footer__inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .footer__copy {
      font-family: var(--font-sans);
      font-size: 12px;
      color: var(--text-muted);
    }

    .footer__links {
      display: flex;
      gap: 24px;
    }

    .footer__link {
      font-family: var(--font-sans);
      font-size: 12px;
      color: var(--text-muted);
      transition: color 0.2s ease;

      &:hover {
        color: var(--text-primary);
      }
    }

    @media (max-width: 768px) {
      .footer__inner {
        flex-direction: column;
        gap: 16px;
        text-align: center;
      }
    }
  `]
})
export class FooterComponent {}
