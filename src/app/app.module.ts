import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SongComponent } from './song/song.component';
import { ListComponent } from './list/list.component';
import {FormsModule} from "@angular/forms";
import { PlayerComponent } from './player/player.component';
import {SongService} from "./song.service";


@NgModule({
  declarations: [
    AppComponent,

    SongComponent,
    PlayerComponent,
    ListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    SongService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
