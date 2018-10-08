import { Component, OnInit } from '@angular/core';
import { SpService } from '../../services/sp.service';

@Component({
  selector: 'lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  view: any = {};
  constructor(private spService: SpService) {
    this.spService.loadSP().then(() => {
      
      this.spService.cdWeb().lists.get().then(l => {
        this.view.lists = l.filter(v=>{return v.BaseType == 0;});
        this.view.libraries = l.filter(v=>{return v.BaseType == 1;});
      });
      
    });
  }

  ngOnInit() {

  }

}
