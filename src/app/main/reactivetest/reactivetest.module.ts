import { NgModule } from '@angular/core';
import { ReactivetestListComponent } from './list/reactivetestList.component';
import { ReactivetestFormComponent } from './form/reactivetestForm.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { AuthenGuardService } from 'app/authentication/authen-guard.service';
import { MatIconModule, MatMenuModule, MatSelectModule, MatDatepickerModule, MatFormFieldModule, MatTableModule, MatRadioModule, MatInputModule, MatListModule, MatButtonModule, MatTabsModule, MatExpansionModule, MatProgressSpinnerModule, MatTreeModule, MatSliderModule, MatToolbarModule, MatDialogModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { ReactivetestService } from './services/reactivetest.service';

const routes = [
  {
    path: "reactivetestForm/:id",
    component: ReactivetestFormComponent,
    // resolve: { items: ReactivetestService }
    // canActivate: [AuthenGuardService]
  },
  {
      path     : '**',
      component: ReactivetestListComponent,
      // resolve: { items: ReactivetestService }
      // canActivate: [AuthenGuardService]
  }
];

@NgModule({
  declarations: [
    ReactivetestListComponent, 
    ReactivetestFormComponent
  ],
  imports: [
    RouterModule.forChild(routes),

    FormsModule,
    ReactiveFormsModule,

    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatTableModule,
    MatRadioModule,
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatDialogModule,

    MatTreeModule,
    MatSliderModule,
    MatToolbarModule,

    TranslateModule,
    FuseSharedModule,
    NgxDatatableModule
  ],
  exports: [
    ReactivetestListComponent,
    ReactivetestFormComponent
  ]
})
export class ReactivetestModule { }
