import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { GraphqlProductsService} from '../graphql.products.service';
import { Subscription } from 'rxjs';
import { GraphqlUsersService} from '../graphql.users.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number = 0;
  btnText: string = "add an item";
  url: string = "";
  description: string = ""
  postedby: string = ""
  user: string = ""
  pass: string = ""
  token: string = ""
  goals: string[] = [];
  trees: string[] = [];
  planter: string[] = [];

  // trees = [];
  // description = [];
  // postedby = [];
  // OnClick(value) {
  //   this.url = value;
  // }


  loading!: boolean;
  private querySubscription!: Subscription;


  constructor(private _data: DataService, 
              private graphqlProductsService: GraphqlProductsService,
              private graphqlUsersService : GraphqlUsersService) { }

  ngOnInit(): void {
    this.itemCount = this.goals.length;


/*    this._data.goal.subscribe(
       res => 
            this.goals = res
    );
    this._data.changeGoal(this.goals);
*/

    this.querySubscription = this.graphqlProductsService.links("-")
      .valueChanges
      .subscribe(({ data, loading }) => {
        this.loading = loading;
        this.goals = JSON.parse(JSON.stringify(data)).links;
        console.log(JSON.stringify(this.goals))
      });

  }

  loginUser() {

    alert(this.user + " - " + this.pass);
    this.graphqlUsersService.tokenAuth(this.user, this.pass)
    .subscribe(({ data }) => {
       console.log('logged: ', JSON.stringify(data));
      // this.storageService.setSession("token", JSON.parse(JSON.stringify(data)).tokenAuth.token);
      //this.storageService.setLocal("token", JSON.parse(JSON.stringify(data)).tokenAuth.token);
      this.token =  JSON.parse(JSON.stringify(data)).tokenAuth.token;
      

      //this.loginService.showData(mydata);
      // this.router.navigate(['/']);

    }, (error) => {
       console.log('there was an error sending the query', error);
    });
  
  }  

  addItem() {
//    this.goals.push(this.goalText);
      this.goals.push(this.url);
      this.trees.push(this.description);
      this.planter.push(this.postedby);
      this.url = '';
      this.itemCount = this.goals.length;


    var mytoken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImpvbmF0YXMiLCJleHAiOjE2MzU4MDkxNjcsIm9yaWdJYXQiOjE2MzU4MDg4Njd9.ryjClFhpysIjiYm7Ry1MyIkU4jLVF_63kaSEZ0jOtQQ";
    //alert(this.description);

    this.graphqlProductsService.createLink(mytoken, "https://www.github.com", this.url)
    .subscribe(({ data }) => {
       console.log('link created :  ', data);
    }, (error) => {
       console.log('there was an error sending the query', error);
    });
  
   


    this.url = "";
    this.description = "";
    this.postedby = "";
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.url);
    this._data.changeGoal(this.description);
    this._data.changeGoal(this.postedby);
  }

  removeItem(i) {
    this.goals.splice(i,1);
    this._data.changeGoal(this.url);
  }
}