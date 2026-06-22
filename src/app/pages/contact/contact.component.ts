import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  template: `
    <main class="contact">
      <div class="container">
        <span class="section-label">Contacto</span>
        <h1 class="contact__title">Trabajemos juntos.</h1>
        <p class="contact__desc">
          Actualmente estoy disponible para proyectos freelance, roles de tiempo completo y colaboraciones de diseño.
        </p>

        <div class="contact__methods">
          <div class="contact__method">
            <span class="contact__method-label">Email</span>
            <a href="mailto:dulceguzmantaveras&#64;gmail.com" class="contact__method-value">dulceguzmantaveras&#64;gmail.com</a>
          </div>
          <div class="contact__method">
            <span class="contact__method-label">LinkedIn</span>
            <a href="https://www.linkedin.com/in/dulcevaleriana/" target="_blank" rel="noopener" class="contact__method-value">/in/dulcevaleriana</a>
          </div>
          <div class="contact__method">
            <span class="contact__method-label">Ubicación</span>
            <span class="contact__method-value">Santo Domingo · Remoto</span>
          </div>
        </div>
      </div>
    </main>
  `,
  styles: [`
    .contact {
      padding: 160px 0 120px;
    }

    .contact__title {
      font-family: var(--font-serif);
      font-size: 42px;
      color: var(--text-primary);
      margin-bottom: 16px;
    }

    .contact__desc {
      font-family: var(--font-sans);
      font-size: 15px;
      color: var(--text-secondary);
      max-width: 480px;
      line-height: 1.6;
      margin-bottom: 48px;
    }

    .contact__methods {
      display: flex;
      gap: 32px;
    }

    .contact__method {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .contact__method-label {
      font-family: var(--font-sans);
      font-size: 12px;
      color: var(--text-muted);
      letter-spacing: 1px;
    }

    .contact__method-value {
      font-family: var(--font-sans);
      font-size: 15px;
      color: var(--text-primary);
    }

    a.contact__method-value {
      color: var(--accent-sage);
      text-decoration: underline;
      text-underline-offset: 3px;
      text-decoration-thickness: 1px;

      &:hover {
        opacity: 0.7;
      }
    }

    @media (max-width: 768px) {
      .contact__title {
        font-size: 28px;
      }

      .contact__methods {
        flex-direction: column;
        gap: 24px;
      }
    }
  `]
})
export class ContactComponent {}
