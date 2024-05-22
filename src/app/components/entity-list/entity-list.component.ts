import { Component, OnInit } from '@angular/core';
import { EntityService } from '../../services/entity.service';
import { Entity } from '../../models/entity.model';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.css']
})
export class EntityListComponent implements OnInit {
  entities: Entity[] = [];

  constructor(private entityService: EntityService) { }

  ngOnInit(): void {
    this.loadEntities();
  }

  loadEntities(): void {
    this.entityService.getEntities().subscribe(data => {
      this.entities = data;
    });
  }
}
