export class Country {
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get drapeau(): string {
        return this._drapeau;
    }
    public set drapeau(value: string) {
        this._drapeau = value;
    }
    public get capitale(): string {
        return this._capitale;
    }
    public set capitale(value: string) {
        this._capitale = value;
    }
    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }

    constructor(
        private _id: number,
        private _nom: string,
        private _capitale: string,
        private _drapeau: string,
        private _description: string
    ){}
}
