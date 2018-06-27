/** Angular imports */
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

/** Routing imports */
import { appRoutingProviders, routing } from './app.routing'

/** Modules imports */
import { ErrorPagesModule } from './pages/error-pages/error-pages.module'

/** Component imports */
import { AppComponent } from './app.component'
import { HomeComponent } from './pages/home/home.component'
import { PokemonComponent } from './pages/pokemon/pokemon.component'
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component'

/** Directive imports */
import { RouterLinkStubDirective } from './directives/router-link-stub.directive'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonComponent,
    PokemonItemComponent,
    RouterLinkStubDirective,
  ],
  imports: [
    BrowserModule,
    ErrorPagesModule,
    routing,
  ],
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
