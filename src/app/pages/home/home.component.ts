import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CaseCardComponent } from '../../shared/case-card/case-card.component';
import { CaseStudiesService, CaseStudy } from '../../data/case-studies.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CaseCardComponent],
  template: `
    <main class="home">
      <section class="hero">
        <div class="container">
          <div class="hero__content">
            <h1 class="hero__title">
              Diseñadora de Producto<br>
              & Frontend Developer
            </h1>
            <p class="hero__desc">
              Diseño y construyo productos digitales claros, intencionales y humanos.
            </p>
          </div>
        </div>
      </section>

      <section class="work">
        <div class="container">
          <div class="work__header">
            <span class="section-label">Trabajos Seleccionados</span>
            <a routerLink="/work" class="work__all">Ver todos los proyectos &rarr;</a>
          </div>
          <div class="work__grid">
            @for (study of studies; track study.id) {
              <app-case-card [study]="study" />
            }
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [`
    .hero {
      padding: 160px 0 80px;
    }

    .hero__title {
      font-family: var(--font-serif);
      font-size: 64px;
      color: var(--text-primary);
      line-height: 1.1;
      margin-bottom: 24px;
    }

    .hero__desc {
      font-family: var(--font-sans);
      font-size: 16px;
      color: var(--text-secondary);
      max-width: 480px;
      line-height: 1.6;
    }

    .work {
      padding: 64px 0 120px;
    }

    .work__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 40px;
    }

    .work__all {
      font-family: var(--font-sans);
      font-size: 13px;
      color: var(--accent-sage);
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.7;
      }
    }

    .work__grid {
      display: flex;
      gap: 24px;
    }

    @media (max-width: 768px) {
      .hero__title {
        font-size: 36px;
      }

      .work__grid {
        flex-direction: column;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  studies: CaseStudy[] = [];

  constructor(private service: CaseStudiesService) {}

  ngOnInit() {
    this.studies = this.service.getAll();
  }
}
