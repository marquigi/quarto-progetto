import { Component, inject, OnInit } from '@angular/core';
import { Album } from '../../models/data';
import { DataService } from '../../services/data-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-albums-list',
  imports: [RouterModule],
  templateUrl: './albums-list.html',
  styleUrl: './albums-list.css'
})
export class AlbumsList implements OnInit {

  albumsService: DataService = inject(DataService);

  albums: Album[] = [];

  ngOnInit(): void {
    this.albumsService.getAlbums()
      .then(a => this.albums = a)
      .catch(err => console.log("ERRORE RECUPERO DATI"))
  }


}
