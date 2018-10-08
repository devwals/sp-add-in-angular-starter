import { Component, OnInit } from '@angular/core';
import { SpService } from '../../services/sp.service';

@Component({
  selector: 'groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  view: any = {};
  constructor(private spService: SpService) {
    this.spService.loadSP().then(() => {
      
      this.spService.cdWeb().siteGroups.get().then(l=>{
        this.view.groups = l;
      });      
    });
   }

  ngOnInit() {
  }

}
