import { Routes, RouterModule } from '@angular/router'

import { errorPagesRoutes } from './pages/error-pages/error-pages.routes'
import { homeRoutes } from './pages/home/home.routes'
import { pokemonRoutes } from './pages/pokemon/pokemon.routes'

/**
 * Single variable to import all website routes
 * It`s imported in 'app.module.ts'
 */
const appRoutes: Routes = [
  ...homeRoutes,
  ...pokemonRoutes,
  ...errorPagesRoutes, // MUST GO LAST!!!
]

export const appRoutingProviders: any[] = []
export const routing = RouterModule.forRoot(appRoutes)
