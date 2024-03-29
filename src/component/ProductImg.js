import { useState } from "react";


const PHOTOS = ["/images/product-1.jpeg","/images/product-2.jpeg","/images/product-3.jpeg"];

export default function ProductImg() {

    const [index, setIndex] = useState(0);

    return(
        <>
        {/* 제품사진 */}
        <div className="mx-auto w-inherit h-80 border relative flex justify-center">
            <img
                className="h-full object-cover"
                src={PHOTOS[index]}
                alt={PHOTOS[index]}
            />
            {/* 좌우 화살표 */}
        </div>

        {/* 점 3개 */}
        <div className="flex justify-center my-4">
            {PHOTOS.map((photo, photoIndex) => (
                <span
                    className="w-2 h-2 mx-1 rounded-full bg-gray-200"
                ></span>
            ))}
        </div>

        </>
    )

}