import { Component } from '@angular/core';
import { EntityService } from '../../services/entity.service';
import { Entity } from '../../models/entity.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entity-form',
  templateUrl: './entity-form.component.html',
  styleUrls: ['./entity-form.component.css']
})
export class EntityFormComponent {
  entity: Entity = new Entity();

  constructor(private entityService: EntityService, private router: Router) { }

  createEntity(): void {
    this.entityService.createEntity(this.entity).subscribe(() => {
      this.router.navigate(['/entities']);
    });
  }
}
