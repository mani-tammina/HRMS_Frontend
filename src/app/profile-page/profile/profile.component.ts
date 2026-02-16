import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CandidateService, Employee } from '../../services/pre-onboarding.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ]
})

export class ProfileComponent implements OnChanges {
  @Input() currentEmployee: any;

  currentCandidate$!: Observable<any>;
  currentEmployee$!: Observable<Employee | null>;
  Isedit: boolean = false;
  isAdress: boolean = false;
  IsDetails: boolean = false;
  constructor(private candidateService: CandidateService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentEmployee']?.currentValue) {
      console.log(
        '✅ ProfileComponent received employee:',
        this.currentEmployee
      );
    }
  }
  isEditDetails() {
    this.IsDetails = !this.IsDetails;
  }
  isEditForm() {
    this.Isedit = !this.Isedit;
  }
  isEditAddress() {
    this.isAdress = !this.isAdress;
  }

  onSave() {
    console.log('🚀 onSave triggered!');
    console.log('Current Employee Data:', this.currentEmployee);

    // Alert for immediate feedback to the user
    

    // Reset all edit flags
    this.Isedit = false;
    this.IsDetails = false;
    this.isAdress = false;
  }
}
