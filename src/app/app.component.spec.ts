import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DataService } from './data.service';


describe('AppComponent', () => {
  let component: AppComponent;
  let service:DataService;
  let httpMock:HttpTestingController;
  let httpClient:HttpClient;
  let data:any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [HttpClientTestingModule, HttpClientModule],
      providers:[DataService]

    }
    ).compileComponents();
    service = TestBed.get(DataService);
    httpMock =  TestBed.get(HttpClientTestingModule);
    httpClient=TestBed.get(HttpClient);
  }));

  it('load data', () => {
    

    data = {
      "name": "countries",
      "values": [
          {
              "name": "india",
              "values": [
                  {
                      "name": "zones",
                      "values": [
                          {
                              "name": "north",
                              "values": [
                                  {
                                      "name": "states",
                                      "values": [
                                          {
                                              "name": "punjab",
                                              "value": [
                                                  {
                                                      "name": "population",
                                                      "value": "28000000"
                                                  }
                                              ]
                                          },
                                          {
                                              "name": "J&K",
                                              "value": [
                                                  {
                                                      "name": "population",
                                                      "value": "1000000"
                                                  }
                                              ]
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "name": "south",
                              "values": [
                                  {
                                      "name": "states",
                                      "values": [
                                          {
                                              "name": "tamil nadu",
                                              "value": [
                                                  {
                                                      "name": "population",
                                                      "value": "67000000"
                                                  }
                                              ]
                                          },
                                          {
                                              "name": "kerala",
                                              "value": [
                                                  {
                                                      "name": "population",
                                                      "value": "34000000"
                                                  }
                                              ]
                                          }
                                      ]
                                  }
                              ]
                          }
                      ]
                  }
              ]
          }
      ]
  };
    service.getService().subscribe((d)=>{
      expect(d).toEqual(data);
 
    });  
  
  });
    
  it('should', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    // spyOn(component, 'expandClick');
    jasmine.createSpy('expandClick').and.callThrough();
  
    let button = fixture.debugElement.nativeElement.querySelector('span');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.expandClick).toHaveBeenCalled();
      expect(button.parentElement.nextElementSibling.style.display).toEqual('block');
    });

  }));
  
});
