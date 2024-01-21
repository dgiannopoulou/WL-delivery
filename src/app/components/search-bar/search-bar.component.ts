import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup ,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  form!: FormGroup;

  ngOnInit() { // lifecycle
    this.setFormValues();
  }

  // form binding
  setFormValues() {
    this.form = new FormGroup({
      searchData: new FormControl("")
    });
  }

  onSubmit() {
    console.log(this.form.get("searchData")?.value);
    let name = this.form.get("searchData")?.value;
    // this.storeService.getByName(name).subscribe((productList) => {
    //   this.productList = productList
    // })
  }
}
