import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
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

  photos: Photo[] = [];

  ngOnInit(): void {

  }

  // forse mi serve una variabile che mi tenga tutto getPhotosById ( Credo che mi ritorni)
  // Devo fare una funzione che mi permette di fare
}
