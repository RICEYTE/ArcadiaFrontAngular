import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [
        MenuComponent,
        NgOptimizedImage
    ]
})
export class HeaderComponent {

    logoImage:any = "images/logo.jpeg"
}
