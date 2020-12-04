import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public headline: string = 'Contact';
  public subHeadline: string = 'Get in Touch';

  public form;


  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  public onSubmit(data) {
    // Process checkout data here
    console.log(data);
    this.form.reset();

    console.warn('Your order has been submitted', data);
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      message: ''
    });
  }

}
