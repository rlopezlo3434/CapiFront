import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { RestServiceService } from './rest-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CapiNotification';
  respuesta:any;
  readonly VAPID_PUBLIC_KEY = "BFwIL_sqHlWsSD537e-QZfKy7SWZIN2sdaIObcyNlIc6RQjdtQQ6uhokY1_hgxgPd-t71vuO0G1hd1sGT_9ZvVM";

  constructor( private swPush: SwPush, private rest: RestServiceService){

  }

  subscribeNotifications(){
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    }).then(respuesta => {
      this.respuesta = respuesta;
    })
    .catch(err => {

    })
  }
}
