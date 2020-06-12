import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientRoutingModule } from './client-routing.module';
import { ContactComponent } from '../contact/contact.component';
/* import { PricingComponent } from '../pricing/pricing.component';
import { BlogCategoryComponent } from '../blog-category/blog-category.component';
import { BlogByCategoryComponent } from '../blog-by-category/blog-by-category.component';
import { RecentBlogComponent } from '../recent-blog/recent-blog.component'; */
import { HomeComponent } from '../home/home.component';
import { ServicesComponent } from '../services/services.component';
import { AboutPageComponent } from '../about-page/about-page.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutPageComponent,
    ServicesComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
