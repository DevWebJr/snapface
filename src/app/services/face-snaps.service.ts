import {Injectable} from '@angular/core';
import {FaceSnap} from "../models/face-snap.models";

@Injectable({
  providedIn: 'root'
})

export class FaceSnapsService {
  faceSnaps:FaceSnap[] = [
    {
      id: 1,
      title: "Pennywise",
      description: "Un ami d'enfance",
      imageUrl: 'https://imgr.cineserie.com/2019/11/ca-le-scenariste-parle-des-possibles-spin-offs-sur-pennywise.jpg?imgeng=/f_jpg/cmpr_0/w_660/h_370/m_cropbox&ver=1',
      createdDate: new Date(),
      snaps: 400,
      location: 'Derry'
    },
    {
      id: 2,
      title: "Chucky",
      description: "Une vieille connaissance",
      imageUrl: 'https://images.bfmtv.com/dPOvIMDQ4ZinodI6FOWmFSWVtlQ=/2x186:1330x933/640x0/images/Chucky-1074231.jpg',
      createdDate: new Date(),
      snaps: 510,
    },
    {
      id: 3,
      title: "Freddy Krueger",
      description: "Un gars complètement cramé",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Freddy-freddy-krueger-33746737-500-614.jpg',
      createdDate: new Date(),
      snaps: 455,
      location: 'Elm Street'
    },
    {
      id: 4,
      title: "Jason Voorhees",
      description: "Un mec discret",
      imageUrl: 'https://store-images.s-microsoft.com/image/apps.63438.71216420060121058.ce3ddcea-6fff-4e2d-b250-569568f21b47.8242fee4-de32-4a61-9619-9dc68ce698b5?q=90&w=480&h=270',
      createdDate: new Date(),
      snaps: 500,
      location: 'Crystal Lake'
    },
    {
      id: 5,
      title: 'Pinhead',
      description: "Le clou du spectacle",
      imageUrl: 'https://www.cinechronicle.com/wp-content/uploads/2019/05/Pinhead-Hellraiser.jpg',
      createdDate: new Date(),
      snaps: 420,
    },
    {
      id: 6,
      title: 'Michael Myers',
      description: "Il aime porter un masque",
      imageUrl: 'https://img.filmsactu.net/datas/films/h/a/halloween/xl/halloween-6149890fa5fe8.jpg',
      createdDate: new Date(),
      snaps: 610,
    },
    {
      id: 7,
      title: 'Candy Man',
      description: "Il faut toujours l'appeler trois fois pour qu'il vienne",
      imageUrl: 'https://images.fanart.tv/fanart/candyman-5e682ca367080.jpg',
      createdDate: new Date(),
      snaps: 748,
      location: 'Cabrini-Green, Chicago'
    }
  ];

  getAllFaceSnaps() : FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId:number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap){
      throw Error('FaceSnap not found!');
    } else {
      return faceSnap;
    }
  }

  snapById(faceSnapId:number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
  }
}
