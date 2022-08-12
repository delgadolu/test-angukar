import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticGraphComponent } from './analytic-graph/analytic-graph.component';
import { AppComponent } from './app.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';

const routes: Routes = [

  { path: '', component: AnalyticGraphComponent },
  { path: 'tool-bar', component: ToolBarComponent },
  { path: 'analytic-graph', component: AnalyticGraphComponent },
  { path: '**', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
