import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { rootRouterConfig } from './app.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ProdutosService } from './produtos/produtos.service';

@NgModule({
  declarations: [            // componentes
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent
  ],
  imports: [                 // modulos 
    BrowserModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false })],  // preciso indicar que é para o o modulo principal, pois eu poderia ter outros arquivos de roteamento para modulos filhos. Obs: useHash serve para indicar se queremos ou não, usar uma '#' no final da Url.
    FormsModule,
  ],
  providers: [               // serviços
    ProdutosService,
    {provide: APP_BASE_HREF, useValue: '/'}  // Configuração de um prefixo de rota. Antes do nome home, podemos configurar o que vai aparecer. Ex: 'admin/', ou simplesmente '/'
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
