import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {

  
  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''], 
    address: this.fb.group({
      street: [''], 
      city: [''], 
      state: [''], 
      zip: ['']
    }),
  })

    constructor(private fb: FormBuilder) {}

    updateProfile() {
      this.profileForm.patchValue({
        firstName: 'Nancy',
        address: {
          street: '123 Drew Street'
        }
      });
    }

    onSubmit() {
      // TODO: Use EventEmitter with form value
      console.warn(this.profileForm.value);
    }
}
