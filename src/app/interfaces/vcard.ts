export interface vCard {
    name: {
        ssiMid: number;
        firstNames: string;
        lastNames: string;
        addtionalNames: string;
    }
}

export interface vCard1 {
    ssiMid: number;
    dataCode: {
        firstNames: string;
        lastNames: string;
    }
}
