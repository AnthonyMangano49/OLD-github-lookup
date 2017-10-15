import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideSliderComponent } from './side-slider/side-slider.component';
import { NavigationService } from './navigation/navigation.service';
import { LayoutComponent } from './layout/layout.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [LayoutComponent, SideBarComponent, SideSliderComponent, ContactComponent, HomeComponent, ResumeComponent],
  providers: [NavigationService],
  exports: [LayoutComponent]
})
export class MainModule { }
