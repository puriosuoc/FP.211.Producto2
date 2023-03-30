import {Component, OnInit} from '@angular/core';
import {Song} from "../song";
import {SongService} from "../song.service";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  selectedSong: Song | null = null;
  cursor = 0;
  audio: HTMLAudioElement = new Audio('');
  playing: boolean = false;

  constructor(protected songService: SongService) {}
  progress = 0;

  ngOnInit() {
    this.songService.playEvent.subscribe((song: Song) => {
      this.selectedSong = song;
      this.audio.volume = 0.3;
    });
  }

  playSound() {
    if (this.selectedSong) {
      this.audio.src = this.selectedSong.url;
      this.audio.play();
      this.updateProgress();
      this.playing = true;
    }
  }

  pauseSound() {
    this.audio.pause();
    this.playing = false;
  }
  stopSound() {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.playing = false;
  }

  updateProgress() {

    this.progress = (this.audio.currentTime / this.audio.duration * 100 || 0)
    setTimeout(() => {
      this.updateProgress();
    }, 1000)



    console.log("Progreso:" + this.audio.currentTime);
  }
  secondsToString(seconds: number): string {
    if (isNaN(seconds)) seconds = 0;

    let hour: string | number = Math.floor(seconds / 3600);
    hour = (hour < 10) ? '0' + hour : hour;
    let minute: string | number = Math.floor((seconds / 60) % 60);
    minute = (minute < 10) ? '0' + minute : minute;
    let second: string | number = Math.floor(seconds % 60);
    second = (second < 10) ? '0' + second : second;

    return `${hour}:${minute}:${second}`;
  }

}

