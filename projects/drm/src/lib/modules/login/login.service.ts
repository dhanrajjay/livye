import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../../../lib/core';
import { Endpoints } from '../../../lib/shared/endpoints';

@Injectable()
export class LoginService {
  
  constructor(
    private httpService: HttpService
  ) { }

  public login(data): Observable<any> {
    return this.httpService.post(Endpoints.LOGIN, {}, data)
  }

  public logout(data): Observable<any> {
  	return this.httpService.put(Endpoints.LOGOUT, {}, data);
  }

}
