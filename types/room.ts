import { Prisma } from "@prisma/client";

// Kode ini membuat type alias bernama RoomProps, yang akan merepresentasikan bentuk data dari tabel Room,
// beserta relasi RoomAmenities yang hanya mengambil amenitiesId.
export type RoomProps = Prisma.RoomGetPayload<{
    include: { RoomAmenities: {select: {amenitiesId: true }} }
}>

export type RoomDetailsProps = Prisma.RoomGetPayload<{
    include: {
                RoomAmenities: {
                    include: {
                        Amenities : {
                            select: {
                                name: true
                            }
                        }
                    }
                }
            }
}>

export type DisabledDateProps = Prisma.ReservationGetPayload<{
    select: {
        startDate: true,
        endDate: true
    }
}>