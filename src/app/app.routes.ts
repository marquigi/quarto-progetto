import { Routes } from '@angular/router';
import { AlbumsList } from './components/albums-list/albums-list';
import { Home } from './components/home/home';
import { PhotoList } from './components/photo-list/photo-list';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "albums",
        component: AlbumsList
    },
    {
        path: "photos",
        component: PhotoList
    },
];
