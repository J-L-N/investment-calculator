import { Component, signal } from '@angular/core';
import { InvestmentService } from './investment.service';
import { InvestmentInput } from './investiment-input.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {


  constructor(private investmentService: InvestmentService) {}

  resultsData = this.investmentService.resultsData;

  onCalculateInvestmentResults(data: InvestmentInput){
    this.investmentService.calculateInvestmentResults(data);
  }
}
