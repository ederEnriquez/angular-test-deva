import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

/**
 * userr service Url param to define custom url
 */
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],

  // providers: [
  //   {provide: 'serviceUrl', useValue: 'http://custom.url.for.service'},
  // ]
})
export class ContactFormComponent implements OnInit {
  @Input()
  maxMessageLength!: number;
  @Output() onStatusFormChange = new EventEmitter();
  @Output() onSend = new EventEmitter();

  contactForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(null , [Validators.required, Validators.pattern(/^[a-z0-9]+$/i)]),
      email: new FormControl(null, [Validators.required,Validators.email]),
      phone: new FormControl(null, [Validators.required,Validators.pattern(/^\+?\d+$/i)]),
      message: new FormControl(
        null,
       [Validators.required, Validators.maxLength(this.maxMessageLength)]
      ),
    });

    this.contactForm.statusChanges.subscribe((status) => {
      if (status === 'VALID') this.onStatusFormChange.next(null);
    });
  }

  send(){
    console.log(this.contactForm)
  }
}
