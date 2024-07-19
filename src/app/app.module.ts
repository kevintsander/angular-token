import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AngularTokenModule } from '../../projects/angular-token/src/public_api';

import { AppComponent } from './app.component';
import { ExampleModule } from './example/example.module';
import { RestrictedModule } from './restricted/restricted.module';
import { routes } from './app.routes';
import { fakeBackendProvider } from './fake-backend';

@NgModule({ declarations: [AppComponent],
    bootstrap: [AppComponent], imports: [routes,
        BrowserModule,
        ExampleModule,
        RestrictedModule,
        AngularTokenModule.forRoot({
            // Change to your local dev environment example: 'http://localhost:3000'
            apiBase: 'http://localhost:3000',
        }),
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatToolbarModule], providers: [
        fakeBackendProvider,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
