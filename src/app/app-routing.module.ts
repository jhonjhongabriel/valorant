import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentPageComponent } from './pages/agent-page/agent-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
{path: "", component: HomePageComponent},
{path: "agent/:id", component: AgentPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
