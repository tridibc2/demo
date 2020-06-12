import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
/* import { BlogDetailComponent } from '../blog-detail/blog-detail.component';
import { BlogByCategoryComponent } from '../blog-by-category/blog-by-category.component'; */
import { ServicesComponent } from '../services/services.component';
import { ContactComponent } from '../contact/contact.component';
/* import { RecentBlogComponent } from '../recent-blog/recent-blog.component'; */
import { AboutPageComponent } from '../about-page/about-page.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
/*   {path: 'blog/:blogId', component: BlogDetailComponent},
  {path: 'bycategory/:categoryId', component: BlogByCategoryComponent},
  {path: 'recent', component: RecentBlogComponent}, */
  {path: 'services', component: ServicesComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
