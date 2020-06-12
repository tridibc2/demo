import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FrontService } from '../front.service';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    contactForm: FormGroup;

    public formName: string;
    public formEmail: string;
    public formPhone: number;
    public formMessage: string;

  constructor(private router: Router, private blogpostService: FrontService,
    private formBuilder: FormBuilder, private toastr: ToastrManager) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
        formName: ['', Validators.required],
        formEmail: ['', Validators.required],
        formPhone: ['', Validators.required],
        formMessage: ['']
      })
  }

  public contact() {
    let param =  {
        'name': this.contactForm.get('formName').value,
        'email': this.contactForm.get('formEmail').value,
        'phone': this.contactForm.get('formPhone').value,
        'message': this.contactForm.get('formMessage').value,
     }

      this.blogpostService.contactForm(param).subscribe(

        data => {
          console.log(data)

          this.toastr.successToastr('Your contact information is saved Susseccfully!', 'Success!');
              this.router.navigate(['/']);
        },

        error => {
          console.log(error);
          console.log(error.errorMessage);
          this.toastr.errorToastr('This is not good!', 'Oops!');
          this.router.navigate(['/']);
        })

      }

}
