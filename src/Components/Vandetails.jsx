import {useState,useEffect} from "react"
import { useParams } from "react-router-dom"

export default function VanDetail() {
    const params = useParams()
    const [van, setVan] = useState(null)

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    return (
        <div className="p-6">
            {van ? (
                <div className="flex flex-col text-[#161616]">
                    <img
                        src={van.imageUrl}
                        alt={van.name}
                        className="rounded mb-10"
                    />
                    <i className={`van-type ${van.type} selected px-6 py-1.5 text-sm font-medium rounded bg-[#FFEAD0] text-[#4D4D4D] capitalize self-start
                        ${van.type === "simple" ? "bg-[#E17654] text-white" : ""}
                        ${van.type === "rugged" ? "bg-[#115E59] text-white" : ""}
                        ${van.type === "luxury" ? "bg-[#161616] text-white" : ""}
                    `}>
                        {van.type}
                    </i>
                    <h2 className="text-2xl font-bold mt-4 mb-2">{van.name}</h2>
                    <p className="text-lg mb-2">
                        <span className="font-bold text-xl">${van.price}</span>/day
                    </p>
                    <p className="mb-6">{van.description}</p>
                    <button className="bg-[#FF8C38] text-white text-lg font-bold py-3 px-6 rounded hover:translate-x-[1px] hover:translate-y-[1px] transition-transform duration-100">
                        Rent this van
                    </button>
                </div>
            ) : (
                <h2 className="text-xl font-semibold">Loading...</h2>
            )}
        </div>
    )
}
