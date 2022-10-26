import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  saving: boolean = false;
  loan: boolean = false;
  investment: boolean = false;
  dashboard: boolean = false;
  expandButtonSidenavSaving: boolean = false;
  expandButtonSidenavLoan: boolean = false;
  expandButtonSidenavInvestment: boolean = false;
  expandButtonSidenavdashboard: boolean = false;
  sidebar: boolean = true;
  moode: string = "side";
  navIconDown: string = "keyboard_arrow_down"
  navIconRight: string = "keyboard_arrow_right"

  searchInput: string = ""

  ngOnInit(): void {
  }

  showSaving(){
    this.saving = !this.saving
    this.expandButtonSidenavSaving = !this.expandButtonSidenavSaving
  }

  showLoan(){
    this.loan = !this.loan
    this.expandButtonSidenavLoan = !this.expandButtonSidenavLoan
  }

  showInvestment(){
    this.investment = !this.investment
    this.expandButtonSidenavInvestment = !this.expandButtonSidenavInvestment
  }

  showDashboard(){
    this.dashboard = !this.dashboard
    this.expandButtonSidenavdashboard = !this.expandButtonSidenavdashboard
  }

  hideSidebar() {
    this.sidebar = !this.sidebar
    console.log("toggled")
  }
  

}
