export class Drug {
    constructor(
        public prescriptionID: string,
        public perscriber: string,
        public relatesToID: string,
        public status: string
    ) { }
}
