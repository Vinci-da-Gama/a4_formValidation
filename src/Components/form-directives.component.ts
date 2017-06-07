import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    // moduleId: module.id,
    selector: 'form-directive-component',
    template: `
    <form role="form" novalidate (ngSubmit)="onSubmit(FormDirLtv)" #FormDirLtv="ngForm">
		<div class="form-group">
			<label for="DirEmailField">Email: </label>
			<input type="email" class="form-control" name="theDirEmailField" id="DirEmailField" placeholder="Email..."  required [pattern]="regExp" [(myFieldModel)]="suEmail" #DirEmailFieldLtv = "myFieldModel" />
			<p *ngIf="DirEmailFieldLtv.invalid" class="alert alert-danger">
				Email is required.
			</p>
			<!-- <ng-template [ngIf]="EmailDirectiveFieldLtv.touched && EmailDirectiveFieldLtv.invalid && EmailDirectiveFieldLtv.errors.pattern">
				<p class="alert alert-danger">
					Email is invalid.
				</p>
			</ng-template> -->
		</div>
		<button type="submit" class="btn btn-primary" [disabled]="FormDirLtv.invalid">
			Submit
		</button>
		<button type="button" class="btn btn-warning" (click)=" suEmail = '' ">
			Reset
		</button>
	</form>
    <pre>
        email is: {{suEmail}}
    </pre>
    `,
    styles: [`
        input.myclass-valid {border: 1px solid red;}
		input.myclass-invalid { border: 1px dashed green }
    `]
})
export class FormDirComponent {

    constructor() { }

    suEmail: string = 'test@email.com';
	regExp: string = '.+@.+';

	onSubmit(form: NgForm) {
		console.log('28 -- email is: ', this.suEmail);
		form.resetForm();
	}

}