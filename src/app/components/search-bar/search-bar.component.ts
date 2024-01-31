import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Renderer2, inject } from '@angular/core';
import { FormControl, FormGroup ,ReactiveFormsModule} from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

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
    //console.log(name);
    this.SearchService.searchStore(name).subscribe(   
      (storeList) => { this.storeList =  storeList;
      //console.log(storeList);
      this.searchResults=true;
    }
    );
  }

  onEnter(event:Event){
    event.preventDefault();
    this.onSubmit();
  }

  selectStore(store:any){
    this.initCardInNewStore(store);

    console.log(store);
    this.clearForm();
    this.router.navigate(["stores",store.id]);
  }

  initCardInNewStore(store:any) {    
    const storedIdString = localStorage.getItem('storeId');
    if (storedIdString !== null) {
        const storedId = JSON.parse(storedIdString);
        if (storedId !== store.id) localStorage.removeItem('cartItems');
    }
    localStorage.setItem('storeId', JSON.stringify(store.id));
  }

  onSearchChange() {
      this.searchResults=false;
  }

  clearForm() {
    this.form.reset();
    this.searchResults=false;
  }

}
