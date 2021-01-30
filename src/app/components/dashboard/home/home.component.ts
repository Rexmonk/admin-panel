import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';



export interface userDataArray {
  collegePayout: string;
  disbursementDatetime: number;
  disbursmentId: string;
  emailId: string;
  fullName: string;
  leadId: string;
  leadType: string;
  loanRequired: string;
  mobile: number;
  productData: string;
  status : string;
  tenure : string;
  utr : string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


 dataSource ;
  comboControl : Array<boolean> = [];
  ELEMENT_DATA: userDataArray[];
  displayedColumns: string[] = ['leadId','leadName','collegePayout', 'disbursementDatetime','lead','loanData','productData','utr','whj'];
  perPage:string = "10";
  pageNav = {
    nextPage : false,
    prevPage : false,
    currentPage : ""
  }
  isLoading = false;
 constructor(private http: HttpService) { }
  userData: any;
  ngOnInit(): void {

  this.dataSource = new MatTableDataSource<userDataArray>(this.ELEMENT_DATA);
   
   this.getData();
  }




  getData(){
    this.isLoading = true;
    let  params = { pageSize : this.perPage ? this.perPage : 10 } 
    if(this.pageNav.currentPage){
      let getcurrentPageParams = (this.pageNav.currentPage).split("=");
      params[getcurrentPageParams[0]] = getcurrentPageParams[1];
    }
    
    this.http.getWithParams('https://crmtest.credenc.ml/v1/consultant-com2',params).subscribe(
    data => {
      this.isLoading = false;
      this.dataSource.data= data['leads'];
      this.pageNav.nextPage = data['nextPage'];
      this.pageNav.prevPage = data['prevPage'];
      console.log(data);
    },
    error =>{
      this.isLoading = false;
      console.log("in error",error);
    }
  );
  }

  perPageChanged(){

    this.getData();
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  pageNavBtn(pageNavParams){
    this.pageNav.currentPage = pageNavParams;
    this.getData();
  }

}
