import { Injectable } from '@angular/core';

import { SwUpdate } from '@angular/service-worker';


@Injectable({
  providedIn: 'root'
})
export class PwaserviceService {
promptEvent;

  constructor() {
    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
    });
  }
}
