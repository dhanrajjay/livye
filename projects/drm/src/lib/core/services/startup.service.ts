import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StartupService {

  load(): Promise<any> {
    return new Promise(resolve => {
        resolve();
    });
  }
}
