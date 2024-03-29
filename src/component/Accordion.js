import { useState } from "react"



const DATA = [
    { id:"a0", name:"Features", content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi exercitationem dolor, laboriosam alias magni maiores repellendus aut temporibus!"},
    { id:"a1", name:"Details", content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi exercitationem dolor, laboriosam alias magni maiores repellendus aut temporibus!"},
    { id:"a2", name:"Measurements", content:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
]

function Appear({name, content}) {
    const [active, setActive] = useState(false);

    return(
        <li className="mb-1">
            <button
                className="w-full bg-gray-100 px-4 py-2 flex justify-between"
                onClick={() => {setActive(!active)}}
            >
                <p>{name}</p>
                <span>
                    { active ? "-" : "+"}
                </span>
            </button>

            <div id="accBtn"
                className="overflow-hidden transition-all {active ? 'block' : 'hidden}"
                style={{ maxHeight: active ? "200px" : "0px" }}
            >
                <p className="p-2">
                    {content}
                </p>
            </div>
        </li>
    )

}

export default function Accordion() {

    const accordion = DATA.map(cont => (
        <Appear
            name={cont.name}
            content={cont.content}
        />
    ))

    return (
        <>
            <h3 className="my-5 font-semibold">
            Product information
            </h3>

            <ul>
                {accordion}
            </ul>
        </>
    )

}