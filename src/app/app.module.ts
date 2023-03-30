import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SongComponent } from './song/song.component';
import { ListComponent } from './list/list.component';
import {FormsModule} from "@angular/forms";
import { PlayerComponent } from './player/player.component';
import {SongService} from "./song.service";
import { CommonModule } from '@angular/common';


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
    FormsModule,
    CommonModule
  ],
  providers: [
    SongService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
