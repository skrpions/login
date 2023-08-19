import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-pokemon',
  templateUrl: './form-pokemon.component.html',
  styleUrls: ['./form-pokemon.component.scss']
})
export class FormPokemonComponent {
  icon_header = '';
  title_header = '';
  reactiveForm!: FormGroup;
  image = 'assets/images/icon-image.png';

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private reference: MatDialogRef<FormPokemonComponent>
  ) {
    console.log('data', data);

    this.icon_header = data ? 'edit' : 'add'; // TODO: Estos textos deben ser dinámicos.
    this.title_header = data ? 'Edit' : 'New'; // TODO: Estos textos deben ser dinámicos.
    this.initForm();
  }

  private initForm(): void {
    this.reactiveForm = this.fb.nonNullable.group({
      id: this.data?.id,
      name: [this.data?.name, [Validators.required, Validators.maxLength(40)]],
      attack: [this.data?.attack, [Validators.required, Validators.min(0)]],
      image: [this.data?.image, [Validators.required]],
      defense: [this.data?.defense, [Validators.required, Validators.min(0)]],
    });
  }

  updateImageFromUrl() {
  const imageUrl = this.reactiveForm.value.image;

    if (imageUrl && imageUrl !== this.image) {
      this.image = imageUrl;
    }
  }

  save() {
    const record = this.reactiveForm.value;
    this.reference.close(record);
  }
}
