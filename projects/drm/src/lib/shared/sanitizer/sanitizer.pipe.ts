import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SanitizerType } from './sanitizer.enum';

@Pipe({name: 'sanitizer'})
export class SanitizerPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  public transform(value: string, sanatizeType: SanitizerType): any {
    switch (sanatizeType) {
      case SanitizerType.HTML:
        return this.sanitizer.bypassSecurityTrustHtml(value);
      case SanitizerType.STYLE:
        return this.sanitizer.bypassSecurityTrustStyle(value);
      case SanitizerType.URL:
        return this.sanitizer.bypassSecurityTrustUrl(value);
      case SanitizerType.RESOURCE_URL:
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
      default:
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
  }
}
