import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainBodyComponent } from './main-body/main-body.component';
import { MainNavComponent } from './main-nav/main-nav.component';
// import { SideBarComponent } from './side-bar/side-bar.component';
import { TopHeaderComponent } from './top-header/top-header.component';

const routes: Routes = [
  {path:'', redirectTo:'main-body', pathMatch:'full'},
  {path:'main-body', component:MainBodyComponent},
  {path:'main-nav', component:MainNavComponent},
  // {path:'side-bar', component:SideBarComponent},
  {path:'top-header', component:TopHeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
