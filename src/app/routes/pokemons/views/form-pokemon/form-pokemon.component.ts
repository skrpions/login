import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PokemonEntity } from '../../domain/entities/pokemon-entity';

@Component({
  selector: 'app-form-pokemon',
  templateUrl: './form-pokemon.component.html',
  styleUrls: ['./form-pokemon.component.scss']
})
export class FormPokemonComponent {
  icon_header = '';
  title_header = '';
  reactiveForm!: FormGroup;
  image = '';

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: PokemonEntity,
    private reference: MatDialogRef<FormPokemonComponent>
  ) {
    console.log('data', data);

    this.icon_header = data ? 'edit' : 'add';
    this.title_header = data ? 'Edit' : 'New';
    this.image =  data ? data.image : 'assets/images/icon-image.png';

    this.initForm();
  }

  private initForm(): void {
    this.reactiveForm = this.fb.nonNullable.group({
      id: this.data?.id,
      name: [this.data?.name, [Validators.required, Validators.minLength(2),Validators.maxLength(40)]],
      attack: [this.data?.attack, [Validators.required, Validators.min(0), Validators.max(100)]],
      image: [this.data?.image, [Validators.required]],
      defense: [this.data?.defense, [Validators.required, Validators.min(0), Validators.max(100)]],
    });
  }

  get nameField() {
    return this.reactiveForm.get('name');
  }

  get attackField() {
    return this.reactiveForm.get('attack');
  }

  get defenseField() {
    return this.reactiveForm.get('defense');
  }

  get imageField() {
    return this.reactiveForm.get('image');
  }

  updateImageFromUrl() {
  const imageUrl = this.reactiveForm.value.image;

    if (imageUrl && imageUrl !== this.image) {
      this.image = imageUrl;
    }
  }

  save() {
    if (this.reactiveForm.invalid) return this.reactiveForm.markAllAsTouched(); // Activate all errors

    const record: PokemonEntity = this.reactiveForm.value;
    this.reference.close(record);
  }
}
