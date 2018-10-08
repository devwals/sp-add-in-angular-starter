import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators/takeWhile';
import { SpService } from '../../services/sp.service';
import { HttpClient } from '@angular/common/http';
import { AppCatalog } from '@pnp/sp';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy, OnInit {
  private alive = true;
  view: any = {};

  lightCard: CardSettings = {
    title: 'Light',
    iconClass: 'nb-lightbulb',
    type: 'primary',
  };
  rollerShadesCard: CardSettings = {
    title: 'Roller Shades',
    iconClass: 'nb-roller-shades',
    type: 'success',
  };
  wirelessAudioCard: CardSettings = {
    title: 'Wireless Audio',
    iconClass: 'nb-audio',
    type: 'info',
  };
  coffeeMakerCard: CardSettings = {
    title: 'Coffee Maker',
    iconClass: 'nb-coffee-maker',
    type: 'warning',
  };

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    this.lightCard,
    this.rollerShadesCard,
    this.wirelessAudioCard,
    this.coffeeMakerCard,
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
  } = {
      default: this.commonStatusCardsSet,
      cosmic: this.commonStatusCardsSet,
      corporate: [
        {
          ...this.lightCard,
          type: 'warning',
        },
        {
          ...this.rollerShadesCard,
          type: 'primary',
        },
        {
          ...this.wirelessAudioCard,
          type: 'danger',
        },
        {
          ...this.coffeeMakerCard,
          type: 'secondary',
        },
      ],
    };

  constructor(private http: HttpClient, private themeService: NbThemeService, private spService: SpService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
      });

    this.spService.loadSP().then(() => {
      this.spService.cdWeb().get().then((w) => {
        this.view.web = w;
        // console.log("Web: {0}", JSON.stringify(w,null,4));
      });
      this.spService.cdWeb().webinfos.get().then(l => {
        this.view.webinfos = l;
      });

      this.spService.getLicense().then(r => {
        console.log(r);
        this.view.license = { allProperties: r };
        this.spService.getLicenseType().then(r1 => {
          this.view.license.type = r1;
        });
      }).catch(e => {
        console.log("Error loading license!");
        console.log(e);
      });



    });
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.alive = false;
  }

}
