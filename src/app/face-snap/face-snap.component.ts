import { Component, OnInit, Input } from '@angular/core';
import {FaceSnap} from "../models/face-snap.models";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;

  buttonText!: string;
  unclicked!: boolean;

  ngOnInit(){
    this.buttonText = "Snap !";
    this.unclicked = true;
  }

  onSnap() {
    if(this.unclicked) {
      this.unclicked=false;
      this.buttonText = "Unsnap !";
      this.faceSnap.snaps++;
    }
    else{
      this.unclicked=true;
      this.buttonText = "Snap !"
      this.faceSnap.snaps--;
    }
  }
}
