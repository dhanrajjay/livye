import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import { CreateChannelComponent } from './create/create-channel.component';

@Component({
  selector: 'livye-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.less']
})
export class ChannelListComponent implements OnInit {
    
  public channelList = [
   {
      "name":"FAKT MARATHI",
      "channel_id":600,
      "language":"Marathi",
      "short_description":"FAKT MARATHI",
      "category":"Entertainment",
      "long_description":null,
      "web_banner":null,
      "channel_type":"FTA",
      "image_url":"https://www.livye.com/data/images/FAKTMARATHI.jpg",
      "color_code":"#FFFFFF",
      "channel_quality":"SD",
      "channel_amount":null,
      "broadcaster_name":"FTA",
      "is_available":1,
      "content_id":"7e51c5d3-0bb2-a1e4-fbda-5b6b49b02377",
      "createdAt":"2019-11-07 07:01:11",
      "updatedAt":"2019-11-07 07:01:11"
   },
   {
      "name":"E DIGITAL TUMKUR",
      "channel_id":602,
      "language":"Hindi",
      "short_description":"E DIGITAL TUMKUR",
      "category":"GEC",
      "long_description":null,
      "web_banner":null,
      "channel_type":"FTA",
      "image_url":"https://www.livye.com/data/images/EDIGITALTUMKUR.png",
      "color_code":"#FFFFFF",
      "channel_quality":"SD",
      "channel_amount":null,
      "broadcaster_name":"FTA",
      "is_available":1,
      "content_id":"ca978a17-2f31-7408-8754-c7cf6e59e1ea",
      "createdAt":"2019-11-07 07:01:11",
      "updatedAt":"2019-11-07 07:01:11"
   },
   {
      "name":"DD CHANDANA",
      "channel_id":603,
      "language":"Kannada",
      "short_description":"DD CHANDANA",
      "category":"GEC",
      "long_description":null,
      "web_banner":null,
      "channel_type":"FTA",
      "image_url":"https://www.livye.com/data/images/DDChandana.jpeg",
      "color_code":"#FFFFFF",
      "channel_quality":"SD",
      "channel_amount":null,
      "broadcaster_name":"FTA",
      "is_available":1,
      "content_id":"f11d1d48-4777-c0de-abe3-033dcd21af06",
      "createdAt":"2019-11-07 07:01:11",
      "updatedAt":"2019-11-07 07:01:11"
   }
  ];
  
  public page = 1;
  public pageSize = 10;
  public collectionSize = this.channelList.length;
  public searchKey = new FormControl('');
  private channelListCopy = [];
  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.channelListCopy = Object.assign([], this.channelList);
    this.searchKey.valueChanges.pipe(
      debounceTime(700),
      map(text => search(text, this.channelListCopy))
    ).subscribe((result) => {      
      this.channelList = result;
    })
  }

  openFormModal(channel?: any) {
    const modalRef = this.modalService.open(CreateChannelComponent, { scrollable: true });
    
    if (channel) {
      modalRef.componentInstance.data = channel;
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
    return user.name.toLowerCase().includes(key)
        || user.language.toLowerCase().includes(key);        
  });
}
