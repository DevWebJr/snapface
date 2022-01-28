import {Injectable} from '@angular/core';
import {FaceSnap} from "../models/face-snap.models";

@Injectable({
  providedIn: 'root'
})

export class FaceSnapsService {
  faceSnaps:FaceSnap[] = [
    {
      title: "Pennywise",
      description: "Un ami d'enfance",
      imageUrl: 'https://imgr.cineserie.com/2019/11/ca-le-scenariste-parle-des-possibles-spin-offs-sur-pennywise.jpg?imgeng=/f_jpg/cmpr_0/w_660/h_370/m_cropbox&ver=1',
      createdDate: new Date(),
      snaps: 400,
      location: 'Derry'
    },
    {
      title: "Chucky",
      description: "Une vieille connaissance",
      imageUrl: 'https://images.bfmtv.com/dPOvIMDQ4ZinodI6FOWmFSWVtlQ=/2x186:1330x933/640x0/images/Chucky-1074231.jpg',
      createdDate: new Date(),
      snaps: 510,
    },
    {
      title: "Freddy Krueger",
      description: "Un gars complètement cramé",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Freddy-freddy-krueger-33746737-500-614.jpg',
      createdDate: new Date(),
      snaps: 455,
      location: 'Elm Street'
    },
    {
      title: "Jason Voorhees",
      description: "Un mec discret",
      imageUrl: 'https://store-images.s-microsoft.com/image/apps.63438.71216420060121058.ce3ddcea-6fff-4e2d-b250-569568f21b47.8242fee4-de32-4a61-9619-9dc68ce698b5?q=90&w=480&h=270',
      createdDate: new Date(),
      snaps: 500,
      location: 'Crystal Lake'
    },
  ];
}
