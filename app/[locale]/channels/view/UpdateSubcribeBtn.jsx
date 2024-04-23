"use client";

import Link from 'next/link';
import { useState } from "react";

export default function Navbar() {

    const objChannel = {
        name: 'KINGDOM NVHAI',
        subcribe: 3190,
        thumbnail: 'img/channel/500x500/kingdom-nvhai-channel-thumbnail.jpg',
        created_date: '2015-06-28',
        facebook: '',
        twitter: 'https://www.youtube.com/watch?v=PEMfsqZ2-As',
        youtube: 'https://www.youtube.com/watch?v=PEMfsqZ2-As',
        video_present: 'https://www.youtube.com/watch?v=PEMfsqZ2-As',
    }

    const [channel, setChannel] = useState(objChannel);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const res = await fetch('api/update-youtube-ranking', {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify({
    //                 channel
    //             })
    //         });

    //         if (res.ok) {
    //             const form = e.target;
    //             form.reset();
    //             router.push("/channels");
    //         } else {
    //             console.log("Update Subcribe Failed")
    //         }
    //     } catch (error) {
    //         console.log("Error: ", error)
    //     }
    // };



    // useEffect(() => {
    //     const q = query(collection(db, 'items'));
    //     const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //         let itemsArr = [];

    //         querySnapshot.forEach((doc) => {
    //             itemsArr.push({ ...doc.data(), id: doc.id });
    //         });
    //         setItems(itemsArr);

    //         // Read total from itemsArr
    //         const calculateTotal = () => {
    //             const totalPrice = itemsArr.reduce(
    //                 (sum, item) => sum + parseFloat(item.price),
    //                 0
    //             );
    //             setTotal(totalPrice);
    //         };
    //         calculateTotal();
    //         return () => unsubscribe();
    //     });
    // }, []);

    return (
        <div className='w-full m-auto mb-5'>
            <form>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
                Update Subcribe
            </button>
            </form>
        </div>
    )
}
