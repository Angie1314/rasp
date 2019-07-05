import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
};

if (isIos()) {
  this.setState({ showInstallMessage: true });
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/ngsw-worker.js').then(() => (reg: any) => {
      console.log('Successfully registered service worker', reg);
  }).catch(() => (err: any)  => {
      console.warn('Error whilst registering service worker', err);
  });
  }



