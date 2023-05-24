export class Order {
    orderCode: string;
    orderName: string;
    dateInvitation: string;
    dateArrival: string;
    total: number;

    constructor(orderCode: string, orderName: string, dateInvitation: string, dateArrival: string, total: number) {
        this.orderCode = orderCode;
        this.orderName = orderName;
        this.dateInvitation = dateInvitation;
        this.dateArrival = dateArrival;
        this.total = total;

    }

}