import { Component,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  sorted=false;
  title="TableData";
  userTableData:any=[];
  userData:any=[];
  search(inpt){
    // console.log(inpt.value);
     let arr=this.userData.filter( (items: any) => {
       if (items.title.match(inpt.value)) {
         return true;
       }else{
        return false;
       }
     })
     if(inpt.value!==""){
        this.userData=arr;
        console.log(this.userData.length);
     }else{
      this.userData=this.userTableData;
     }

  }
  ViewData(id){ 
    this.http.get('https://jsonplaceholder.typicode.com/todos'+"/"+id).subscribe(res=>{
      // this.tableData.push(res);
      console.log(res);
    })
    // this.userData=this.tableData;
  }
  ArrangeData(){
    // let arr=this.userData;
    if(this.sorted){
      this.userData.sort(function (a, b) {
        if (a.title< b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    }else{
      this.userData.sort(function (a, b) {
        if (a.title>b.title) {
          return -1;
        }
        if (a.title<b.title) {
          return 1;
        }
        return 0;
      });
    }
    this.sorted = !this.sorted
  };
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(res=>{
      // let data=JSON.stringify(res);
      this.userData=res;
      this.userTableData=this.userData;
      // console.log(this.userData);
    })
  }
}
