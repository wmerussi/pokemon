import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';

import { Data } from '../models/data.model'
import { Pokemon } from '../models/pokemon.model'

@Injectable()
export class PokemonService {
  private url: string = 'http://pokeapi.salestock.net/api/v2/pokemon'

  constructor(private http: Http) { }

  public getAll(): Observable<Data> {
    return this.http
      .get(this.url)
      .map(response => new Data(response.json()))
  }

  public getSingle( pokemonId : number): Observable<Pokemon> {
    return this.http
      .get(`${this.url}/${ pokemonId }/`)
      .map(response => new Pokemon(response.json()))
  }
}
