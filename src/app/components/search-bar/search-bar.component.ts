import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Renderer2, inject } from '@angular/core';
import { FormControl, FormGroup ,ReactiveFormsModule} from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  
  router: Router = inject(Router);
  SearchService: SearchService = inject(SearchService);
  storeList: any;
  searchResults=false;
  form!: FormGroup;

  
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.clearForm();
    }
  }

  ngOnInit() { // lifecycle
    this.renderer.listen('document', 'click', (event) => {
      this.handleClickOutside(event);
    });
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

  selectStore(store:any){
    console.log(store);
    this.clearForm();
    this.router.navigate(["stores",store.id]);
  }

  onSearchChange() {
      this.searchResults=false;
  }

  clearForm() {
    this.form.reset();
    this.searchResults=false;
  }

}
