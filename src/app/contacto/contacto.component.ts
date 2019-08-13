import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
// import { AngularFireModule} from '@angular/fire';
// import { AngularFireStorage } from '@angular/fire/storage';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams  } from '@angular/common/http';
// URLSearchParams
// import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
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
      this.sendEmail();
    }
  }


  sendEmail() {

    const url = `https://us-central1-ultra-mexico.cloudfunctions.net/httpEmail    `;
    // let params: URLSearchParams = new URLSearchParams();
    const params = new HttpParams();
    // let headers = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin', '*');

    params.set('to', 'user@example.com');
    params.set('from', 'christiantorres084@gmail.com');
    params.set('subject', 'test-email');
    params.set('content', 'Hello World');

    return this.http.post(url, params)
                    .toPromise()
                    .then( res => {
                      console.log(res);
                    })
                    .catch(err => {
                      console.log(err);
                    });

  }

}
