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

  route: ActivatedRoute = inject(ActivatedRoute);

  photos: Photo[] = [];

  ngOnInit(): void {
    const albumId = +this.route.snapshot.params['id'];

    this.photoService.getPhotosById(albumId)
      .then(p => this.photos = p)
      .catch(err => console.log("ERRORE RECUPERO DATA"));
  }
}
