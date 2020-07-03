import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import { CreateOrgComponent } from './create/create-org.component';

@Component({
  selector: 'organization-list-component',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.less']
})
export class OrganizationListComponent implements OnInit {
  
  @Input() public isDrmUser: boolean;

  public organizations = [
     {
        "org_id":"489dc3b9-99dd-c57f-cfd5-dedfd5cc672d",
        "org_name":"Infynect Demo Operator Organization",
        "org_type":"OPERATOR_ORG",
        "org_url":"",
        "log_event_interval":0,
        "support_website":"",
        "payment_webpage":null,
        "timeout":0,
        "channel_log_time":0,
        "smtp_username":null,
        "smtp_email":null,
        "smtp_password":null,
        "smtp_host":null,
        "secure_connection":null,
        "mso_org_id":"28520dfb-168b-b3ea-2328-930594f14b42",
        "status":true,
        "phone_no":"9876543210",
        "pincode":"637001",
        "state":"Tamilnadu-TN",
        "city":"Namakkal",
        "technical_email":"test@test.com",
        "report_email":"sindhuja.chinraj@infynect.com",
        "gst_number":"33ASWED3652M1Z0",
        "invoice_contact_id":null,
        "mso_short_name":null,
        "createdAt":"2020-02-26 17:14:21",
        "updatedAt":"2020-02-26 17:14:21",
        "creditsystems":[
           {
              "credit_system":"Platform Credit System"
           }
        ]
     },
     {
        "org_id":"28520dfb-168b-b3ea-2328-930594f14b42",
        "org_name":"Infynect Demo MSO Organization",
        "org_type":"MSO_ORG",
        "org_url":"",
        "log_event_interval":0,
        "support_website":"",
        "payment_webpage":null,
        "timeout":0,
        "channel_log_time":0,
        "smtp_username":null,
        "smtp_email":null,
        "smtp_password":null,
        "smtp_host":null,
        "secure_connection":null,
        "mso_org_id":"28520dfb-168b-b3ea-2328-930594f14b42",
        "status":true,
        "phone_no":"9876543210",
        "pincode":"637001",
        "state":"Tamilnadu-TN",
        "city":"Namakkal",
        "technical_email":"test@test.com",
        "report_email":"sindhuja.chinraj@infynect.com",
        "gst_number":"33ASWED3652M1Z0",
        "invoice_contact_id":null,
        "mso_short_name":"infyn",
        "createdAt":"2020-02-26 17:12:56",
        "updatedAt":"2020-02-26 17:12:56",
        "creditsystems":[
           {
              "credit_system":"MSO Credit System"
           },
           {
              "credit_system":"Platform Credit System"
           }
        ]
     },
     {
        "org_id":"c0532779-ceb8-4845-b996-0ceafae15f0d",
        "org_name":"Infynect Labs Private Limited",
        "org_type":"SYS_ORG",
        "org_url":null,
        "log_event_interval":null,
        "support_website":null,
        "payment_webpage":null,
        "timeout":null,
        "channel_log_time":null,
        "smtp_username":null,
        "smtp_email":null,
        "smtp_password":null,
        "smtp_host":null,
        "secure_connection":null,
        "mso_org_id":null,
        "status":true,
        "phone_no":"9898989898",
        "pincode":"560095",
        "state":"Karnataka-KA",
        "city":"Bangalore",
        "technical_email":"info@infynect.com",
        "report_email":"support@infynect.com",
        "gst_number":"29AAECI6884M1ZP",
        "invoice_contact_id":null,
        "mso_short_name":null,
        "createdAt":"2020-02-26 10:06:40",
        "updatedAt":"2020-02-26 10:06:40",
        "creditsystems":[

        ]
     }
  ];
  
  public page = 1;
  public pageSize = 10;
  public collectionSize = this.organizations.length;
  public searchKey = new FormControl('');
  private organizationsCopy = [];
  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.organizationsCopy = Object.assign([], this.organizations);
    this.searchKey.valueChanges.pipe(
      debounceTime(700),
      map(text => search(text, this.organizationsCopy))
    ).subscribe((result) => {      
      this.organizations = result;
    })
  }

  openFormModal(user?: any) {
    const modalRef = this.modalService.open(CreateOrgComponent);
    modalRef.componentInstance.isDrmUser = this.isDrmUser;
    if (user) {
      modalRef.componentInstance.data = user;
    }    
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

}

function search(text: string, array: any[]) {
  return array.filter(user => {
    const key = text.toLowerCase();
    return user.org_name.toLowerCase().includes(key)
        || user.org_type.toLowerCase().includes(key)
        || user.technical_email.includes(key);
  });
}
