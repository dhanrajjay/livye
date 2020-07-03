import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastService } from './toast.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toast',
  templateUrl: 'toast.component.html',
  styleUrls: ['./toast.component.less'],
})
export class ToastComponent implements OnDestroy, OnInit {
  private defaults = {
    message: '',
    type: 'info'
  };  
  private toastSubscription: Subscription;
  
  constructor(    
    private toastService: ToastService) {
    this.toastSubscription = this.toastService.toastState.subscribe((toast: any) => {
      this.activate(toast.message, toast.type)
    })
  }

  activate(message = this.defaults.message, type = this.defaults.type) {
    this.openSnackBar(message, type);    
  }

  ngOnInit() {    
  }

  ngOnDestroy() {
    this.toastSubscription.unsubscribe();
  }

  openSnackBar(message: string, action: string) {    
  }
}