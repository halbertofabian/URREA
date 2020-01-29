import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DasboardComponent } from './pages/dasboard/dasboard.component';
import { RouterModule, Routes} from '@angular/router';
import { InformesComponent } from './pages/informes/informes.component';
import { AjustesComponent } from './pages/ajustes/ajustes.component';
import { TicketsComponent } from './pages/tickets/tickets.component';


// Aquí se genera el entutamiento para las paginas
const routes: Routes = [
  {path:'',redirectTo:'/dashboard', pathMatch:'full' },
  {path:'dashboard',component:DasboardComponent},
  {path:'informes',component:InformesComponent},
  {path:'ajustes',component:AjustesComponent},
  {path:'tickets',component:TicketsComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DasboardComponent,
    InformesComponent,
    AjustesComponent,
    TicketsComponent,

    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Imortante 
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 



}
