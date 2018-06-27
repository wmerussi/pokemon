import { Routes } from '@angular/router'

import { PokemonComponent } from './pokemon.component'

export const pokemonRoutes: Routes = [
  {
    /**
     * Path to pokemon page
     * Page to display all pokemon details
     */
    path: 'pokemon/:id',
    component: PokemonComponent,
    pathMatch: 'full',
  },
]
