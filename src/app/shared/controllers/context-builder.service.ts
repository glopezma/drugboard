import { Injectable } from '@angular/core';
import { Drug } from '../models/drug.model';

@Injectable({
  providedIn: 'root'
})
export class ContextBuilderService {
  NickSPI = '9673173964001';
  responseContext: any;
  prescriberContext: any;
  patientContext: any;
  medicationContext: any;
  pharmacyContext: any;
  prescriptionContext: any;

  constructor(public drug: Drug, public approved: boolean) {
    this.responseContext = this.createApproveResponse();
    this.prescriberContext = this.createPrescriberContext();
    this.patientContext = this.createPatientContext();
    this.medicationContext = this.createMedicationContext();
    this.pharmacyContext = this.createPharmacyContext();
    this.prescriptionContext = this.createPrescriptionContext();
  }

  createApproveResponse() {
    if (this.approved) {
      return {
        Approved: {
          ReasonCode: null,
          ReasonCodeValue: null,
          RxReferenceNumber: null,
          Note: null
        },
        Denied: null,
        ApprovedWithChanges: null,
        DeniedNewPrescriptionToFollow: null,
        Replace: null
      };
    }
    else {
      return {
        Denied: {
          ReasonCode: null,
          ReasonCodeValue: 'AA',
          RxReferenceNumber: this.drug.MessageID,
          Note: null
        },
        Approved: null,
        ApprovedWithChanges: null,
        DeniedNewPrescriptionToFollow: null,
        Replace: null
      };
    }
  }

  createPrescriberContext() {
    return {
      SurescriptsProviderID: this.NickSPI, // in the future this will be whoever's the user
      FirstName: this.drug.Prescriber.NonVeterinarian.Name.FirstName,
      LastName: this.drug.Prescriber.NonVeterinarian.Name.LastName,
      NPINumber: this.drug.Prescriber.NonVeterinarian.Identification.NPI,
      PhoneNumber: this.drug.Prescriber.NonVeterinarian.CommunicationNumbers.PrimaryTelephone.Number,
      PracticeAddressCity: this.drug.Prescriber.NonVeterinarian.PracticeAddress.City,
      PracticeAddressLine1: this.drug.Prescriber.NonVeterinarian.PracticeAddress.AddressLine1,
      PracticeAddressState: this.drug.Prescriber.NonVeterinarian.PracticeAddress.StateProvince,
      PracticeAddressZipCode: this.drug.Prescriber.NonVeterinarian.PracticeAddress.PostalCode
    };
  }

  createPatientContext() {
    return {
      PhoneNumber: this.drug.Patient.HumanPatient.CommunicationNumbers.PrimaryTelephone.Number,
      FirstName: this.drug.Patient.HumanPatient.Name.FirstName,
      LastName: this.drug.Patient.HumanPatient.Name.LastName,
      AccountID: this.drug.Patient.HumanPatient.Identification.PatientAccountNumber,
      DateOfBirth: new Date(this.drug.Patient.HumanPatient.DateOfBirth.Date),
      Gender: this.drug.Patient.HumanPatient.Gender,
      HomeAddressCity: this.drug.Patient.HumanPatient.Address.City,
      HomeAddressLine1: this.drug.Patient.HumanPatient.Address.AddressLine1,
      HomeAddressLine2: this.drug.Patient.HumanPatient.Address.AddressLine2,
      HomeAddressState: this.drug.Patient.HumanPatient.Address.StateProvince,
      HomeAddressZipCode: this.drug.Patient.HumanPatient.Address.PostalCode,
      MedicalRecordNumber: this.drug.Patient.HumanPatient.Identification.MedicalRecordIdentificationNumberEHR,
      PatientID: this.drug.Patient.HumanPatient.Identification.PatientAccountNumber,
      SocialSecurityNumber: this.drug.Patient.HumanPatient.Identification.SocialSecurity,
      VisitID: null
    };
  }

  createMedicationContext() {
    return {
      AllowSubstitutions: this.drug.MedicationPrescribed.AllowSubstitutions,
      DoseFrequencyInterval: this.drug.MedicationPrescribed.Sig.Instruction.TimingAndDuration.Frequency.FrequencyUnits.Text,
      DoseFrequencyIntervalUnitCode: this.drug.MedicationPrescribed.Sig.Instruction.TimingAndDuration.Frequency.FrequencyUnits.Code,
      DoseFrequencyIntervalUnitDescription: this.drug.MedicationPrescribed.Sig.Instruction.TimingAndDuration.Frequency.FrequencyUnits.Qualifier,
      DoseQuantity: this.drug.MedicationPrescribed.Sig.Instruction.DoseAdministration.DoseQuantity,
      DoseRouteCode: this.drug.MedicationPrescribed.Sig.Instruction.DoseAdministration.RouteOfAdministration.Code,
      DoseRouteDescription: this.drug.MedicationPrescribed.Sig.Instruction.DoseAdministration.RouteOfAdministration.Text,
      DoseStrength: this.drug.MedicationPrescribed.DrugCoded.Strength.StrengthValue,
      DoseStrengthFormCode: this.drug.MedicationPrescribed.DrugCoded.Strength.StrengthForm.Code,
      // DoseStrengthFormDescription: `STRONG`,
      DoseStrengthUnitOfMeasureCode: this.drug.MedicationPrescribed.DrugCoded.Strength.StrengthUnitOfMeasure.Code,
      DoseStrengthUnitOfMeasureDescription: null, // probably will need something here in the future
      DoseUnitOfMeasureCode: this.drug.MedicationPrescribed.Sig.Instruction.DoseAdministration.Dosage.DoseUnitOfMeasure.Code,
      DoseUnitOfMeasureDescription: this.drug.MedicationPrescribed.Sig.Instruction.DoseAdministration.Dosage.DoseUnitOfMeasure.Text,
      // DrugDEASchedule: EDEASchedule.ScheduleI,
      DrugDescription: this.drug.MedicationPrescribed.DrugDescription,
      DrugDoseFrequencyPRNDescription: 'prn', // this.drug.MedicationPrescribed.Sig.Instruction.TimingAndDuration.Frequency.TimingClarifyingFreeText, // best guess for what this wants
      DrugFDBID: 50,
      // ICD10Code: `icd11`,
      // ICD10Description: `stuff and things`,
      NDC: this.drug.MedicationPrescribed.DrugCoded.ProductCode.Code,
    };
  }

  createPrescriptionContext() {
    console.log(this.drug.MedicationPrescribed.Quantity.QuantityUnitOfMeasure.Code);
    if (this.approved) {
      return {
        DaysSupply: this.drug.MedicationPrescribed.DaysSupply,
        EffectiveDate: new Date(), // this will be a choosable date, but not here
        Quantity: this.drug.MedicationPrescribed.Quantity.Value,
        QuantityUnitOfMeasureCode: this.drug.MedicationPrescribed.Quantity.QuantityUnitOfMeasure.Code,
        QuantityUnitOfMeasureDescription: 'temp description', // this should belond next to quantity unit of measure in the future
        Refills: this.drug.MedicationPrescribed.NumberOfRefills // when cancel is sent, change refills to 0 (throws error if > 0)
      };
    }
    else {
      return {
        DaysSupply: this.drug.MedicationPrescribed.DaysSupply,
        EffectiveDate: new Date(), // this will be a choosable date, but not here
        Quantity: this.drug.MedicationPrescribed.Quantity.Value,
        QuantityUnitOfMeasureCode: this.drug.MedicationPrescribed.Quantity.QuantityUnitOfMeasure.Code,
        QuantityUnitOfMeasureDescription: 'temp description', // this should belond next to quantity unit of measure in the future
        Refills: 0
      };
    }
  }

  createPharmacyContext() {
    return {
      NCPDPID: this.drug.Pharmacy.Identification.NCPDPID,
      NPINumber: this.drug.Pharmacy.Identification.NPI,
      StoreAddressCity: this.drug.Pharmacy.Address.City,
      StoreAddressLine1: this.drug.Pharmacy.Address.AddressLine1,
      StoreNumber: '5', // this will need to change in the future
      StoreAddressLine2: this.drug.Pharmacy.Address.AddressLine2,
      StoreAddressState: this.drug.Pharmacy.Address.StateProvince,
      StoreAddressZipCode: this.drug.Pharmacy.Address.PostalCode,
      OrganizationName: this.drug.Pharmacy.BusinessName,
      StorePhoneNumber: this.drug.Pharmacy.CommunicationNumbers.PrimaryTelephone.Number
    };
  }

  getRxChangeResponse() {
    return {
      Response: this.responseContext,
      PrescriberContext: this.prescriberContext,
      PatientContext: this.patientContext,
      MedicationContext: this.medicationContext,
      PharmacyContext: this.pharmacyContext,
      PrescriptionContext: this.prescriptionContext,
      RelatesToMessageID: this.drug.MessageID,
      RxReferenceNumber: this.drug.MessageID
    };
  }

  getRxRenewalResponse() {
    return {
      ResponseContext: this.responseContext,
      PrescriberContext: this.prescriberContext,
      PatientContext: this.patientContext,
      MedicationContext: this.medicationContext,
      PharmacyContext: this.pharmacyContext,
      PrescriptionContext: this.prescriptionContext,
      RelatesToMessageID: this.drug.MessageID,
      RxReferenceNumber: this.drug.MessageID
    };
  }
}