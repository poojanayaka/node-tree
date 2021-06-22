import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer, ViewChild, ViewChildren } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit ,AfterViewInit{
  @ViewChild('expandBtn') expandBtn:ElementRef;
  @ViewChildren('span') span: QueryList<any>;

  title = 'node-tree';
  data = {};
  constructor(private renderer: Renderer,private httpClient: HttpClient, private elementRef: ElementRef,private dataService:DataService) {
   }

  ngOnInit() {
    // this.httpClient.get("/assets/node-tree.json").subscribe(res => {
    //   console.log(res);
    //   this.data = res;
    // });
    this.dataService.getService().subscribe(res=>{
      this.data = res;
    })
  }
  ngAfterViewInit(){

  }

  ngAfterViewChecked(){
    var buttons = Array.prototype.slice.call(document.querySelectorAll('.expand-btn'));
    buttons.forEach(btn => {
      if(btn.innerText =='+')
      {
        btn.parentElement.nextElementSibling.style.display = "none";
      }else{
        btn.parentElement.nextElementSibling.style.display = "block";
      }
    });
  }

  expandAll(){
    var buttons = Array.prototype.slice.call(document.querySelectorAll('.expand-btn'));
    buttons.forEach(btn => {
        btn.parentElement.nextElementSibling.style.display = "block";
        btn.innerText ='-'
      }
    );
  }

  collapseAll(){
      var buttons = Array.prototype.slice.call(document.querySelectorAll('.expand-btn'));
      buttons.forEach(btn => {
          btn.parentElement.nextElementSibling.style.display = "none";
          btn.innerText ='+'
        }
      );
  }



   convertNumbers(value) {
    var val = Math.abs(value);
    var valString='';
    if (val >= 10000000) {
      valString = (val / 10000000).toFixed(2)+ ' crores';
    } else if (val >= 100000) {
      valString = (val / 100000).toFixed(2) + ' lakhs';
    }
    return valString;
  }


  expandClick(event) {
    if (event.currentTarget.innerText == '-') {
      event.srcElement.parentElement.nextElementSibling.style.display = "none";
      event.currentTarget.innerText = "+"
    } else {
      event.currentTarget.innerText = "-"
      event.srcElement.parentElement.nextElementSibling.style.display = "block";
    }
  }

}
