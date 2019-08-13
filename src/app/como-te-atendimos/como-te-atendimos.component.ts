import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams  } from '@angular/common/http';

@Component({
  selector: 'app-como-te-atendimos',
  templateUrl: './como-te-atendimos.component.html',
  styleUrls: ['./como-te-atendimos.component.css']
})
export class ComoTeAtendimosComponent implements OnInit {
  public nombre = null;
  public email = null;
  public empresa;
  public asunto = null;
  public mensaje = null;
  contactForm: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient
    // private af: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      empresa: ['', [Validators.required]],
      asunto: ['', [Validators.required]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.contactForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.contactForm);

    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    } else {
      console.log(this.contactForm.value);
      // this.sendEmail();
    }
  }


}
