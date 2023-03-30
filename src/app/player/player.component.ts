import {Component, OnInit} from '@angular/core';
import {Song} from "../song";
import {SongService} from "../song.service";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent  implements OnInit {

  selectedSong: Song | null = null;

  constructor(protected songService: SongService) {}

  ngOnInit() {
    this.songService.playEvent.subscribe((song: Song) => {
      this.selectedSong = song;
    });
  }


}
