import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GettingStartedComponent } from './dashboard/getting-started/getting-started.component';
import { TypescriptComponent } from './dashboard/typescript/typescript.component';
import { AngularFundamentalsComponent } from './dashboard/angular-fundamentals/angular-fundamentals.component';
import { ReusableComponentsComponent } from './dashboard/reusable-components/reusable-components.component';
import { DirectivesComponent } from './dashboard/directives/directives.component';
import { TemplateDrivenFormsComponent } from './dashboard/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './dashboard/reactive-forms/reactive-forms.component';
import { HttpServiceComponent } from './dashboard/http-service/http-service.component';
import { RoutingNavigationComponent } from './dashboard/routing-navigation/routing-navigation.component';
import { AuthenticationAuthorizationComponent } from './dashboard/authentication-authorization/authentication-authorization.component';
import { RealtimeFirebaseComponent } from './dashboard/realtime-firebase/realtime-firebase.component';
import { AnimationComponent } from './dashboard/animation/animation.component';
import { MaterialComponent } from './dashboard/material/material.component';
import { UnitTestingComponent } from './dashboard/unit-testing/unit-testing.component';
import { ProjectComponent } from './dashboard/project/project.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayingEventComponent } from './dashboard/displaying-event/displaying-event.component';
import { DeploymentComponent } from './dashboard/deployment/deployment.component';
import { IntegrationTestingComponent } from './dashboard/integration-testing/integration-testing.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'getting-started', component: GettingStartedComponent },
  { path: 'typescript', component: TypescriptComponent },
  { path: 'angular-fundamentals', component: AngularFundamentalsComponent },
  { path: 'displaying-event', component: DisplayingEventComponent },
  { path: 'reusable-components', component: ReusableComponentsComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'template-driven-forms', component: TemplateDrivenFormsComponent },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: 'http-service', component: HttpServiceComponent },
  { path: 'routing-navigation', component: RoutingNavigationComponent },
  { path: 'authentication-authorization', component: AuthenticationAuthorizationComponent },
  { path: 'deployment', component: DeploymentComponent },
  { path: 'realtime-firebase', component: RealtimeFirebaseComponent },
  { path: 'animation', component: AnimationComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'unit-testing', component: UnitTestingComponent },
  { path: 'integration-testing', component: IntegrationTestingComponent },
  { path: 'project', component: ProjectComponent },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }, // Wildcard route for invalid URLs
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GettingStartedComponent,
    TypescriptComponent,
    AngularFundamentalsComponent,
    DisplayingEventComponent,
    ReusableComponentsComponent,
    DirectivesComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    HttpServiceComponent,
    RoutingNavigationComponent,
    AuthenticationAuthorizationComponent,
    DeploymentComponent,
    RealtimeFirebaseComponent,
    AnimationComponent,
    MaterialComponent,
    UnitTestingComponent,
    IntegrationTestingComponent,
    ProjectComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes),RouterModule.forChild(routes), BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
