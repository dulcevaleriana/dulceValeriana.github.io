import { Component, OnInit } from '@angular/core';
import { CaseCardComponent } from '../../shared/case-card/case-card.component';
import { CaseStudiesService, CaseStudy } from '../../data/case-studies.service';

@Component({
  selector: 'app-case-studies',
  imports: [CaseCardComponent],
  template: `
    <main class="work-page">
      <div class="container">
        <header class="work-page__header">
          <span class="section-label">Trabajo</span>
          <h1 class="work-page__title">Proyectos Seleccionados</h1>
          <p class="work-page__desc">
            Una colección de trabajos de diseño de producto y desarrollo que abarcan web apps,
            experiencias móviles y plataformas de contenido.
          </p>
        </header>

        <div class="work-page__list">
          @for (study of studies; track study.id) {
            <app-case-card [study]="study" />
          }
        </div>
      </div>
    </main>
  `,
  styles: [`
    .work-page {
      padding: 160px 0 120px;
    }

    .work-page__header {
      margin-bottom: 64px;
      max-width: 560px;
    }

    .work-page__title {
      font-family: var(--font-serif);
      font-size: 42px;
      color: var(--text-primary);
      margin-bottom: 16px;
    }

    .work-page__desc {
      font-family: var(--font-sans);
      font-size: 15px;
      color: var(--text-secondary);
      line-height: 1.7;
    }

    .work-page__list {
      display: flex;
      flex-direction: column;
      gap: 64px;
    }

    @media (max-width: 768px) {
      .work-page__title {
        font-size: 28px;
      }
    }
  `]
})
export class CaseStudiesComponent implements OnInit {
  studies: CaseStudy[] = [];

  constructor(private service: CaseStudiesService) {}

  ngOnInit() {
    this.studies = this.service.getAll();
  }
}
