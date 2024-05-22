import { Component, OnInit } from '@angular/core';
import { AVIS } from '../avis/mock-avis';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Avis } from '../avis/avis';


@Component({
  selector: 'app-avis-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './avis-list.component.html',
  styleUrl: './avis-list.component.css'
})
export class AvisListComponent implements OnInit {

  avisList: Avis[] | undefined;

  constructor(
    private router: Router
  ) {}
  ngOnInit(): void {

    this.avisList = AVIS;
  }

}
