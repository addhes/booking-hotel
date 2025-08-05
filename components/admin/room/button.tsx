'use client'

import { deleteRoom } from "@/lib/action"
import { IoPencil, IoTrashOutline } from "react-icons/io5"
import { useRef } from "react"
import Swal from "sweetalert2"
import Link from "next/link"


export const EditButton = ({ id }: {id: string}) => {
    return (
        <Link href={`/admin/room/edit/${id}`}
        className="rounded-sm p-1 hover:bg-gray-200">
            <IoPencil className="size-5" />
        </Link>
    )
}

export const DeleteButton = ({ id, image }: { id: string; image: string }) => {
    const formRef = useRef<HTMLFormElement>(null)

    const handleDelete = async (e: React.MouseEvent) => {
        e.preventDefault()

        const result = await Swal.fire({
            title: 'Yakin ingin menghapus?',
            text: "Data ini tidak bisa dikembalikan!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Ya, hapus!',
            cancelButtonText: 'Batal',
        })

        if (result.isConfirmed) {
            formRef.current?.requestSubmit()
        }
    }

    const DeleteRoomWithId = deleteRoom.bind(null, id, image)

    return (
        <form ref={formRef} action={DeleteRoomWithId}>
            <button
                type="button"
                onClick={handleDelete}
                className="rounded-sm p-1 hover:bg-gray-200 cursor-pointer"
            >
                <IoTrashOutline className="size-5" />
            </button>
        </form>
    )
}
