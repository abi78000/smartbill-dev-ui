import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../../../services/commonservice.service';
import { Branch, Company } from '../../models/common-models/companyMaster';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SweetAlertService } from '../../../services/properties/sweet-alert.service';
import { MasterTableViewComponent } from '../../components/master-table-view/master-table-view.component';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-price-list-master',
  standalone: true,
  imports: [CommonModule, FormsModule, MasterTableViewComponent, SharedModule],
  templateUrl: './price-list-master.component.html',
  styleUrls: ['./price-list-master.component.css'],
})
export class PriceListMasterComponent {
 
  
}