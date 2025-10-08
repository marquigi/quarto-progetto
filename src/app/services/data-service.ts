import { Injectable } from '@angular/core';
import { Album, Photo } from '../models/data';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Richiesta ajax per l'albums
  async getAlbums(): Promise<Album> {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const data: Album = await response.json();

    console.log(data);
    return data
  }

  // Richiesta ajax per lista photo
  async getPhotos(): Promise<Photo> {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos?albumId=7");
    const data: Photo = await response.json();

    console.log(data);
    return data
  }
}
