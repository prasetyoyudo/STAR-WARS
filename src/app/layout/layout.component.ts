import { Component, OnInit }  from '@angular/core';
import { LayoutService }      from './_service/layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  movieLists  : any
  isMovie     : boolean = true
  characters  : any
  log         = 1
  characterDet : any
  idPeople     : any

  constructor(
    private _Layout : LayoutService
  ) { }

  async ngOnInit(){
    try{
      this.movieLists = await this.getMovieList()
      this.characters = await this.getCharacterList(this.log)
      console.log(this.characters)
    } catch(error) {

    }
  }

  async getMovieList() {
    return new Promise((resolve, reject) => {
      this._Layout.getMovieListService()
      .subscribe(data => {
        console.log(data)
        resolve(data)
      })
    })
  }

  async clickEvent(evt : any) {
    if(evt == 'movie') {
      this.isMovie = true
    } else {
      this.isMovie = false
    }
  }

  async next() {
    this.log = this.log + 1;
    this.characters = await this.getCharacterList(this.log)
    console.log(this.characters)
  }

  async getCharacterList(log : any) {
    let i : 1
    return new Promise((resolve, reject) => {
      this._Layout.getCharacterListService(log)
      .subscribe(data => {
        console.log(data)
        resolve(data)
      })
    })
  }
 
  async getDetail(id : any) {
    console.log(id)
    this.idPeople = id.substring(29) 
    this.characterDet = await this.getCharacterDetail()

  }

  async getCharacterDetail() {
    return new Promise((resolve, reject) => {
      this._Layout.getDetailService(this.idPeople)
      .subscribe(data => {
        console.log(data)
        resolve(data)
      })
    })
  }

}