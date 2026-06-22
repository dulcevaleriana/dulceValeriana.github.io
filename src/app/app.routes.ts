import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CaseStudiesComponent } from './pages/case-studies/case-studies.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CaseStudyDetailComponent } from './pages/case-study-detail/case-study-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'work', component: CaseStudiesComponent },
  { path: 'work/:id', component: CaseStudyDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
