import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'package-list-component',
	templateUrl: './package-list.component.html'
})
export class PackageListComponent implements OnInit {
	public packageList = [{
	      	amount: 0,
			dpo_margin: null,
			is_available: true,
			mso_org_id: "d76f3e7a-3d78-8631-e218-8d327515b751",
			package_id: "7dcfc625-726e-85e5-c482-4a86d53eaf77",
			package_name: "Pack Two",
			packagechannels: [{
				channel_id: 650,
				id: 404,
				is_deleted: false,
				package_id: "7dcfc625-726e-85e5-c482-4a86d53eaf77",
				channellist: {
					broadcaster_name: "FTA",
					channel_amount: null,
					channel_id: 650,
					channel_quality: "SD",
					channel_type: "FTA",
					color_code: "#FFFFFF",
					content_id: "80c51a83-450f-bff9-6dc2-04257caf5f56",
					genres: "GEC",
					image_url: "https://www.livye.com/data/images/SVBC.jpeg",
					is_available: true,
					language: "Telugu",
					long_description: null,
					name: "SVBC",
					priority: 1,
					short_description: "SVBC",
					web_banner: null
				}
			}]
	    },
	    {
	      	amount: 0,
			dpo_margin: null,
			is_available: true,
			mso_org_id: "d76f3e7a-3d78-8631-e218-8d327515b751",
			package_id: "2a6af061-2ead-5328-2055-f625c7e3c8b2",
			package_name: "Pack One",
			packagechannels: [{
				channel_id: 19,
				id: 20,
				is_deleted: false,
				package_id: "2a6af061-2ead-5328-2055-f625c7e3c8b2",
				channellist: {
					broadcaster_name: "FTA",
					channel_amount: null,
					channel_id: 19,
					channel_quality: "SD",
					channel_type: "FTA",
					color_code: "#7C000A",
					content_id: "897bc4aa-4259-ca7a-88a5-8da03f8a7451",
					genres: "News",
					image_url: "https://www.livye.com/data/images/abnnetwork.jpg",
					is_available: true,
					language: "Hindi",
					long_description: null,
					name: "ABN Network",
					priority: 1,
					short_description: "ABN Network",
					web_banner: null
				}
			}]
	    }
	];
	

	public ngOnInit() {
		console.log('test');
	}
}