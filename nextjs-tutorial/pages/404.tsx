import { useEffect } from "react"
import { useRouter } from "next/dist/client/router";

export default function custom404() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 2000);
    }, [])
    return (
        <div>
            <p className='text404'>ooops...</p>
            <p className='text404'>Halaman yang anda cari tidak ditemukan</p>
        </div>
    )
}