import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup ,ReactiveFormsModule} from '@angular/forms';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  SearchService: SearchService = inject(SearchService);
  storeList: any;
  searchResults=false;
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
    let name = this.form.get("searchData")?.value;
    console.log(name);
    this.SearchService.searchStore(name).subscribe(   
      (storeList) => { this.storeList =  storeList;
      console.log(storeList);
      this.searchResults=true;
    }
    );
  }
}
