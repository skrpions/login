import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-pokemon',
  templateUrl: './form-pokemon.component.html',
  styleUrls: ['./form-pokemon.component.scss']
})
export class FormPokemonComponent {
  icon_header = 'toys';
  title_header: string;
  reactiveForm!: FormGroup;
  image = '';

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private reference: MatDialogRef<FormPokemonComponent>
  ) {
    console.log('data', data);

    this.title_header = data ? 'Edit' : 'New'; // TODO: Estos textos deben ser dinámicos.
    this.image = data
      ? 'assets/images/avatar.jpg'
      : 'https://images.unsplash.com/photo-1683220643085-1fa0ad87a1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';
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

  save() {
    const record = this.reactiveForm.value;
    this.reference.close(record);
  }
}
