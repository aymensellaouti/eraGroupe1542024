import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { FirstStandaloneComponent } from './app/standalone/first-standalone/first-standalone.component';
import { importProvidersFrom } from '@angular/core';
import { FirstComponent } from './app/components/first/first.component';
import { provideHttpClient } from '@angular/common/http';


platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZone: 'noop'
})
  .catch(err => console.error(err));


  // bootstrapApplication(FirstStandaloneComponent, {
  //   providers: [
  //     importProvidersFrom(),
  //     provideHttpClient()
  //   ]
  // })
