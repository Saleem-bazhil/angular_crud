import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CrudFirstService } from '../../services/first-crud';

@Component({
  selector: 'app-crud-first',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crud-first.html',
  styleUrl: './crud-first.css'
})
export class CrudFirst implements OnInit {

  items: any[] = [];

  formData = {
    name: '',
    description: ''
  };

  selectedId: number | null = null;

  constructor(
    private crudService: CrudFirstService
  ) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.crudService.getAll()
      .subscribe({
        next: (res: any) => {
          this.items = res;
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  create() {
    this.crudService.create(this.formData)
      .subscribe({
        next: () => {
          this.formData = {
            name: '',
            description: ''
          };

          this.getAll();
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  edit(item: any) {
    this.selectedId = item.id;

    this.formData = {
      name: item.name,
      description: item.description
    };
  }

  update() {
    if (!this.selectedId) return;

    this.crudService
      .update(this.selectedId, this.formData)
      .subscribe({
        next: () => {
          this.getAll();

          this.formData = {
            name: '',
            description: ''
          };

          this.selectedId = null;
        }
      });
  }

  delete(id: number) {
    this.crudService
      .delete(id)
      .subscribe({
        next: () => {
          this.getAll();
        }
      });
  }
}
