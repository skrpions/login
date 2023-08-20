import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPokemonComponent } from './form-pokemon.component';
import { PokemonEntity } from '../../domain/entities/pokemon-entity';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';
import { NgOptimizedImage } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('FormPokemonComponent', () => {
  let component: FormPokemonComponent;
  let fixture: ComponentFixture<FormPokemonComponent>;

  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };

  const mockPokemonData: PokemonEntity = {
    id: '1',
    name: 'Pikachu',
    attack: 90,
    defense: 80,
    image: 'pikachu.png'
  };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MaterialModule, BrowserAnimationsModule, NgOptimizedImage],
      declarations: [FormPokemonComponent],
      providers: [
        FormBuilder,
        {
          provide: MatDialogRef,
          useValue: mockDialogRef
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: mockPokemonData
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with provided data', () => {
    expect(component.reactiveForm.value).toEqual(mockPokemonData);
  });

  // ... Más pruebas para validaciones y comportamiento del formulario

  it('should call dialog close when saving valid form', () => {
    const validData: PokemonEntity = {
      id: '2',
      name: 'Charmander',
      attack: 80,
      defense: 70,
      image: 'charmander.png'
    };

    component.reactiveForm.patchValue(validData);
    component.save();
    expect(mockDialogRef.close).toHaveBeenCalledWith(validData);
  });

  it('should require a name', () => {
    const nameControl = component.reactiveForm.get('name');
    nameControl?.setValue('');
    expect(nameControl?.hasError('required')).toBeTruthy();
  });

  it('should not allow negative attack value', () => {
    const attackControl = component.reactiveForm.get('attack');
    attackControl?.setValue(-10);
    expect(attackControl?.hasError('min')).toBeTruthy();
  });
});
