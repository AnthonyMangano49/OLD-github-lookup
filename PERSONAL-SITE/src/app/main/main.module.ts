import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideSliderComponent } from './side-slider/side-slider.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainLayoutComponent, SideBarComponent, SideSliderComponent, ContactComponent, HomeComponent, ResumeComponent],
  exports: [MainLayoutComponent]
})
export class MainModule { }
