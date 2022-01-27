import { Component, OnInit } from '@angular/core';
import {FaceSnap} from "./models/face-snap.models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myOtherOtherSnap!: FaceSnap;

  ngOnInit(){
    this.mySnap = {
      title: "Pennywise",
      description: "Mon ami d'enfance",
      imageUrl: 'https://imgr.cineserie.com/2019/11/ca-le-scenariste-parle-des-possibles-spin-offs-sur-pennywise.jpg?imgeng=/f_jpg/cmpr_0/w_660/h_370/m_cropbox&ver=1',
      createdDate: new Date(),
      snaps: 0,
      location: 'Derry'
    };
    this.myOtherSnap = {
      title: "Chucky",
      description: "Une vieille connaissance",
      imageUrl: 'https://images.bfmtv.com/dPOvIMDQ4ZinodI6FOWmFSWVtlQ=/2x186:1330x933/640x0/images/Chucky-1074231.jpg',
      createdDate: new Date(),
      snaps: 0,
  };
    this.myOtherOtherSnap = {
      title: "Freddy Krueger",
      description: "Un gars complètement cramé.",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Freddy-freddy-krueger-33746737-500-614.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Elm Street'
  };
  }

}
