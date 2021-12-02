import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tree-map',
  templateUrl: './tree-map.component.html',
  styleUrls: ['./tree-map.component.scss']
})
export class TreeMapComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router){
    this.route.params.subscribe(res => console.log(res.id));
    
  }

  ngOnInit() {
  }
  

  sendMeHome(){
    this.router.navigate(['']);
  }
}
