# SharePoint Add-in Angular Starter Template
By [Devwals](https://devwals.com)

An Angular based SharePoint hosted Add-in template with some REST and PnP examples. 
This template uses [ngx admin starter kit](https://github.com/akveo/ngx-admin/tree/starter-kit) by Akveo.
ngx-admin is an admin template based Angular 6+, Bootstrap 4 and Nebular. 

Refer to the below links for more information SharePoint cross-domain REST and PnP:
- [Complete basic operations using SharePoint REST endpoints
](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/complete-basic-operations-using-sharepoint-rest-endpoints)
- [SharePoint Patterns & Practises](https://github.com/pnp/pnpjs)

## What does the solution include
- Bootstrap 4 template
- Angular 6+ 
- Nebular
- SharePoint PnP for the cross domain queries
- Add-in license checks

## Build Steps:
- Open the solution in Visual Studio
- Click on the project file and in the properties pane change the deployment url to point to your SharePoint development site
- Build the solution
- Run "npm install" in sp-add-in-angular-starter\SPAddInStarter\App 
- Run "ng build"
- Deploy the Visual Studio solution to your SharePoint development site
- After deployment finishes, a prompt appears in the default browser to Trust the App
- Trust it and enjoy adding more features :)
