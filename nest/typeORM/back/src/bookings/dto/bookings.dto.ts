export class PostBookingsDTO { 

    readonly country: string
    readonly city: string

    readonly hotel_name: string

    readonly room_number: number
    readonly price: number
    
    readonly dateFrom: Date
    readonly dateTo: Date
    
}

export class PatchBookingDTO { 

    country: string
    city: string

    hotel_name: string

    room_number: number
    price: number
    
    dateFrom: Date
    dateTo: Date
    
}
