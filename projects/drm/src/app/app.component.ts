import { Component, OnInit } from '@angular/core';
import { ToastService } from '../lib/modules/toast/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  constructor(
  	private toastService: ToastService
  ) {  	
  }

  title = 'app';

  public ngOnInit(): void {
  	// this.toastService.activate('test', 'danger');
  }
}
