import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  public subHeadline: string = 'get in touch';

  public form: FormGroup;
  public messageSent: boolean = false;


  constructor(
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  public onSubmit(data) {

    if (this.form.valid) {
      this.spinner.show();

      Email.send({
        SecureToken:'3d5e4b74-41e5-47c1-8110-38c65e97a1a4',
        To : 'kontakt@kamiljarzab.pl',
        From : data.email,
        Subject : data.name,
        Body : data.message + ' <- message sent via portfolio form.',
      }).then((message) => {
          this.emailSent(message);
        }
      );
    }
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: '',
      email: ['', Validators.email],
      message: ''
    });
  }

  private emailSent(message): void {
    if (message === 'OK') {
      this.spinner.hide();
      this.messageSent = true;
    } else {
      window.alert('error occured, try again later');
    }
  }

}
