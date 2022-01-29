import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.models";
import {FaceSnapsService} from "../services/face-snaps.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;

  buttonText!: string;
  unclicked!: boolean;

  constructor(private faceSnapsService: FaceSnapsService,
              private router: Router) {}
  ngOnInit(){
    this.buttonText = "Snap !";
    this.unclicked = true;
  }

  onSnap() {
    if(this.unclicked) {
      this.unclicked=false;
      this.buttonText = "Unsnap !";
      this.faceSnapsService.snapById(this.faceSnap.id, 'snap');
    }
    else{
      this.unclicked=true;
      this.buttonText = "Snap !"
      this.faceSnapsService.snapById(this.faceSnap.id, 'unsnap');

    }
  }

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }
}
