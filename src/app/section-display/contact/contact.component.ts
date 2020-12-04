import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Email } from '../../../assets/js/smtp';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public headline: string = 'Contact';
  public subHeadline: string = 'Get in Touch';

  public form;
  public messageSent: boolean = false;


  constructor(
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  public onSubmit(data) {
    // Process checkout data here
    console.log(data);
    this.spinner.show();

    Email.send({
      SecureToken:'3d5e4b74-41e5-47c1-8110-38c65e97a1a4',
      To : 'kontakt@kamiljarzab.pl',
      From : data.email,
      Subject : data.name,
      Body : data.message,
  }).then((message) => {
      console.log('message', message);
      this.spinner.hide();
      this.messageSent = true;
    }
  );

  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      message: ''
    });
  }

}
