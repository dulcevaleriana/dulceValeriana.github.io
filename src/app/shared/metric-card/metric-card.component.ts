import { Component, Input } from '@angular/core';
import { Metric } from '../../data/case-studies.service';

@Component({
  selector: 'app-metric-card',
  imports: [],
  template: `
    <div class="metric-card">
      <span class="metric-card__value">{{ metric.value }}</span>
      <span class="metric-card__label">{{ metric.label }}</span>
    </div>
  `,
  styles: [`
    .metric-card {
      flex: 1;
      padding: 24px;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      gap: 4px;
      align-items: center;
      text-align: center;
    }

    .metric-card__value {
      font-family: var(--font-sans);
      font-size: 36px;
      font-weight: 700;
      color: inherit;
    }

    .metric-card__label {
      font-family: var(--font-sans);
      font-size: 13px;
      color: inherit;
      opacity: 0.7;
    }
  `]
})
export class MetricCardComponent {
  @Input() metric!: Metric;
}
