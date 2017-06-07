import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'signup-form',
	template: `
    <form role="form" novalidate (ngSubmit)="onSubmit(FormLtv)" #FormLtv="ngForm">
		<div class="form-group">
			<label for="EmailField">Email: </label>
			<input type="email" class="form-control" name="theEmailField" id="EmailField" 
			[(ngModel)]="suEmail" placeholder="Email..." required [pattern]="regExp" #EmailFieldLtv = "ngModel" />
			<p *ngIf="EmailFieldLtv.touched && EmailFieldLtv.invalid && EmailFieldLtv.errors.required" class="alert alert-danger">
				Email is required.
			</p>
			<ng-template [ngIf]="EmailFieldLtv.touched && EmailFieldLtv.invalid && EmailFieldLtv.errors.pattern">
				<p class="alert alert-danger">
					Email is invalid.
				</p>
			</ng-template>
		</div>
		<div class="form-group">
			<label for="PasswordField">Password: </label>
			<input type="password" class="form-control" name="thePasswordField" id="PasswordField" 
			[(ngModel)]="suPassword" placeholder="Password..." required #PasswordFieldLtv = "ngModel" />
			<ng-template [ngIf]="PasswordFieldLtv.touched && PasswordFieldLtv.invalid && PasswordFieldLtv.errors.required">
				<p class="alert alert-danger">
					Password is required.
				</p>
			</ng-template>
		</div>
		<button type="submit" class="btn btn-primary" [disabled]="FormLtv.invalid">
			Submit
		</button>
	</form>
	<br />
	<form-directive-component></form-directive-component>
  `,
	styles: [
		`input.ng-dirty.ng-invalid {border: 1px solid red;}
		input.ng-touched.ng-valid { border: 1px dashed green }`
	]
})
export class SignupFormComponent {
	suEmail: string = '';
	regExp: string = '.+@.+';
	suPassword: string = '';

	onSubmit(form: NgForm) {
		console.log('28 -- email is: ', this.suEmail);
		form.resetForm();
	}
}
