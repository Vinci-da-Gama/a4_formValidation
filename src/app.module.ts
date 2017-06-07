import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form.component';
import { FormDirComponent } from './Components/form-directives.component';
import { FieldModelDirective } from './Directives/form-model.Directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, SignupFormComponent, FormDirComponent, FieldModelDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
