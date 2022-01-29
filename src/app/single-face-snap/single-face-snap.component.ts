import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.models";
import {FaceSnapsService} from "../services/face-snaps.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;

  buttonText!: string;
  unclicked!: boolean;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) {}

  ngOnInit(){
    this.buttonText = "Snap !";
    this.unclicked = true;
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
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
}
