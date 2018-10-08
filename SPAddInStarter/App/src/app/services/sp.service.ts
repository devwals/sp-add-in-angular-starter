import { Injectable } from '@angular/core';
import { sp, SPRequestExecutorClient, SPRestAddIn } from "@pnp/sp-addinhelpers";
import { UtilityMethod } from "@pnp/sp";
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';
import { NgxXml2jsonService } from 'ngx-xml2json';

@Injectable({
  providedIn: 'root'
})
export class SpService {
  public addInWenUrl = this.getParameterByName("SPAppWebUrl", location.href);
  public hostWebUrl = this.getParameterByName("SPHostUrl", location.href);
  public context = sp;
  private spLoaded = 0;

  productLicense = undefined;
  productId = 'c765d60b-b380-420e-a73b-159b7d235de1';
  verificationService = 'https://verificationservice.officeapps.live.com/ova/verificationagent.svc/rest/verify';

  constructor(private http: HttpClient, private ngxXml2jsonService: NgxXml2jsonService) {
  }

  loadSP(): Promise<any> {

    if (this.spLoaded == 0) {
      return new Promise((resolve, reject) => {
        resolve(sp);
      });
    } else {
      return new Promise((resolve, reject) => {
        $.getScript(this.hostWebUrl + "/_layouts/15/SP.RequestExecutor.js").bind(this)
          .done(function (script, textStatus) {
            sp.setup({
              sp: {
                fetchClientFactory: () => {
                  return new SPRequestExecutorClient();
                }
              }
            });

            this.spLoaded = true;
            resolve(sp);

          })
          .fail(function (jqxhr, settings, exception) {
            this.spLoaded = false;
            reject(exception);
          });
      });
    }
  }

  cdWeb() {
    return sp.crossDomainWeb(this.addInWenUrl, this.hostWebUrl);
  }

  getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  getLicense(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.productLicense != undefined) {
        resolve(this.productLicense);
        return;
      }

      var method = new UtilityMethod("", "GetAppLicenseInformation");
      //ref: https://github.com/pnp/pnpjs/blob/dev/packages/sp/docs/sp-utilities-utility.md
      method.excute<string>({
        productId: this.productId
      }).then((r: any) => {
        // console.log(r);
        if (r.Items && r.Items.length > 0) {
          var licenseRequestUrl = `${this.verificationService}?token=${encodeURIComponent(r.Items[0].RawXMLLicenseToken)}`;
          var proxy = `${this.addInWenUrl}/_api/SP.WebProxy.invoke`;
          var proxyRequestData = {
            "requestInfo": {
              "__metadata": { "type": "SP.WebRequestInfo" },
              "Url": licenseRequestUrl,
              "Method": "GET",
              "Headers": {
                "results": [{
                  "__metadata": { "type": "SP.KeyValue" },
                  "Key": "Accept",
                  "Value": "application/json;odata=verbose",
                  "ValueType": "Edm.String"
                }
                ]
              }
            }
          };

          this.getCurrentWebContext().then(r => {
            // console.log(r);
            var header = {
              headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose",
                "X-RequestDigest": r.d.GetContextWebInformation.FormDigestValue
              }
            };
            this.http.post(proxy, proxyRequestData, header).subscribe(d => {
              var parser = new DOMParser();
              var xml = parser.parseFromString(d["d"].Invoke.Body, 'text/xml');
              var obj = this.ngxXml2jsonService.xmlToJson(xml);
              this.productLicense = obj;
              resolve(obj);
            },
              e => {
                reject(e);
              });
          }).catch(e => {
            console.log("Error loading context");
            reject(e);
          });
        } else {
          this.productLicense = undefined;
          resolve({});
        }
      }).catch(e => {
        reject(e);
      });

    });

  }

  getCurrentWebContext(): Promise<any> {
    var requestUrl = `${this.addInWenUrl}/_api/contextinfo`;
    var header = {
      headers: {
        "Accept": "application/json;odata=verbose",
        "Content-Type": "application/json;odata=verbose",
      }
    };

    return new Promise((resolve, reject) => {
      this.http.post(requestUrl, {}, header).subscribe(r => {
        resolve(r);
      },
        e => {
          reject(e);
        });
    });

  }

  isLicenseValid(): Promise<any> {
    return new Promise((resolve, reject) => {
      if(this.productLicense == undefined){
        this.getLicense().then(l=>{
          if(l){
            return this.isLicenseValid();
          }else{
            reject("isLicenseValid()::Failed to obtain the product license. Please contact your System Administrator for a resolution.");
          }
        });
      }else if (this.productLicense["VerifyEntitlementTokenResponse"].IsTest == "true"
        || this.productLicense["VerifyEntitlementTokenResponse"].IsValid == "true") {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  }

  getLicenseType() {
    return new Promise((resolve, reject) => {
      if(this.productLicense == undefined){
        this.getLicense().then(l=>{
          if(l){
            return this.getLicenseType();
          }else{
            reject("getLicenseType()::Failed to obtain the product license. Please contact your System Administrator for a resolution.");
          }
        });
      }else {
        resolve(this.productLicense["VerifyEntitlementTokenResponse"].EntitlementType);
      } 
    });
  }

}
