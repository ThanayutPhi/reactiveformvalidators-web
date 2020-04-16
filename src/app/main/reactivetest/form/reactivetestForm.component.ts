import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { fuseAnimations } from '@fuse/animations';

import { Location } from '@angular/common';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { locale as english } from '../i18n/en';
import { locale as thai } from '../i18n/th';

import { ReactivetestService } from '../services/reactivetest.service';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-reactivetest-form',
  templateUrl: './reactivetestForm.component.html',
  styleUrls: ['./reactivetestForm.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class ReactivetestFormComponent implements OnInit {
  reactivetestForm: FormGroup;
  reactivetestData: any = {};

  submitted = false;
  constructor(
    private _fuseTranslationLoaderService: FuseTranslationLoaderService,
    private location: Location,
    private formBuilder: FormBuilder,
    private reactivetestService: ReactivetestService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {
    this._fuseTranslationLoaderService.loadTranslations(english, thai);
  }


  ngOnInit(): void {

    // this.reactivetestData = this.route.snapshot.data.items
    //   ? this.route.snapshot.data.items.data
    //   : {
    //     citizenId: ""
    //   };
    this.reactivetestData = {
      citizenId: "",
      phoneNumber: ""
    }

    this.reactivetestForm = this.createForm();
    // this.spinner.hide();
  }

  createForm(): FormGroup {
    let PERSONAL_CARDID_PATTERN = /^[0-9]{13,13}$/;
    let MOBILE_PATTERN = /^[0-9]{10,10}$/;
    return this.formBuilder.group({
      citizenId: [this.reactivetestData.citizenId,
      [Validators.required, Validators.minLength(13),
      Validators.maxLength(13),
      Validators.pattern(PERSONAL_CARDID_PATTERN)]],
      phoneNumber: [this.reactivetestData.phoneNumber,
      [Validators.required, Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(MOBILE_PATTERN)]]
    });
  }

  goBack() {
    this.spinner.show();
    this.location.back();
  }
  get f() { return this.reactivetestForm.controls; }
  async onSave() {
    console.log(this.reactivetestForm.value);
    this.checkForm();
    // this.submitted = true;

    // // stop here if form is invalid
    // if (this.reactivetestForm.invalid) {
    //   return;
    // }

    // alert('SUCCESS!! :-)')




    // this.spinner.show();

    // if (this.reactivetestData._id) {
    //   this.reactivetestForm.value._id = this.reactivetestData._id;
    //   this.reactivetestService
    //     .updateReactivetestData(this.reactivetestForm.value)
    //     .then(res => {
    //       // console.log(res);
    //       this.location.back();
    //     })
    //     .catch(err => {
    //       this.spinner.hide();
    //     });
    // } else {
    //   this.reactivetestService
    //     .createReactivetestData(this.reactivetestForm.value)
    //     .then(() => {
    //       this.location.back();
    //     })
    //     .catch(err => {
    //       this.spinner.hide();
    //     });
    // }
  }

  checkID(id) {
    let i = 0;
    let sum = 0;
    if (id.length != 13) return false;
    for (i = 0, sum = 0; i < 12; i++)
      sum += parseFloat(id.charAt(i)) * (13 - i); if ((11 - sum % 11) % 10 != parseFloat(id.charAt(12)))
      return false; return true;
  }

  checkForm() {
    if (!this.checkID(this.reactivetestForm.value.citizenId)) {
      console.log("ผ่าน")
      alert('รหัสประชาชนไม่ถูกต้อง');
    }
    else alert('รหัสประชาชนถูกต้อง เชิญผ่านได้');
  }

}
