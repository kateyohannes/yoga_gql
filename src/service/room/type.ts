
export const type = `
    type Room{
        _id: String
        room_type: String
        price: Decimal
        is_available: Boolean
        last_reservation: LastReservation
        is_reserved: Boolean
    }

    type LastReservation{
        _id: String
        from: String
        to: String
    }
`