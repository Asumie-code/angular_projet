import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { forbiddenNameValidator } from '../shared/foridden-name.directive';
import { identityRevealedValidator } from '../shared/identity-revealed.directive';
import { UniqueAlterEgoValidator } from '../shared/alter-ego.directive';



@Component({
    selector: 'app-hero-form-reactive',
    templateUrl: './hero-form-reactive.component.html',
    styleUrls: ['./hero-form-reactive.component.css'],
  })
  export class HeroFormReactiveComponent implements OnInit {
    powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

    hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0] };
  
    heroForm!: FormGroup;

    constructor(private fb: FormBuilder, private alterEgoValidator: UniqueAlterEgoValidator) {}

    ngOnInit(): void {
        this.heroForm =  this.fb.group({
            name: this.fb.control(this.hero.name, {validators: [Validators.required, Validators.minLength(4), forbiddenNameValidator(/bob/i)]}),
            alterEgo: this.fb.control(this.hero.alterEgo, {asyncValidators: [this.alterEgoValidator.validate.bind(this.alterEgoValidator)], updateOn: 'blur'}), 
            power: this.fb.control(this.hero.power, {validators: Validators.required})
        }, {validators: identityRevealedValidator}) // add custom validator at the FormGroup level
    }

    get name() { return this.heroForm.get('name')!; }

    get power() { return this.heroForm.get('power')!; }
  
    get alterEgo() { return this.heroForm.get('alterEgo')!; }

  }
  