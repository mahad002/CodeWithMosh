import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GettingStartedComponent } from './dashboard/getting-started/getting-started.component';
import { TypescriptComponent } from './dashboard/typescript/typescript.component';
import { AngularFundamentalsComponent } from './dashboard/angular-fundamentals/fund-main/fund-main.component';
import { ReusableMainComponent } from './dashboard/reusable-components/reusable-main/reusable-main.component';
import { TemplateDrivenFormsComponent } from './dashboard/template-driven-forms/template-driven-forms.component';
import { HttpServiceComponent } from './dashboard/http-service/http-service.component';
import { RoutingNavigationComponent } from './dashboard/routing-navigation/routing-navigation.component';
import { AuthenticationAuthorizationComponent } from './dashboard/authentication-authorization/authentication-authorization.component';
import { AnimationComponent } from './dashboard/animation/animation.component';
import { MaterialComponent } from './dashboard/material/material.component';
import { UnitTestingComponent } from './dashboard/unit-testing/unit-testing.component';
import { ProjectComponent } from './dashboard/project/project.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayDataMainComponent } from './dashboard/displaying-event/display-data-main/display-data-main.component';
import { DeploymentComponent } from './dashboard/deployment/deployment.component';
import { IntegrationTestingComponent } from './dashboard/integration-testing/integration-testing.component';
import { AuthorsComponent } from './dashboard/angular-fundamentals/authors/authors.component';
import { CourseComponent } from './dashboard/angular-fundamentals/course/course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleCaseComponent } from './dashboard/displaying-event/title-case/title-case.component';
import { TitleCasePipe } from './dashboard/displaying-event/title-case.pipe';
import { FavoriteComponent } from './dashboard/reusable-components/favorite/favorite.component';
import { LikeComponent } from './dashboard/reusable-components/like/like.component';
import { PanelComponent } from './dashboard/reusable-components/panel/panel.component';
import { DirectiveMainComponent } from './dashboard/directives/directive-main/directive-main.component';
import { ZippyComponent } from './dashboard/directives/zippy/zippy.component';
import { InputFormatDirective } from './dashboard/directives/input-format.directive';
import { ReactiveFormsMainComponent } from './dashboard/reactive-forms/reactive-forms-main/reactive-forms-main.component';
import { ChangePasswordComponent } from './dashboard/reactive-forms/change-password/change-password.component';
import { NewCourseFormComponent } from './dashboard/reactive-forms/new-course-form/new-course-form.component';
import { SignupFormComponent } from './dashboard/reactive-forms/signup-form/signup-form.component';
import { ArchiveComponent } from './dashboard/routing-navigation/archive/archive.component';
import { HomeComponent } from './dashboard/routing-navigation/home/home.component';
import { MyFollowersComponent } from './dashboard/http-service/my-followers/my-followers.component';
import { PostsComponent } from './dashboard/http-service/posts/posts.component';
import { GithubFollowersService } from './dashboard/http-service/github-followers.service';
import { HttpClientModule } from '@angular/common/http';
import { FireDemoComponent } from './dashboard/realtime-firebase/fire-demo/fire-demo.component';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'getting-started', component: GettingStartedComponent },
  { path: 'typescript', component: TypescriptComponent },
  { path: 'angular-fundamentals', component: AngularFundamentalsComponent },
  { path: 'displaying-event', component: DisplayDataMainComponent },
  { path: 'reusable-components', component: ReusableMainComponent },
  { path: 'directives', component: DirectiveMainComponent },
  { path: 'template-driven-forms', component: TemplateDrivenFormsComponent },
  { path: 'reactive-forms', component: ReactiveFormsMainComponent },
  { path: 'http-service', component: HttpServiceComponent },
  { path: 'routing-navigation', component: RoutingNavigationComponent },
  { path: 'authentication-authorization', component: AuthenticationAuthorizationComponent },
  { path: 'deployment', component: DeploymentComponent },
  { path: 'realtime-firebase', component: FireDemoComponent },
  { path: 'animation', component: AnimationComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'unit-testing', component: UnitTestingComponent },
  { path: 'integration-testing', component: IntegrationTestingComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'home', component: HomeComponent },
  { path: 'archives/:year/:month', component: ArchiveComponent },
  { path: 'followers', component: MyFollowersComponent },
  { path: 'posts', component: PostsComponent },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }, // Wildcard route for invalid URLs
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GettingStartedComponent,
    TypescriptComponent,
    AngularFundamentalsComponent,
    DisplayDataMainComponent,
    ReusableMainComponent,
    DirectiveMainComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsMainComponent,
    HttpServiceComponent,
    RoutingNavigationComponent,
    AuthenticationAuthorizationComponent,
    DeploymentComponent,
    FireDemoComponent,
    AnimationComponent,
    MaterialComponent,
    UnitTestingComponent,
    IntegrationTestingComponent,
    ProjectComponent,

    //Other components
    AuthorsComponent,
    CourseComponent,
    TitleCaseComponent,
    FavoriteComponent,
    TitleCasePipe,
    FavoriteComponent,
    LikeComponent,
    PanelComponent,
    ZippyComponent,
    InputFormatDirective,
    ChangePasswordComponent,
    NewCourseFormComponent,
    SignupFormComponent,
    ArchiveComponent,
    HomeComponent,
    MyFollowersComponent,
    PostsComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
     RouterModule.forRoot(routes),
     RouterModule.forChild(routes),
      BrowserAnimationsModule,
    FormsModule,
  ReactiveFormsModule,
  
],
  providers: [
    GithubFollowersService
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
