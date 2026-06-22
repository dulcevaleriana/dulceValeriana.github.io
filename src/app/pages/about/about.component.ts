import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  template: `
    <main class="about">
      <div class="container">
        <section class="about__intro">
          <span class="section-label">Sobre mí</span>
          <h1 class="about__title">
            Soy Dulce, Diseñadora de Producto<br>
            y Frontend Developer.
          </h1>
          <p class="about__bio">
            Cuento con más de 10 años de experiencia diseñando y desarrollando productos digitales para empresas de distintos sectores. Mi especialidad es transformar necesidades de negocio y requerimientos complejos en experiencias digitales intuitivas, accesibles y visualmente consistentes.
          </p>
          <p class="about__bio">
            A lo largo de mi carrera he trabajado en todo el ciclo de vida del producto, desde la definición de experiencias y diseño de interfaces hasta su implementación frontend utilizando tecnologías modernas como Angular, HTML, CSS y JavaScript.
          </p>
          <p class="about__bio">
            Mi perfil híbrido me permite conectar el diseño y el desarrollo, facilitando la colaboración entre equipos multidisciplinarios y garantizando que las soluciones diseñadas puedan implementarse con eficiencia y calidad.
          </p>
        </section>

        <section class="about__approach">
          <span class="section-label">Enfoque</span>
          <p class="about__text">
            Creo que los mejores productos digitales nacen del equilibrio entre las necesidades de las personas, los objetivos del negocio y las capacidades tecnológicas.
          </p>
          <p class="about__text">
            Mi proceso combina investigación, análisis, diseño e iteración continua para crear experiencias claras, funcionales y escalables. Gracias a mi experiencia en frontend, puedo diseñar con una visión realista de implementación, reduciendo la brecha entre la idea, el diseño y el producto final.
          </p>
          <p class="about__text">
            Me apasiona construir interfaces que no solo se vean bien, sino que generen valor para los usuarios y resultados para las organizaciones.
          </p>
        </section>

        <section class="about__skills">
          <span class="section-label">Habilidades</span>
          <div class="skills__grid">
            <div class="skill-cat">
              <h3 class="skill-cat__title">Diseño</h3>
              <ul>
                <li>Diseño UI/UX</li>
                <li>Diseño de Productos Digitales</li>
                <li>Sistemas de Diseño (Design Systems)</li>
                <li>Arquitectura de Información</li>
                <li>Diseño de Interacción</li>
                <li>Wireframing y Prototipado</li>
                <li>Accesibilidad y Usabilidad</li>
              </ul>
            </div>
            <div class="skill-cat">
              <h3 class="skill-cat__title">Estrategia</h3>
              <ul>
                <li>Product Thinking</li>
                <li>Design Thinking</li>
                <li>Investigación y Validación de Soluciones</li>
                <li>Análisis de Requerimientos</li>
                <li>Optimización de Experiencias Digitales</li>
                <li>Colaboración con equipos multidisciplinarios</li>
              </ul>
            </div>
            <div class="skill-cat">
              <h3 class="skill-cat__title">Desarrollo Frontend</h3>
              <ul>
                <li>Angular</li>
                <li>React</li>
                <li>TypeScript / JavaScript</li>
                <li>HTML5 &amp; CSS3</li>
                <li>Responsive Design</li>
                <li>Storybook</li>
                <li>Integración Diseño-Desarrollo</li>
                <li>Implementación Pixel Perfect</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  `,
  styles: [`
    .about {
      padding: 160px 0 120px;
    }

    .about__intro {
      max-width: 640px;
      margin-bottom: 64px;
    }

    .about__title {
      font-family: var(--font-serif);
      font-size: 42px;
      color: var(--text-primary);
      line-height: 1.2;
      margin-bottom: 24px;
    }

    .about__bio, .about__text {
      font-family: var(--font-sans);
      font-size: 15px;
      color: var(--text-secondary);
      line-height: 1.7;
    }

    .about__approach {
      max-width: 640px;
      margin-bottom: 64px;
    }

    .about__skills {
      margin-bottom: 64px;
    }

    .skills__grid {
      display: flex;
      gap: 24px;
    }

    .skill-cat {
      flex: 1;
    }

    .skill-cat__title {
      font-family: var(--font-sans);
      font-size: 13px;
      color: var(--text-primary);
      letter-spacing: 0.5px;
      margin-bottom: 12px;
      font-weight: 600;
    }

    .skill-cat ul {
      list-style: none;
    }

    .skill-cat li {
      font-family: var(--font-sans);
      font-size: 13px;
      color: var(--text-secondary);
      line-height: 1.8;
    }

    @media (max-width: 768px) {
      .about__title {
        font-size: 28px;
      }

      .skills__grid {
        flex-direction: column;
        gap: 32px;
      }
    }
  `]
})
export class AboutComponent {}
