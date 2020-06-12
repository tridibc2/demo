import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*import { BlogDetailsComponent } from './components/blog-details/blog-details.component'; */
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
