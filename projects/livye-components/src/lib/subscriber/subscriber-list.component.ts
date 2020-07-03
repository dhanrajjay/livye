import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'subscriber-list-component',
  templateUrl: './subscriber-list.component.html'
})

export class SubscriberListComponent implements OnInit {

  @Input() public isDrmUser: boolean;

  public subscriberList = [];
  private drmSubscriberList = [
    {
        "customer_id":"cdbc7190-6428-11ea-9bef-89db73ae56c2",
        "activation_code":22304742,
        "language":[
           "Assamese",
           "Bangla",
           "English",
           "Gujarathi",
           "Hindi",
           "Kannada",
           "Malayalam",
           "Marathi",
           "Odia",
           "Punjabi",
           "Tamil",
           "Telugu",
           "Urdu"
        ],
        "username":"vasanthapriya@gmail.com",
        "email":"vasanthapriya@gmail.com",
        "token":null,
        "installation_state":"Karnataka",
        "installation_city":"Bangalore",
        "account_lock":"Disable",
        "mac_address":"01:01:01:01:10:10",
        "stb_type":"MCBS CH4000",
        "createdAt":"2020-03-12 11:44:00",
        "updatedAt":"2020-04-06 19:29:00"
     },
     {
        "customer_id":"cdbcbfb0-6428-11ea-9bef-89db73ae56c2",
        "activation_code":96356394,
        "language":[
           "Assamese",
           "Bangla",
           "English",
           "Gujarathi",
           "Hindi",
           "Kannada",
           "Malayalam",
           "Marathi",
           "Odia",
           "Punjabi",
           "Tamil",
           "Telugu",
           "Urdu"
        ],
        "username":"vasanthi@gmail.com",
        "email":"vasanthi@gmail.com",
        "token":null,
        "installation_state":"Karnataka",
        "installation_city":"Bangalore",
        "account_lock":"Disable",
        "mac_address":"12:21:12:12:21:12",
        "stb_type":"MCBS CH4000",
        "createdAt":"2020-03-12 11:43:44",
        "updatedAt":"2020-04-06 19:29:00"
     },
     {
        "customer_id":"cdbcbfb1-6428-11ea-9bef-89db73ae56c2",
        "activation_code":66045198,
        "language":[
           "Assamese",
           "Bangla",
           "English",
           "Gujarathi",
           "Hindi",
           "Kannada",
           "Malayalam",
           "Marathi",
           "Odia",
           "Punjabi",
           "Tamil",
           "Telugu",
           "Urdu"
        ],
        "username":"tamil@gmail.com",
        "email":"tamil@gmail.com",
        "token":null,
        "installation_state":"Maharashtra",
        "installation_city":"Wardha",
        "account_lock":"Disable",
        "mac_address":"15:15:51:51:41:41",
        "stb_type":"MCBS CH4000",
        "createdAt":"2020-03-12 11:43:32",
        "updatedAt":"2020-04-06 19:29:00"
     },
     {
        "customer_id":"e991ff80-5dd8-11ea-9bef-89db73ae56c2",
        "activation_code":32259809,
        "language":[
           "Assamese",
           "Bangla",
           "English",
           "Gujarathi",
           "Hindi",
           "Kannada",
           "Malayalam",
           "Marathi",
           "Odia",
           "Punjabi",
           "Tamil",
           "Telugu",
           "Urdu"
        ],
        "username":"richard@mail.com",
        "email":"richard@mail.com",
        "token":null,
        "installation_state":"Delhi",
        "installation_city":"Charkop",
        "account_lock":"Disable",
        "mac_address":"15:65:89:65:14:15",
        "stb_type":"MCBS CH4000",
        "createdAt":"2020-03-04 10:21:43",
        "updatedAt":"2020-04-06 19:29:00"
     },
     {
        "customer_id":"e991ff81-5dd8-11ea-9bef-89db73ae56c2",
        "activation_code":93340303,
        "language":[
           "Assamese",
           "Bangla",
           "English",
           "Gujarathi",
           "Hindi",
           "Kannada",
           "Malayalam",
           "Marathi",
           "Odia",
           "Punjabi",
           "Tamil",
           "Telugu",
           "Urdu"
        ],
        "username":"balaji@mail.com",
        "email":"balaji@mail.com",
        "token":null,
        "installation_state":"Delhi",
        "installation_city":"Mumbai",
        "account_lock":"Disable",
        "mac_address":"98:78:85:45:48:47",
        "stb_type":"MCBS CH4000",
        "createdAt":"2020-03-04 10:21:29",
        "updatedAt":"2020-04-06 19:29:00"
     },
     {
        "customer_id":"e991ff82-5dd8-11ea-9bef-89db73ae56c2",
        "activation_code":14574126,
        "language":[
           "Assamese",
           "Bangla",
           "English",
           "Gujarathi",
           "Hindi",
           "Kannada",
           "Malayalam",
           "Marathi",
           "Odia",
           "Punjabi",
           "Tamil",
           "Telugu",
           "Urdu"
        ],
        "username":"shree@gmail.com",
        "email":"shree@gmail.com",
        "token":null,
        "installation_state":"Delhi",
        "installation_city":"Delhi",
        "account_lock":"Disable",
        "mac_address":"",
        "stb_type":"MCBS CH4000",
        "createdAt":"2020-03-04 10:21:18",
        "updatedAt":"2020-04-06 19:29:00"
     },
     {
        "customer_id":"e991ff83-5dd8-11ea-9bef-89db73ae56c2",
        "activation_code":19960607,
        "language":[
           "Assamese",
           "Bangla",
           "English",
           "Gujarathi",
           "Hindi",
           "Kannada",
           "Malayalam",
           "Marathi",
           "Odia",
           "Punjabi",
           "Tamil",
           "Telugu",
           "Urdu"
        ],
        "username":"ruba@mail.com",
        "email":"ruba@mail.com",
        "token":null,
        "installation_state":"Tamilnadu",
        "installation_city":"Namakkal",
        "account_lock":"Disable",
        "mac_address":"12:12:12:15:14:12",
        "stb_type":"MCBS CH4000",
        "createdAt":"2020-03-04 10:21:09",
        "updatedAt":"2020-04-06 19:29:00"
     }
  ];
  private smsSubscriberList = [
    {
        "user_id":"bc94e73a-6ef9-4e8c-fff6-2bd646276aaa",
        "customer_id":"76065f60-6428-11ea-a2c5-6726caa3835f",
        "org_id":"489dc3b9-99dd-c57f-cfd5-dedfd5cc672d",
        "activation_code":96356394,
        "customer_firstname":"Vasanthi",
        "customer_lastname":"",
        "language":[
           "Assamese",
           "Bangla",
           "English",
           "Gujarathi",
           "Hindi",
           "Kannada",
           "Malayalam",
           "Marathi",
           "Odia",
           "Punjabi",
           "Tamil",
           "Telugu",
           "Urdu"
        ],
        "billing_address":"74",
        "mac_address":"12:21:12:12:21:12",
        "stb_type":"MCBS CH4000",
        "billing_city":"Bangalore",
        "billing_pincode":"521045",
        "phone_number":"8425896541",
        "username":"vasanthi@gmail.com",
        "email":"vasanthi@gmail.com",
        "password":null,
        "activity_time_out":0,
        "sale_mac_address":"undefined",
        "get_msg":"Enable",
        "receive_ads":"Enable",
        "show_adult_content":"Disable",
        "account_lock":"Disable",
        "timezone":"(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi",
        "token":null,
        "billing_state":"Karnataka",
        "installation_address":"74",
        "installation_city":"Bangalore",
        "installation_pincode":"521045",
        "installation_state":"Karnataka",
        "landline_number":null,
        "createdAt":"2020-03-12 11:42:32",
        "updatedAt":"2020-03-12 11:42:32",
        "orgname":"Infynect Demo Operator Organization"
     },
     {
        "user_id":"bc94e73a-6ef9-4e8c-fff6-2bd646276aaa",
        "customer_id":"55fec1d0-6428-11ea-a2c5-6726caa3835f",
        "org_id":"489dc3b9-99dd-c57f-cfd5-dedfd5cc672d",
        "activation_code":22304742,
        "customer_firstname":"Vasantha Priya",
        "customer_lastname":"",
        "language":[
           "Assamese",
           "Bangla",
           "English",
           "Gujarathi",
           "Hindi",
           "Kannada",
           "Malayalam",
           "Marathi",
           "Odia",
           "Punjabi",
           "Tamil",
           "Telugu",
           "Urdu"
        ],
        "billing_address":"43",
        "mac_address":"01:01:01:01:10:10",
        "stb_type":"MCBS CH4000",
        "billing_city":"Bangalore",
        "billing_pincode":"524102",
        "phone_number":"9874558258",
        "username":"vasanthapriya@gmail.com",
        "email":"vasanthapriya@gmail.com",
        "password":null,
        "activity_time_out":0,
        "sale_mac_address":"undefined",
        "get_msg":"Enable",
        "receive_ads":"Enable",
        "show_adult_content":"Disable",
        "account_lock":"Disable",
        "timezone":"(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi",
        "token":null,
        "billing_state":"Karnataka",
        "installation_address":"43",
        "installation_city":"Bangalore",
        "installation_pincode":"524102",
        "installation_state":"Karnataka",
        "landline_number":null,
        "createdAt":"2020-03-12 11:41:39",
        "updatedAt":"2020-03-12 11:41:39",
        "orgname":"Infynect Demo Operator Organization"
     },
     {
        "user_id":"bc94e73a-6ef9-4e8c-fff6-2bd646276aaa",
        "customer_id":"31616f80-6428-11ea-a2c5-6726caa3835f",
        "org_id":"489dc3b9-99dd-c57f-cfd5-dedfd5cc672d",
        "activation_code":66045198,
        "customer_firstname":"Tamil",
        "customer_lastname":"",
        "language":[
           "Assamese",
           "Bangla",
           "English",
           "Gujarathi",
           "Hindi",
           "Kannada",
           "Malayalam",
           "Marathi",
           "Odia",
           "Punjabi",
           "Tamil",
           "Telugu",
           "Urdu"
        ],
        "billing_address":"46,New city",
        "mac_address":"15:15:51:51:41:41",
        "stb_type":"MCBS CH4000",
        "billing_city":"Wardha",
        "billing_pincode":"435210",
        "phone_number":"8428131478",
        "username":"tamil@gmail.com",
        "email":"tamil@gmail.com",
        "password":null,
        "activity_time_out":0,
        "sale_mac_address":"undefined",
        "get_msg":"Enable",
        "receive_ads":"Enable",
        "show_adult_content":"Disable",
        "account_lock":"Disable",
        "timezone":"(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi",
        "token":null,
        "billing_state":"Maharashtra",
        "installation_address":"46,New city",
        "installation_city":"Wardha",
        "installation_pincode":"435210",
        "installation_state":"Maharashtra",
        "landline_number":null,
        "createdAt":"2020-03-12 11:40:37",
        "updatedAt":"2020-03-12 11:40:37",
        "orgname":"Infynect Demo Operator Organization"
     },
     {
        "user_id":"bc94e73a-6ef9-4e8c-fff6-2bd646276aaa",
        "customer_id":"f33d72a0-5dd1-11ea-b936-1556dc150c69",
        "org_id":"489dc3b9-99dd-c57f-cfd5-dedfd5cc672d",
        "activation_code":89006685,
        "customer_firstname":"Ashok",
        "customer_lastname":"S",
        "language":[
           "Assamese",
           "Bangla",
           "English",
           "Gujarathi",
           "Hindi",
           "Kannada",
           "Malayalam",
           "Marathi",
           "Odia",
           "Punjabi",
           "Tamil",
           "Telugu",
           "Urdu"
        ],
        "billing_address":"45-A",
        "mac_address":"75:45:15:17:45:78",
        "stb_type":"MCBS CH4000",
        "billing_city":"Malleswaram",
        "billing_pincode":"530068",
        "phone_number":"8541258963",
        "username":"ashok@gmail.com",
        "email":"ashok@gmail.com",
        "password":null,
        "activity_time_out":0,
        "sale_mac_address":"undefined",
        "get_msg":"Enable",
        "receive_ads":"Enable",
        "show_adult_content":"Disable",
        "account_lock":"Disable",
        "timezone":"(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi",
        "token":null,
        "billing_state":"Karnataka",
        "installation_address":"45-A",
        "installation_city":"Malleswaram",
        "installation_pincode":"530068",
        "installation_state":"Karnataka",
        "landline_number":null,
        "createdAt":"2020-03-04 10:08:09",
        "updatedAt":"2020-03-04 13:15:10",
        "orgname":"Infynect Demo Operator Organization"
     },
     {
        "user_id":"bc94e73a-6ef9-4e8c-fff6-2bd646276aaa",
        "customer_id":"a1cb6170-5dd1-11ea-b936-1556dc150c69",
        "org_id":"489dc3b9-99dd-c57f-cfd5-dedfd5cc672d",
        "activation_code":10998433,
        "customer_firstname":"Amirnath",
        "customer_lastname":"",
        "language":[
           "Assamese",
           "Bangla",
           "English",
           "Gujarathi",
           "Hindi",
           "Kannada",
           "Malayalam",
           "Marathi",
           "Odia",
           "Punjabi",
           "Tamil",
           "Telugu",
           "Urdu"
        ],
        "billing_address":"78,New Corner",
        "mac_address":"95:02:76:25:12:45",
        "stb_type":"MCBS CH4000",
        "billing_city":"Malleswaram",
        "billing_pincode":"530068",
        "phone_number":"9876549876",
        "username":"amirnath@gmail.com",
        "email":"amirnath@gmail.com",
        "password":null,
        "activity_time_out":0,
        "sale_mac_address":"undefined",
        "get_msg":"Enable",
        "receive_ads":"Enable",
        "show_adult_content":"Disable",
        "account_lock":"Disable",
        "timezone":"(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi",
        "token":null,
        "billing_state":"Karnataka",
        "installation_address":"78,New Corner",
        "installation_city":"Malleswaram",
        "installation_pincode":"530068",
        "installation_state":"Karnataka",
        "landline_number":null,
        "createdAt":"2020-03-04 10:05:53",
        "updatedAt":"2020-03-04 10:05:53",
        "orgname":"Infynect Demo Operator Organization"
     },
     {
        "user_id":"bc94e73a-6ef9-4e8c-fff6-2bd646276aaa",
        "customer_id":"6de0ab90-5dd1-11ea-b936-1556dc150c69",
        "org_id":"489dc3b9-99dd-c57f-cfd5-dedfd5cc672d",
        "activation_code":75347030,
        "customer_firstname":"Abi",
        "customer_lastname":"",
        "language":[
           "Assamese",
           "Bangla",
           "English",
           "Gujarathi",
           "Hindi",
           "Kannada",
           "Malayalam",
           "Marathi",
           "Odia",
           "Punjabi",
           "Tamil",
           "Telugu",
           "Urdu"
        ],
        "billing_address":"78",
        "mac_address":"45:45:45:47:48:45",
        "stb_type":"MCBS CH4000",
        "billing_city":"Bangalore",
        "billing_pincode":"530068",
        "phone_number":"7896541258",
        "username":"abi@gmail.com",
        "email":"abi@gmail.com",
        "password":null,
        "activity_time_out":0,
        "sale_mac_address":"undefined",
        "get_msg":"Enable",
        "receive_ads":"Enable",
        "show_adult_content":"Disable",
        "account_lock":"Disable",
        "timezone":"(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi",
        "token":null,
        "billing_state":"Karnataka",
        "installation_address":"78",
        "installation_city":"Bangalore",
        "installation_pincode":"530068",
        "installation_state":"Karnataka",
        "landline_number":null,
        "createdAt":"2020-03-04 10:04:26",
        "updatedAt":"2020-03-04 10:04:26",
        "orgname":"Infynect Demo Operator Organization"
     }
  ];
  public page = 1;
  public pageSize = 10;
  public collectionSize = 0;
  public searchKey = new FormControl('');
  public subscriberListCopy = [];

  public ngOnInit() {
    this.subscriberList = this.isDrmUser ? this.drmSubscriberList : this.smsSubscriberList;
    this.collectionSize = this.subscriberList.length;
    this.subscriberListCopy = Object.assign([], this.subscriberList);
    this.searchKey.valueChanges.pipe(
      debounceTime(700),
      map(text => search(text, this.subscriberListCopy))
    ).subscribe((result) => {      
      this.subscriberList = result;
    })
  }
}

function search(text: string, array: any[]) {
  return array.filter(user => {
    const key = text.toLowerCase();
    return user.email.includes(key);
  });
}