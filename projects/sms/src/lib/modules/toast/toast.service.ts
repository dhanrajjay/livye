import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs';

export interface ToastMessage {
  message: string;
  type: string;
}

@Injectable()
export class ToastService {
  private toastSubject = new Subject<ToastMessage>();

  toastState = this.toastSubject.asObservable();

  constructor(@Optional() @SkipSelf() prior: ToastService) {
    if (prior) {
      return prior;
    }
  }

  activate(message?: string, type?: string) {
    this.toastSubject.next(<ToastMessage>{message: message || '', type: type || 'info'});
  }
}
