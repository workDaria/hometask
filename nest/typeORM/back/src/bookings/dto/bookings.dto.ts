export class GetBookingsDTO { 

    readonly country: string
    readonly city: string

    readonly hotel_name: string
    readonly hotel_id: number

    readonly room_number: number
    readonly price: number
    
    readonly dateFrom: Date
    readonly dateTo: Date

}

export class PostBookingsDTO { 

    country: string
    city: string

    hotel_name: string
    hotel_id: number

    room_number: number
    price: number
    
    dateFrom: Date
    dateTo: Date
    
}

export class DeleteBookingsDTO { 

    country: string
    city: string

    hotel_name: string
    hotel_id: number

    room_number: number
    price: number
    
    dateFrom: Date
    dateTo: Date
    
}

export class PatchBookingsDTO { 

    country: string
    city: string

    hotel_name: string
    hotel_id: number

    room_number: number
    price: number
    
    dateFrom: Date
    dateTo: Date
    
}