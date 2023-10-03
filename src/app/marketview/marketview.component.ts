import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from '../core/core.service';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-marketview',
  templateUrl: './marketview.component.html',
  styleUrls: ['./marketview.component.scss']
})
export class MarketviewComponent {

  allview:any;
  _paramid:any;

  Pivot:any;
  BC:any;
  TC:any;
  R1:any;
  R2:any;
  R3:any;
  R4:any;
  S1:any;
  S2:any;
  S3:any;
  S4:any;
  hp:any;
  lp:any;
  cp:any;
  op:any;

  constructor(
    private _empService: EmployeeService,
    private _coreService: CoreService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getviewList(this.route.snapshot.params["id"]);
    console.log(this.allview);

    // this.Pivot = (this.allview.high_price +  this.allview.low_price + this.allview.close_price) / 3;
    // this.BC = (this.allview.high_price +  this.allview.low_price) / 2;
    // this.TC = (this.Pivot - this.BC) + this.Pivot;

    // console.log(this.Pivot);
    // console.log(this.BC);
    // console.log(this.Pivot);
  }

  getviewList(id: any): void {
    this._empService.getview(id)
      .subscribe({
        next: (data) => {
          this.allview = data;
          console.log(data);

          this.op  = data.open_price;
          this.hp = data.high_price;
          this.cp  = data.close_price;
          this.lp = data.low_price;

          // this.Pivot = (parseFloat(this.hp + this.lp + this.cp) / 3).toFixed(2);
          this.Pivot = ((parseFloat(this.hp) + parseFloat(this.lp) + parseFloat(this.cp)) /3 ).toFixed(2);
           this.BC = ((parseFloat(this.hp) + parseFloat(this.lp)) / 2).toFixed(2);
           this.TC = (parseFloat(this.Pivot) - parseFloat(this.BC) + parseFloat(this.Pivot)).toFixed(2);
           this.R1 = ( (2* (parseFloat(this.Pivot)) - parseFloat(this.lp))).toFixed(2);
           this.R2 = ( parseFloat(this.Pivot) + ((parseFloat(this.hp) - parseFloat(this.lp)))).toFixed(2);
           this.R3 = (parseFloat(this.R1) + ((parseFloat(this.hp) - parseFloat(this.lp)))).toFixed(2);
           this.R4 = (parseFloat(this.R3 + ((parseFloat(this.R2) - parseFloat(this.R1))))).toFixed(2);

          this.S1 = ( (2 * ( parseFloat(this.Pivot)) - parseFloat(this.hp))).toFixed(2);
          this.S2 = (parseFloat(this.Pivot) - (parseFloat(this.hp)- parseFloat(this.lp))).toFixed(2);
          this.S3 = (parseFloat(this.S1) -  ((parseFloat(this.hp)  - parseFloat(this.lp)))).toFixed(2);
          this.S4 = (parseFloat(this.S3) - ((parseFloat(this.S1) - parseFloat(this.S2)))).toFixed(2);

          console.log( 'Open price :  ' + this.op );
          console.log( 'High price :  ' + this.hp );
          console.log( 'low price :  ' + this.lp );
          console.log( 'close price :  ' + this.cp );
          console.log( 'Pivot :  ' + this.Pivot );
          console.log( 'BC :  ' + this.BC );
          console.log( 'TC :  ' + this.TC );

          console.log( 'R1 :  ' + this.R1 );
          console.log( 'R2 :  ' + this.R2 );
          console.log( 'R3 :  ' + this.R3 );
          console.log( 'R4 :  ' + this.R4 );

        },
        error: (e) => console.error(e)
      });
  }

}
