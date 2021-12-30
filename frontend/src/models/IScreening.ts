export interface ScreeningInterface {

    ID: string, 
    Symptoms : string,
    Weight : number,
    Height: number,
    Temperature: number,
    PulseRate : number,
    RespirationRate: number,
    SaveTime :Date | null,
 
    //fk
    MedRecID: number, 
    MedRec: MedicalRecordInterface
    DiseaseID: number, 
    Disease: DiseaseInterface
    NurseID: number, 
    Nurse : NurseInterface,
    
}

export interface NurseInterface {

    ID: string, 
    Name : string,
    Email : string,
    Pass: string,
}

export interface MedicalRecordInterface {

  ID: number,
  Hospital_Number: string,

  Personal_ID: string,

  NameTitleID: number,
  NameTitle: NametitlesInterface,

  Patient_Name: string,
    
  Patient_Age: number,

  Patient_dob: Date ,

  Patient_Tel: string,


  HealthInsuranceID: number,
  HealthInsurance: HealthInsurancesInterface
  
  MedRecOfficerID: number,
  MedRecOfficer: MedRecOfficersInterface,
   
  Register_Date: Date ,
}

export interface DiseaseInterface {

    ID: string, 
    Name : string,
    Description : string,

}




export interface HealthInsurancesInterface {

    ID: number,
   
    HealthInsurance_Name: string,

    Detail: string,

   }


   export interface MedRecOfficersInterface {

    ID: number,
   
    MedRecOfficer_Name: string,

    MedRecOfficer_Email: string,

    MedRecOfficer_Pass: string, 

   }

   export interface NametitlesInterface {

    ID: number,
   
    Title: string,

   }