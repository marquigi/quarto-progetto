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
    const albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.photos = await this.photoService.getPhotosById(albumId);
    console.log(this.photos);

  }

}