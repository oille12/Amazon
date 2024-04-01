import { useState } from "react";


const PHOTOS = ["/images/product-1.jpeg","/images/product-2.jpeg","/images/product-3.jpeg"];

export default function ProductImg() {
    const [index, setIndex] = useState(0);
    const firstIndex = 0;
    const lastIndex = PHOTOS.length-1;

    return(
        <>
        {/* 제품사진 */}
        <div className="mx-auto w-inherit h-80 border relative flex justify-center">
            <img
                className="h-full object-cover"
                src={PHOTOS[index]}
                alt={PHOTOS[index]}
            />

            {/* left 화살표 */}
            {index !== firstIndex && (
                <button
                    className="absolute top-0 left-0 h-full px-2 text-4xl text-gray-400"
                    onClick={() => setIndex(index-1)}
                >
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                    </svg> */}
                    &#10094;
                </button>
            )}

            {/* right 화살표 */}
            {index !== lastIndex && (
                <button
                    className="absolute top-0 right-0 h-full px-2 text-4xl text-gray-400"
                    onClick={() => setIndex(index+1)}
                >
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                    </svg> */}
                    &#10095;
                </button>
            )}
        </div>

        {/* 점 3개 동적 구현 - map활용 */}
        <div className="flex justify-center my-4">
            {PHOTOS.map((photo, photoIndex) => (
                <span
                    key={photoIndex}
                    className="w-2 h-2 mx-1 rounded-full"
                    style={{backgroundColor: (index === photoIndex) ? "orange" : "lightgray"}}
                >
                </span>
            ))}
        </div>

        </>
    )

}