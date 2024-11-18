import { Component, Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
//Define Component
@Component({

/*
Template Structure:
  Container Div
    Form Element
      Email Input Group
        Label
        Input Field
        Error Messages Section
      Submit Button
*/
})


/*
  Class Structure:
    Properties:

    Constructor:
      FormBuilder
      Create form group with email field
      Validators

    Methods:
      CheckFieldValidity:
        get field
        return conditional

      Function to handleSubmit():
        If Valid
          log form data
          show success message
          clear form after submission.
 */

/*
  Validation Rules:
    Email Field:
      Required Validation
      Email format Validation
      Show errors conditional logic
        if Valid
        else invalid
*/
