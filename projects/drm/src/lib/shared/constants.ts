export class Constants {
        public static readonly ROLES = {
        	dashboard:["SYS_ADMIN","ADMIN","OPERATOR_ADMIN","OPERATOR_USER","DEV"],
                users:["SYS_ADMIN","ADMIN","OPERATOR_ADMIN","OPERATOR_USER","DEV"],
                static:["SYS_ADMIN","ADMIN","CDN_ADMIN","CDN_USER","DEV"],
                ott:["SYS_ADMIN","ADMIN","CDN_ADMIN","CDN_USER","DEV"],
                stream:["SYS_ADMIN","ADMIN","CDN_ADMIN","CDN_USER","DEV"],
                admin_profile:["SYS_ADMIN","ADMIN"],
                report:["USER","DEV"],
                acl:["SYS_ADMIN","ADMIN","OPERATOR_ADMIN","OPERATOR_USER","USER","DEV"],
                nodes:["SYS_ADMIN","ADMIN","SETUP","DEV","SETUP_ADVANCE","OPERATOR_ADMIN"],
                complain:["SYS_ADMIN","ADMIN","USER","DEV"],
                profile:["SYS_ADMIN","ADMIN","ORG_ADMIN","SETUP","OPERATOR_ADMIN","OPERATOR_USER","CDN_ADMIN","CDN_USER","USER","DEV","SETUP_ADVANCE"],
                org:["SYS_ADMIN","ADMIN","DEV","SALES"],
                services:["SYS_ADMIN","ADMIN"],
                certificates:["SYS_ADMIN","ADMIN","CDN_ADMIN","CDN_USER","DEV"],
                device: ["SYS_ADMIN","ADMIN","DEV"],
                bypass:["SYS_ADMIN","ADMIN","OPERATOR_ADMIN","OPERATOR_USER"],
                installation:["SALES","SYS_ADMIN"],
                servicerequest:["SYS_ADMIN","ADMIN","SETUP","SETUP_ADVANCE"],
                vas:["SYS_ADMIN"],
                category:['SYS_ADMIN'],
                bump_whitelist:['SYS_ADMIN'],
                reports:["SYS_ADMIN","ADMIN","OPERATOR_ADMIN","SETUP","SETUP_ADVANCE"],
                remote_access:["SYS_ADMIN"]
        }
}