import { APP_BOOTSTRAP_LISTENER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataService } from './data.service';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { TreeMapComponent } from './tree-map/tree-map.component';
import { TreeStadisticsComponent } from './tree-stadistics/tree-stadistics.component';
//import { DoBootstrap } from '@angular/core';
//import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TreeMapComponent,
    TreeStadisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule
  ],
  // providers: [DataService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }