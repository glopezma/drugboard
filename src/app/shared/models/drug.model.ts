export interface Identification {
    MedicalRecordIdentificationNumberEHR: string;
    PatientAccountNumber: string;
    SocialSecurity: string;
}

export interface Name {
    LastName: string;
    MiddleName?: any;
    FirstName: string;
    Suffix?: any;S
    Prefix?: any;
}

export interface DateOfBirth {
    Date: Date;
    DateValue: string;
    DateTime?: any;
    DateTimeValue?: any;
}

export interface Address {
    AddressLine1: string;
    AddressLine2?: any;
    City: string;
    StateProvince: string;
    PostalCode: string;
    CountryCode: string;
}

export interface PrimaryTelephone {
    Number: string;
    Extension?: any;
    SupportsSMS: boolean;
    SupportsSMSValue: string;
}

export interface CommunicationNumbers {
    PrimaryTelephone: PrimaryTelephone;
    HomeTelephone?: any;
    WorkTelephone?: any;
}

export interface HumanPatient {
    Identification: Identification;
    Name: Name;
    FormerName?: any;
    Gender: number;
    GenderValue: string;
    DateOfBirth: DateOfBirth;
    Address: Address;
    CommunicationNumbers: CommunicationNumbers;
    PatientLocation?: any;
}

export interface Patient {
    HumanPatient: HumanPatient;
}

export interface Identification2 {
    NCPDPID: string;
    NPI: string;
    StateLicenseNumber: string;
    DEANumber: string;
    HealthIndustryNumber?: any;
}

export interface Address2 {
    AddressLine1: string;
    AddressLine2?: any;
    City: string;
    StateProvince: string;
    PostalCode: string;
    CountryCode: string;
}

export interface PrimaryTelephone2 {
    Number: string;
    Extension?: any;
    SupportsSMS: boolean;
    SupportsSMSValue: string;
}

export interface CommunicationNumbers2 {
    PrimaryTelephone: PrimaryTelephone2;
    HomeTelephone?: any;
    WorkTelephone?: any;
}

export interface Pharmacy {
    Identification: Identification2;
    Specialty?: any;
    Pharmacist?: any;
    BusinessName: string;
    Address: Address2;
    CommunicationNumbers: CommunicationNumbers2;
}

export interface Identification3 {
    MedicareNumber: string;
    MedicaidNumber: string;
    CertificateToPrescribe: string;
    Data2000WaiverID?: any;
    StateControlSubstanceNumber?: any;
    UPIN?: any;
    StateLicenseNumber: string;
    DEANumber: string;
    NPI: string;
}

export interface Name2 {
    LastName: string;
    MiddleName: string;
    FirstName: string;
    Suffix: string;
    Prefix?: any;
}

export interface FormerName {
    LastName: string;
    MiddleName: string;
    FirstName: string;
    Suffix?: any;
    Prefix?: any;
}

export interface PracticeAddress {
    AddressLine1: string;
    AddressLine2?: any;
    City: string;
    StateProvince: string;
    PostalCode: string;
    CountryCode: string;
}

export interface PrimaryTelephone3 {
    Number: string;
    Extension?: any;
    SupportsSMS: boolean;
    SupportsSMSValue: string;
}

export interface HomeTelephone {
    Number: string;
    Extension?: any;
    SupportsSMS: boolean;
    SupportsSMSValue: string;
}

export interface CommunicationNumbers3 {
    PrimaryTelephone: PrimaryTelephone3;
    HomeTelephone: HomeTelephone;
    WorkTelephone?: any;
}

export interface NonVeterinarian {
    Identification: Identification3;
    Specialty: string;
    Name: Name2;
    FormerName: FormerName;
    PracticeAddress: PracticeAddress;
    PrescriberAgent?: any;
    CommunicationNumbers: CommunicationNumbers3;
    PrescriberPlaceOfService?: any;
}

export interface Prescriber {
    NonVeterinarian: NonVeterinarian;
}

export interface ProductCode {
    Code: string;
    Qualifier: number;
    QualifierValue: string;
}

export interface StrengthForm {
    Code: string;
}

export interface StrengthUnitOfMeasure {
    Code: string;
}

export interface Strength {
    StrengthValue: string;
    StrengthForm: StrengthForm;
    StrengthUnitOfMeasure: StrengthUnitOfMeasure;
}

export interface DrugDBCode {
    Code: string;
    Qualifier: number;
    QualifierValue: string;
}

export interface DrugCoded {
    ProductCode: ProductCode;
    Strength: Strength;
    DrugDBCode: DrugDBCode;
    DEASchedule?: any;
    DEAScheduleValue?: any;
}

export interface QuantityUnitOfMeasure {
    Code: string;
}

export interface Quantity {
    Value: string;
    CodeListQualifier: number;
    CodeListQualifierValue: string;
    QuantityUnitOfMeasure: QuantityUnitOfMeasure;
}

export interface WrittenDate {
    Date: Date;
    DateValue: string;
    DateTime?: any;
    DateTimeValue?: any;
}

export interface LastFillDate {
    Date: Date;
    DateValue: string;
    DateTime?: any;
    DateTimeValue?: any;
}

export interface Primary {
    Code: string;
    Qualifier: number;
    QualifierValue: string;
    Description: string;
    DateOfLastOfficeVisit?: any;
}

export interface Diagnosis {
    ClinicalInformationQualifier: number;
    ClinicalInformationQualifierValue: number;
    Primary: Primary;
    Secondary?: any;
}

export interface CodeSystem {
    SNOMEDVersion: string;
    FMTVersion: string;
}

export interface DoseUnitOfMeasure {
    Text: string;
    Qualifier: number;
    QualifierValue: string;
    Code: string;
}

export interface Dosage {
    DoseQuantity: string;
    DoseUnitOfMeasure: DoseUnitOfMeasure;
    DoseRangeModifier?: any;
}

export interface RouteOfAdministration {
    Text: string;
    Qualifier: number;
    QualifierValue: string;
    Code: string;
}

export interface DoseAdministration {
    DoseDeliveryMethod?: any;
    DoseDeliveryMethodModifier?: any;
    DoseQuantity?: any;
    Dosage: Dosage;
    DoseAmount?: any;
    DoseClarifyingFreeText?: any;
    RouteOfAdministration: RouteOfAdministration;
    RouteOfAdministrationClarifyingFreeText?: any;
    SiteOfAdministration?: any;
    SiteOfAdministrationClarifyingFreeText?: any;
}

export interface FrequencyUnits {
    Text: string;
    Qualifier: number;
    QualifierValue: string;
    Code: string;
}

export interface Frequency {
    FrequencyNumericValue: string;
    VariableFrequencyModifier?: any;
    FrequencyUnits: FrequencyUnits;
    TimingClarifyingFreeText?: any;
}

export interface TimingAndDuration {
    Frequency: Frequency;
    DurationTrigger?: any;
    StopIndicator?: any;
}

export interface Instruction {
    DoseAdministration: DoseAdministration;
    TimingAndDuration: TimingAndDuration;
    IndicationForUse?: any;
    ClarifyingFreeText?: any;
}

export interface Sig {
    SigText: string;
    CodeSystem: CodeSystem;
    Instruction: Instruction;
}

export interface DiabeticSupply {
    TestingFrequency: string;
    SupplyIndicator: boolean;
    SupplyIndicatorValue: string;
    InsulinDependent: boolean;
    InsulinDependentValue: string;
    HasAutomatedInsulinDevice: boolean;
    HasAutomatedInsulinDeviceValue: string;
}

export interface MedicationPrescribed {
    DrugDescription: string;
    DrugCoded: DrugCoded;
    Quantity: Quantity;
    DaysSupply: string;
    WrittenDate: WrittenDate;
    LastFillDate: LastFillDate;
    AllowSubstitutions: boolean;
    AllowSubstitutionsValue: string;
    NumberOfRefills: string;
    Note: string;
    Diagnosis: Diagnosis;
    Sig: Sig;
    DiabeticSupply: DiabeticSupply;
}

export interface Drug {
    _id: string;
    LastModified: Date;
    RequestStatus: number;
    MessageID: string;
    MessageType: string;
    RelatesToMessageID: string;
    Reason?: any;
    Patient: Patient;
    Pharmacy: Pharmacy;
    Prescriber: Prescriber;
    MedicationPrescribed: MedicationPrescribed;
}
