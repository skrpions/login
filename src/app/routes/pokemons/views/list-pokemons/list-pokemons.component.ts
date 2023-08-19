import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PokemonEntity } from '../../domain/entities/pokemon-entity';
import { PokemonApplication } from '../../application/pokemon-application';
export interface UserData {
  id: string;
  avatar: string;
  name: string;
  attack: string;
  defense: string;
}


@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.scss']
})
export class ListPokemonsComponent {

  icon_header = 'code';
  title_header = 'titles.projects';

  pokemonList: PokemonEntity[] = [];

  filterValue = '';
  totalRecords = 0;

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);

  dataSourceClone: PokemonEntity[] = [];



  displayedColumns: string[] = ['avatar', 'name', 'actions'];
  /* displayedColumns: string[] = ['avatar', 'name', 'attack', 'defense', 'actions']; */


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private readonly pokemonApplication: PokemonApplication,) {
    this.getAll();
  }

  getAll() {
    this.pokemonApplication.list().subscribe({
      next: (data: any) => {
        this.dataSource.data = data.results; // Asignar los datos al atributo 'data'
      },
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
   /*  const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    } */
  }
}


