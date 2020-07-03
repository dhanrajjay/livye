import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'create-channel-component',
  templateUrl: './create-channel.component.html'
})

export class CreateChannelComponent implements OnInit {  
  @Input() public data: any;  
  public channelListForm: FormGroup;

  constructor(
   public activeModal: NgbActiveModal,
   private formBuilder: FormBuilder
  ) {  
    this.createForm();   
  }

  public ngOnInit() {    
       
    if (this.data) {
      this.channelListForm.patchValue(this.data);
    }    
  }

  private createForm() {
    this.channelListForm = this.formBuilder.group({
      name: ['', Validators.required],
      image_url: ['', Validators.required],
      language: ['', Validators.required],
      channel_quality: ['', Validators.required],
      channel_type: ['', Validators.required],
      broadcaster_name: ['', Validators.required],
      color_code: ['#FFFFFF', Validators.required],
      short_description: ['', Validators.required],
      category: ['', Validators.required],
      long_description: '',
      web_banner: '',
      is_available: true,
    });
  }

  public submitForm() {
    this.activeModal.close(this.channelListForm.value);
  }
}