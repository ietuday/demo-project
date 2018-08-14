import {Component} from '@angular/core';
import {DebugPanelComponent} from '../debug-panel/debug-panel.component';
import { FormGroup, FormArray, FormBuilder, Validators, EmailValidator, FormControl, RadioControlValueAccessor } from '@angular/forms';
@Component({
  selector: 'order-sheet',
  // directives: [DebugPanelComponent],
  templateUrl: 'order-sheet.component.html',
  styleUrls: ['order-sheet.component.css'],
})
export class OrderSheetComponent {
  orderSheetForm: FormGroup;
  wiredRequestsControl:FormArray;
  formActive:boolean = false;
  constructor(private _formBuilder:FormBuilder) {
    this._buildForm();
  }

  // ngOnInit(){
  //   let  customerNameControl = this.orderSheetForm.find('customerName') as FormControl;
  //   customerNameControl.updateValueAndValidity('Justin');
  // }

  private _buildForm(){
    this.orderSheetForm = this._formBuilder.group({
      customerName: this._formBuilder.control(null),
      sizes: this._formBuilder.group({
        // sizeSmall:this._formBuilder.control(new RadioControlValueAccessor(false, 'small')),
        // sizeLarge:this._formBuilder.control(new RadioControlValueAccessor(false, 'large')),
      }),
      specilitySandwitch: this._formBuilder.control('The Grinder'),
      breads : this._formBuilder.group({
        // breadWheatRoll: this._formBuilder.control(new RadioControlValueAccessor(false,'wheat roll')),
        // breadWhiteRoll: this._formBuilder.control(new RadioControlValueAccessor(false,'white roll')),
        // breadSourdoughRoll: this._formBuilder.control(new RadioControlValueAccessor(false,'sourd roll')),

      }),

      meats: this._formBuilder.group({
        meatHam: this._formBuilder.control(null),
        meatTurkey: this._formBuilder.control(null),
        meatRoastBeef: this._formBuilder.control(null),
      }),
      cheeses:this._formBuilder.group({
        cheeseProvolone: this._formBuilder.control(null),
        meatTurkey:this._formBuilder.control(null),
        meatRoastBeef:this._formBuilder.control(null),
      }),
      vegessiesAndSuch:this._formBuilder.group({
        veggieLettuce: this._formBuilder.control(null),
        veggieTomato: this._formBuilder.control(null),
        veggieMusturd: this._formBuilder.control(null),
      }),
      weiredRequests:this._formBuilder.array([
        this._formBuilder.control(null)
      ]),
      otherNotes: this._formBuilder.control(null)
    });

    // this.wiredRequestsControl = this.orderSheetForm.find('weiredRequests') as FormArray;

  }

  onAddWeiredRequest(){
    this.wiredRequestsControl.push(this._formBuilder.control(null));
  }

  onRemovedWeiredRequest(index){
    this.wiredRequestsControl.removeAt(index)
  }

  onClearForm(){
    this._buildForm();
    this.formActive = true;
    setTimeout(() =>{
      this.formActive = true;
    },0);
  }
}
