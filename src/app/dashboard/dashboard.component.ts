import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

// import { GettingStartedComponent } from './getting-started/getting-started.component';
// import { TypescriptComponent } from './typescript/typescript.component';
// import { AngularFundamentalsComponent } from './angular-fundamentals/fund-main/fund-main.component';
// import { DisplayDataMainComponent } from './displaying-event/display-data-main/display-data-main.component';
// import { ReusableComponentsComponent } from './reusable-components/reusable-components.component';
// import { DirectivesComponent } from './directives/directives.component';
// import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
// import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
// import { HttpServiceComponent } from './http-service/http-service.component';
// import { RoutingNavigationComponent } from './routing-navigation/routing-navigation.component';
// import { AuthenticationAuthorizationComponent } from './authentication-authorization/authentication-authorization.component';
// import { DeploymentComponent } from './deployment/deployment.component';
// import { RealtimeFirebaseComponent } from './realtime-firebase/realtime-firebase.component';
// import { AnimationComponent } from './animation/animation.component';
// import { MaterialComponent } from './material/material.component';
// import { UnitTestingComponent } from './unit-testing/unit-testing.component';
// import { IntegrationTestingComponent } from './integration-testing/integration-testing.component';
// import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('open', style({
        transform: 'translateX(0)',
      })),
      state('closed', style({
        transform: 'translateX(-100%)',
      })),
      transition('open <=> closed', animate('200ms ease-in-out')),
    ]),
  ],
})
export class DashboardComponent {
  selectedComponent: any;
  isSidebarOpen: boolean = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  constructor() {
    // Initialize the selected component
    this.selectComponent('getting-started');
    console.log(this.selectedComponent);
  }

  selectComponent(routePath: string): void {
    console.log(this.selectedComponent);
    // Map the route path to the corresponding component class
    if (routePath === 'getting-started') {
      this.selectedComponent = 'getting-started';
    } else if (routePath === 'typescript') {
      this.selectedComponent = 'typescript';
    } else if (routePath === 'angular-fundamentals') {
      this.selectedComponent = 'angular-fundamentals';
    } else if (routePath === 'displaying-event') {
      this.selectedComponent = 'displaying-event';
    } else if (routePath === 'reusable-components') {
      this.selectedComponent = 'reusable-components';
    } else if (routePath === 'directives') {
      this.selectedComponent = 'directives';
    } else if (routePath === 'template-driven-forms') {
      this.selectedComponent = 'template-driven-forms';
    } else if (routePath === 'reactive-forms') {
      this.selectedComponent = 'reactive-forms';
    } else if (routePath === 'http-service') {
      this.selectedComponent = 'http-service';
    } else if (routePath === 'routing-navigation') {
      this.selectedComponent = 'routing-navigation';
    } else if (routePath === 'authentication-authorization') {
      this.selectedComponent = 'authentication-authorization';
    } else if (routePath === 'deployment') {
      this.selectedComponent = 'deployment';
    } else if (routePath === 'realtime-firebase') {
      this.selectedComponent = 'realtime-firebase';
    } else if (routePath === 'animation') {
      this.selectedComponent = 'animation';
    } else if (routePath === 'material') {
      this.selectedComponent = 'material';
    } else if (routePath === 'unit-testing') {
      this.selectedComponent = 'unit-testing';
    } else if (routePath === 'integration-testing') {
      this.selectedComponent = 'integration-testing';
    } else if (routePath === 'project') {
      this.selectedComponent = 'project';
    } else {
      this.selectedComponent = null;
    }
    
  }
}