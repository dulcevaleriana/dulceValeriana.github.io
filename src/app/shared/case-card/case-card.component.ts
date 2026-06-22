import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CaseStudy } from '../../data/case-studies.service';

@Component({
  selector: 'app-case-card',
  imports: [RouterLink],
  template: `
    <article class="case-card" [style.--accent]="study.color">
      <a [routerLink]="['/work', study.id]" class="case-card__link">
        <div class="case-card__image" [style.background]="study.color">
          <div class="case-card__preview">
            @switch (study.id) {
              @case ('corporate-design-system') {
                <img src="img/corporate-design-system/dashboard-1.png" alt="Captura Corporate Design System" class="preview-img">
              }
              @case ('feelit') {
                <img src="img/2-patient-home.png" alt="Captura app FeelIt" class="preview-img">
              }
              @case ('Betstick') {
                <img src="img/screen.png" alt="Captura app web Betstick" class="preview-img">
              }
            }
          </div>
        </div>
        <div class="case-card__content">
          <span class="case-card__tag">{{ study.tag }}</span>
          <h3 class="case-card__title">{{ study.title }}</h3>
          <p class="case-card__desc">{{ study.description }}</p>
        </div>
      </a>
    </article>
  `,
  styles: [`
    .case-card {
      flex: 1;
    }

    .case-card__link {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .case-card__image {
      width: 100%;
      height: 280px;
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .case-card__link:hover .case-card__image {
      transform: scale(1.03);
    }

    .case-card__link:hover .case-card__title {
      opacity: 0.7;
    }

    .case-card__preview {
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
    }

    .preview-svg {
      width: 80%;
      height: 80%;
    }

    .preview-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      position: absolute;
      inset: 0;
    }

    .case-card__tag {
      font-family: var(--font-sans);
      font-size: 11px;
      color: var(--text-muted);
      letter-spacing: 1px;
    }

    .case-card__title {
      font-family: var(--font-serif);
      font-size: 22px;
      color: var(--text-primary);
      transition: opacity 0.3s ease;
    }

    .case-card__desc {
      font-family: var(--font-sans);
      font-size: 14px;
      color: var(--text-secondary);
      line-height: 1.6;
    }
  `]
})
export class CaseCardComponent {
  @Input() study!: CaseStudy;
}
