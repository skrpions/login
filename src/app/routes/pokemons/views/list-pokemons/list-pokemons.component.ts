import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PokemonApplication } from '../../application/pokemon-application';
import { MatDialog } from '@angular/material/dialog';
import { FormPokemonComponent } from '../form-pokemon/form-pokemon.component';
import { PokemonEntity } from '../../domain/entities/pokemon-entity';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.scss']
})
export class ListPokemonsComponent {

  icon_header = 'code';
  title_header = 'titles.projects';

  filterValue = '';
  totalRecords = 0;

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['avatar', 'name', 'attack', 'defense', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private readonly pokemonApplication: PokemonApplication,
    private toastr: ToastrService,
    public dialog: MatDialog
    ) {
    this.getAll();
  }

  getAll() {
    this.pokemonApplication.list().subscribe({
      next: (data: PokemonEntity[]) => {
        console.log('Data: ', data);

        this.dataSource = new MatTableDataSource<any>(data);
        this.dataSource.paginator = this.paginator; // Configura el paginador
        this.dataSource.sort = this.sort;
        this.totalRecords = data.length; // Actualiza la cantidad total de registros
      },
    });
  }

  /* getAll() {
    this.pokemonApplication.list().subscribe({
      next: (data: any) => {
        console.log('Data: ', data);

        this.dataSource = data; // Asignar los datos al atributo 'data'
        this.totalRecords = data.length;
        //this.dataSource.data = data.results; // Asignar los datos al atributo 'data'
      },
    });
  } */



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator.pageSize = 5; // Configura el tamaño de página que desees
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = this.filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openForm(enterAnimationDuration: string, exitAnimationDuration: string, row: any = null!) {
    console.log('row', row);

    const reference = this.dialog.open(FormPokemonComponent, {
      data: row,
      width: '800px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    reference.afterClosed().subscribe(response => {
      if (!response) return;

      const id = response.id;
      delete response.id;

      if (id) {
        // Update entity
        this.pokemonApplication.update(id, response).subscribe({
          next: () => {
            console.log('Actualizado:', response);

            // Actualiza la fuente de datos con el nuevo registro
            this.getAll();
            this.toastr.success('Updated', 'Ok!');
            //this.dataSource.data = [...this.dataSource.data];

            //this.toast.success(this.translate.instant(this.messages.update));
          },
        });
      } else {

        // Agregaré un id manualmente para que no de error al insertar
        response.id = this.dataSource.data.length + 1;

        // New entity
        this.pokemonApplication.insert(response).subscribe({
          next: () => {
            console.log('Insertado');

            // Actualiza la fuente de datos con el nuevo registro
            this.getAll();
            this.toastr.success('Added', 'Ok!');
            //this.dataSource.data = [...this.dataSource.data];

            //this.toast.success(this.translate.instant(this.messages.insert));
          },
        });
      }
    });
  }

  delete(id: number, record = '') {
    console.log('id: ', id + ' - record: ', record);

    this.pokemonApplication.delete(id).subscribe({
      next: () => {

        // Actualiza la fuente de datos con el nuevo registro
        this.getAll();
        //this.dataSource.data = [...this.dataSource.data];
        this.toastr.success('Deleted', 'Ok!');
        //this.toast.success(this.translate.instant(this.messages.delete));
      },
    });
  }
}


