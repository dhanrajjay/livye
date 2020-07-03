import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'create-org-component',
  templateUrl: './create-org.component.html'
})

export class CreateOrgComponent implements OnInit {  
  @Input() public data: any;
  @Input() public isDrmUser: boolean;
  public userForm: FormGroup;

  constructor(
   public activeModal: NgbActiveModal,
   private formBuilder: FormBuilder
  ) {    
  }

  public ngOnInit() {    
    this.createForm();
    if (!this.isDrmUser) {
      this.userForm.addControl('selected_org_info', new FormControl('', Validators.required));
    } else {
      this.userForm.addControl('roles', new FormControl('', Validators.required));
    }
    if (this.data) {
      this.userForm.patchValue(this.data);
    }    
  }

  private createForm() {
    this.userForm = this.formBuilder.group({
      mail_id: ['', Validators.required],
      password: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone_number: ['', Validators.required],
      status: true
    });
  }

  public submitForm() {
    this.activeModal.close(this.userForm.value);
  }
}