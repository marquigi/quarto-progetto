import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DataService } from '../../services/data-service';
import { Photo } from '../../models/data';

@Component({
  selector: 'app-photo-list',
  imports: [RouterModule],
  templateUrl: './photo-list.html',
  styleUrl: './photo-list.css'
})
export class PhotoList implements OnInit {

  photoService: DataService = inject(DataService);

  route: ActivatedRoute = inject(ActivatedRoute)

  photos: Photo[] = [];

  async ngOnInit(): Promise<void> {
    const albumId = Number(this.route.snapshot.paramMap.get('id')); // prendi l'id dalla route
    this.photos = await this.photoService.getPhotosById(albumId);    // carica le foto dell'album
    console.log(this.photos);                                        // controlla in console


    // const albumId = this.route.snapshot.paramMap.get("albumId")
    // console.log("albumId")

    // this.photoService.getPhotosById(albumId!)
    //   .then(photo => this.photos = photo)
    //   .catch(err => console.log(err))
  }

  // forse mi serve una variabile che mi tenga tutto getPhotosById ( Credo che mi ritorni)
  // Devo fare una funzione che mi permette di fare
}
