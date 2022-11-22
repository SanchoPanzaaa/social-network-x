import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './layout/dashboard/dashboard.component';


const routes: Routes = [

  // Dashboard (AceKeycloakSecurityGuard is not needed)
  { path: 'dashboard', component: Dashboard },

  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: '**', redirectTo: '/dashboard' },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: true,
      scrollPositionRestoration: 'top', // scroll to top on all navigation
      relativeLinkResolution: 'legacy'
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
