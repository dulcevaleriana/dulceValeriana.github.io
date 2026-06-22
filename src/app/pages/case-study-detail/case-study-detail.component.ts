import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CaseStudiesService, CaseStudy } from '../../data/case-studies.service';
import { MetricCardComponent } from '../../shared/metric-card/metric-card.component';

@Component({
  selector: 'app-case-study-detail',
  imports: [RouterLink, MetricCardComponent],
  template: `
    @if (study) {
      <main class="cs-detail">
        <!-- Hero -->
        <section class="cs-hero" [style.background]="study.color">
          <div class="cs-hero__bg">
            @switch (study.id) {
              @case ('corporate-design-system') {
                <div class="hero-bg-img" style="background-image: url('img/corporate-design-system/dashboard-1.png')"></div>
                <div class="hero-bg-overlay" style="background: linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(15,23,42,0.65) 50%, rgba(59,130,246,0.1) 100%)"></div>
              }
              @case ('feelit') {
                <div class="hero-bg-img" style="background-image: url('img/2-patient-home.png')"></div>
                <div class="hero-bg-overlay" style="background: linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(10,22,40,0.65) 50%, rgba(59,130,246,0.1) 100%)"></div>
              }
              @case ('Betstick') {
                <div class="hero-bg-img" style="background-image: url('img/screen.png')"></div>
                <div class="hero-bg-overlay" style="background: linear-gradient(135deg, rgba(0,255,127,0.12) 0%, rgba(10,26,10,0.6) 50%, rgba(0,255,127,0.08) 100%)"></div>
              }
            }
          </div>
          <div class="container cs-hero__content">
            <a routerLink="/work" class="cs-hero__back">&larr; Volver a proyectos</a>
            <span class="cs-hero__tag" [style.color]="study.mutedColor">{{ study.tag }}</span>
            <h1 class="cs-hero__title" [style.color]="study.textColor">{{ study.title }}</h1>
            <p class="cs-hero__subtitle" [style.color]="study.mutedColor">{{ study.subtitle }}</p>
            <div class="cs-hero__meta">
              <div class="cs-hero__meta-item">
                <span class="meta-key" [style.color]="study.mutedColor">Rol</span>
                <span class="meta-value" [style.color]="study.textColor">{{ study.role }}</span>
              </div>
              <div class="cs-hero__meta-item">
                <span class="meta-key" [style.color]="study.mutedColor">Equipo</span>
                <span class="meta-value" [style.color]="study.textColor">{{ study.team }}</span>
              </div>
              <div class="cs-hero__meta-item">
                <span class="meta-key" [style.color]="study.mutedColor">Duración</span>
                <span class="meta-value" [style.color]="study.textColor">{{ study.timeline }}</span>
              </div>
              <div class="cs-hero__meta-item">
                <span class="meta-key" [style.color]="study.mutedColor">Herramientas</span>
                <span class="meta-value" [style.color]="study.textColor">{{ study.tools }}</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Summary -->
        <section class="cs-section">
          <div class="container cs-section__narrow">
            <span class="section-label">Resumen Ejecutivo</span>
            <p class="cs-body">{{ study.summary }}</p>
          </div>
        </section>

        <!-- Problem -->
        <section class="cs-section">
          <div class="container cs-section__narrow">
            <span class="section-label">El Problema</span>
            <p class="cs-body">{{ study.problem }}</p>
          </div>
        </section>

        <!-- Research -->
        <section class="cs-section">
          <div class="container">
            <span class="section-label">Investigación y Hallazgos</span>
            <div class="cs-cards">
              @for (item of study.researchItems; track item.title) {
                <div class="cs-card" [style.background]="study.color + '08'">
                  <h3 class="cs-card__title" [style.color]="study.accentColor">{{ item.title }}</h3>
                  <p class="cs-card__desc">{{ item.desc }}</p>
                </div>
              }
            </div>
          </div>
        </section>

        <!-- Persona -->
        <section class="cs-section">
          <div class="container">
            <span class="section-label">Persona de Usuario</span>
            <div class="cs-persona" [style.background]="study.color + '08'">
              <div class="cs-persona__header">
                <div class="cs-persona__avatar" [style.background]="study.accentColor">
                  {{ getInitials(study.persona.name) }}
                </div>
                <div class="cs-persona__info">
                  <h3 class="cs-persona__name">{{ study.persona.name }}</h3>
                  <span class="cs-persona__role">{{ study.persona.role }}</span>
                </div>
              </div>
              <div class="cs-persona__details">
                <div class="cs-persona__row">
                  <span class="persona-key">Objetivos</span>
                  <span class="persona-value">{{ study.persona.goals }}</span>
                </div>
                <div class="cs-persona__row">
                  <span class="persona-key">Puntos de Dolor</span>
                  <span class="persona-value">{{ study.persona.painPoints }}</span>
                </div>
                <div class="cs-persona__row">
                  <span class="persona-key">Comportamiento</span>
                  <span class="persona-value">{{ study.persona.behavior }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Solution -->
        <section class="cs-section">
          <div class="container cs-section__narrow">
            <span class="section-label">La Solución</span>
            <p class="cs-body">{{ study.solution }}</p>
          </div>
        </section>

        <!-- Design Mockup Preview -->
        <section class="cs-section">
          <div class="container">
            <span class="section-label">Diseño Visual</span>
            <div class="cs-mockup">
              @switch (study.id) {
                @case ('corporate-design-system') {
                  <div class="cs-ds-grid">
                    <div class="cs-ds-grid__item"><img src="img/corporate-design-system/dashboard-1.png" alt="" loading="lazy"></div>
                    <div class="cs-ds-grid__item"><img src="img/corporate-design-system/dashboard-2.png" alt="" loading="lazy"></div>
                    <div class="cs-ds-grid__item"><img src="img/corporate-design-system/dashboard-3.png" alt="" loading="lazy"></div>
                    <div class="cs-ds-grid__item"><img src="img/corporate-design-system/dashboard-4.png" alt="" loading="lazy"></div>
                    <div class="cs-ds-grid__item"><img src="img/corporate-design-system/dashboard-5.png" alt="" loading="lazy"></div>
                    <div class="cs-ds-grid__item"><img src="img/corporate-design-system/dashboard-6.png" alt="" loading="lazy"></div>
                  </div>
                }
                @case ('feelit') {
                  <div class="cs-masonry-grid">
                    <div class="cs-masonry-grid__item"><img src="img/1-onboarding.png" alt="" loading="lazy"><span class="cs-masonry-grid__label">Onboarding</span></div>
                    <div class="cs-masonry-grid__item"><img src="img/2-patient-home.png" alt="" loading="lazy"><span class="cs-masonry-grid__label">Pantalla Principal</span></div>
                    <div class="cs-masonry-grid__item"><img src="img/3-doctor-home.png" alt="" loading="lazy"><span class="cs-masonry-grid__label">Panel del Doctor</span></div>
                    <div class="cs-masonry-grid__item"><img src="img/4-chat.png" alt="" loading="lazy"><span class="cs-masonry-grid__label">Chat con Doctor</span></div>
                    <div class="cs-masonry-grid__item"><img src="img/5-schedule-appointment.png" alt="" loading="lazy"><span class="cs-masonry-grid__label">Agendar Cita</span></div>
                    <div class="cs-masonry-grid__item"><img src="img/5-schedule-appointment-2.png" alt="" loading="lazy"><span class="cs-masonry-grid__label">Agendar Cita 2</span></div>
                    <div class="cs-masonry-grid__item"><img src="img/6-patient-profile.png" alt="" loading="lazy"><span class="cs-masonry-grid__label">Perfil del Paciente</span></div>
                    <div class="cs-masonry-grid__item"><img src="img/7-register-patient.png" alt="" loading="lazy"><span class="cs-masonry-grid__label">Registro Paciente</span></div>
                    <div class="cs-masonry-grid__item"><img src="img/8-register-doctor.png" alt="" loading="lazy"><span class="cs-masonry-grid__label">Registro Doctor</span></div>
                    <div class="cs-masonry-grid__item"><img src="img/9-verification.png" alt="" loading="lazy"><span class="cs-masonry-grid__label">Verificación</span></div>
                    <div class="cs-masonry-grid__item"><img src="img/10-pending-verification.png" alt="" loading="lazy"><span class="cs-masonry-grid__label">Verificación Pendiente</span></div>
                    <div class="cs-masonry-grid__item"><img src="img/11-appointment-detail.png" alt="" loading="lazy"><span class="cs-masonry-grid__label">Detalle de Cita</span></div>
                    <div class="cs-masonry-grid__item"><img src="img/12-video-call.png" alt="" loading="lazy"><span class="cs-masonry-grid__label">Videollamada</span></div>
                    <div class="cs-masonry-grid__item"><img src="img/13-medical-results.png" alt="" loading="lazy"><span class="cs-masonry-grid__label">Resultados Médicos</span></div>
                    <div class="cs-masonry-grid__item"><img src="img/14-notifications.png" alt="" loading="lazy"><span class="cs-masonry-grid__label">Notificaciones</span></div>
                  </div>
                }
                @case ('Betstick') {
                  <div class="cs-mockup__images">
                    <div class="cs-mockup__img">
                      <img src="img/screen.png" alt="Vista escritorio Betstick" loading="lazy">
                      <span class="cs-mockup__caption">Escritorio — Homepage</span>
                    </div>
                    <div class="cs-mockup__img" [style.max-width.px]="213">
                      <img src="img/screen-phone.png" alt="Vista móvil Betstick" loading="lazy">
                      <span class="cs-mockup__caption">Móvil — Player</span>
                    </div>
                    <div class="cs-mockup__img" [style.max-width.px]="143">
                      <img src="img/create-duel.png" alt="Flujo de crear duelo" loading="lazy">
                      <span class="cs-mockup__caption">Escritorio — Crear Duelo</span>
                    </div>
                  </div>
                }
              }
            </div>
          </div>
        </section>

        <!-- Results -->
        <section class="cs-section">
          <div class="container">
            <span class="section-label">Resultados y Métricas</span>
            <div class="cs-metrics">
              @for (metric of study.metrics; track metric.label) {
                <div class="cs-metric-card" [style.background]="study.color + '08'" [style.color]="study.color">
                  <app-metric-card [metric]="metric" />
                </div>
              }
            </div>
          </div>
        </section>

        <!-- Learnings -->
        <section class="cs-section">
          <div class="container cs-section__narrow" style="padding-bottom: 120px;">
            <span class="section-label">Reflexiones</span>
            <p class="cs-body">{{ study.learnings }}</p>
          </div>
        </section>
      </main>
    } @else {
      <main class="not-found">
        <div class="container">
          <h1>Proyecto no encontrado</h1>
          <a routerLink="/work" class="btn btn-outline">Ver todos los proyectos</a>
        </div>
      </main>
    }
  `,
  styles: [`
    .cs-hero {
      padding: 120px 0 80px;
      position: relative;
      overflow: hidden;
    }

    .cs-hero__bg {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 1;
    }

    .hero-bg-svg {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .hero-bg-img {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      opacity: 0.3;
      filter: blur(2px) brightness(0.45);
    }

    .hero-bg-overlay {
      position: absolute;
      inset: 0;
      z-index: 2;
    }

    .cs-hero__content {
      position: relative;
      z-index: 3;
    }

    .cs-hero__back {
      display: inline-block;
      font-family: var(--font-sans);
      font-size: 13px;
      color: rgba(255,255,255,0.6);
      margin-bottom: 24px;
      transition: color 0.2s;

      &:hover {
        color: rgba(255,255,255,0.9);
      }
    }

    .cs-hero__tag {
      font-family: var(--font-sans);
      font-size: 12px;
      letter-spacing: 2px;
      margin-bottom: 16px;
      display: block;
    }

    .cs-hero__title {
      font-family: var(--font-sans);
      font-size: 52px;
      font-weight: 600;
      line-height: 1.1;
      margin-bottom: 16px;
    }

    .cs-hero__subtitle {
      font-family: var(--font-sans);
      font-size: 16px;
      line-height: 1.6;
      max-width: 560px;
      margin-bottom: 48px;
    }

    .cs-hero__meta {
      display: flex;
      gap: 48px;
    }

    .cs-hero__meta-item {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .meta-key {
      font-family: var(--font-sans);
      font-size: 11px;
      letter-spacing: 1px;
    }

    .meta-value {
      font-family: var(--font-sans);
      font-size: 13px;
    }

    .cs-section {
      padding: 64px 0 0;
    }

    .cs-section__narrow {
      max-width: 720px;
    }

    .cs-body {
      font-family: var(--font-sans);
      font-size: 15px;
      color: var(--text-secondary);
      line-height: 1.7;
    }

    .cs-cards {
      display: flex;
      gap: 16px;
    }

    .cs-card {
      flex: 1;
      padding: 24px;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .cs-card__title {
      font-family: var(--font-sans);
      font-size: 14px;
      font-weight: 600;
    }

    .cs-card__desc {
      font-family: var(--font-sans);
      font-size: 13px;
      color: var(--text-secondary);
      line-height: 1.6;
    }

    .cs-persona {
      padding: 32px;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .cs-persona__header {
      display: flex;
      gap: 24px;
      align-items: center;
    }

    .cs-persona__avatar {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-sans);
      font-size: 16px;
      font-weight: 600;
      color: white;
    }

    .cs-persona__info {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .cs-persona__name {
      font-family: var(--font-sans);
      font-size: 18px;
      font-weight: 600;
      color: var(--text-primary);
    }

    .cs-persona__role {
      font-family: var(--font-sans);
      font-size: 13px;
      color: var(--text-secondary);
    }

    .cs-persona__details {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .cs-persona__row {
      display: flex;
      gap: 12px;
    }

    .persona-key {
      font-family: var(--font-sans);
      font-size: 12px;
      color: var(--text-muted);
      width: 120px;
      flex-shrink: 0;
    }

    .persona-value {
      font-family: var(--font-sans);
      font-size: 13px;
      color: var(--text-secondary);
      line-height: 1.5;
    }

    .cs-mockup {
      border-radius: 8px;
      padding: 0px;
      margin-top: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .mockup-svg {
      width: 100%;
      max-width: 800px;
    }

    .cs-ds-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; width: 100%; }
    .cs-ds-grid__item { overflow: hidden; border-radius: 8px; }
    .cs-ds-grid__item img { width: 100%; display: block; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.15); }
    @media (max-width: 768px) { .cs-ds-grid { grid-template-columns: repeat(1, 1fr); } }

    .cs-mockup__images {
      display: flex;
      gap: 40px;
      width: fit-content;
      align-items: flex-start;
    }

    .cs-mockup__img_children {
      display: flex;
      flex-direction: column;
      gap: 40px;
      flex: 1;
      min-width: 0;
    }

    .cs-mockup__img_children .cs-mockup__img:last-child img {
      height: 280px;
      object-fit: cover;
    }

    .cs-mockup__images > .cs-mockup__img img {
      max-height: 400px;
      object-fit: cover;
    }



    .cs-mockup__img {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-width: 0;
    }

    .cs-mockup__img img {
      width: fit-content;
      height: fit-content;
      display: block;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
    }

    .cs-mockup__caption {
      font-family: var(--font-sans);
      font-size: 12px;
      color: var(--text-muted);
      text-align: center;
      margin-top: 8px;
      display: block;
    }

    .cs-metrics {
      display: flex;
      gap: 16px;
    }

    .cs-metric-card {
      flex: 1;
      border-radius: 8px;
    }

    .cs-metric-card app-metric-card {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .not-found {
      padding: 160px 0;
      text-align: center;
    }

    .not-found h1 {
      font-family: var(--font-serif);
      font-size: 32px;
      margin-bottom: 24px;
    }

    @media (max-width: 768px) {
      .cs-hero__title {
        font-size: 32px;
      }

      .cs-hero__meta {
        flex-direction: column;
        gap: 24px;
      }

      .cs-cards {
        flex-direction: column;
      }

      .cs-metrics {
        flex-direction: column;
      }

      .cs-persona__row {
        flex-direction: column;
        gap: 4px;
      }

      .cs-mockup {
        padding: 20px;
      }
    }

    .cs-masonry-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; width: 100%; }
    .cs-masonry-grid__item { overflow: hidden; border-radius: 8px; }
    .cs-masonry-grid__item img { width: 100%; display: block; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.15); }
    .cs-masonry-grid__label { display: block; font-family: var(--font-sans); font-size: 11px; color: var(--text-muted); text-align: center; padding: 8px 0 0; }
    @media (max-width: 1024px) { .cs-masonry-grid { grid-template-columns: repeat(3, 1fr); } }
    @media (max-width: 768px) { .cs-masonry-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 480px) { .cs-masonry-grid { grid-template-columns: repeat(1, 1fr); } }
  `]
})
export class CaseStudyDetailComponent implements OnInit {
  study: CaseStudy | undefined;

  constructor(
    private route: ActivatedRoute,
    private service: CaseStudiesService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.study = this.service.getById(id);
  }

  getInitials(name: string): string {
    const parts = name.split(' ');
    return parts.length > 1 ? parts[0][0] + parts[1][0] : parts[0][0];
  }
}
