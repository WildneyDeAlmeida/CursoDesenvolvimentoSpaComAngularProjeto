import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';

@NgModule({
  declarations: [          // componentes
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [               // modulos 
    BrowserModule,
    
  ],
  providers: [             // serviços

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
