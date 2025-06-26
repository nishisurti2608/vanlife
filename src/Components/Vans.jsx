import React from "react"
import { Link } from "react-router-dom"

export default function Vans() {
    const [vans, setVans] = React.useState([])

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map(van => (
        <div key={van.id} className="w-full max-w-xs">
            <Link to={`/vans/${van.id}`} className="block text-[#161616] no-underline">
                <img
                    src={van.imageUrl}
                    alt={van.name}
                    className="w-full rounded mb-3"
                />
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">{van.name}</h3>
                    <p className="text-sm font-semibold">
                        ${van.price}
                        <span className="text-sm font-normal">/day</span>
                    </p>
                </div>
                <i className={`inline-block px-6 py-1.5 text-sm font-medium rounded capitalize
                    ${van.type === "simple" ? "bg-[#E17654] text-white" : ""}
                    ${van.type === "rugged" ? "bg-[#115E59] text-white" : ""}
                    ${van.type === "luxury" ? "bg-[#161616] text-white" : "bg-[#FFEAD0] text-[#4D4D4D]"}
                `}>
                    {van.type}
                </i>
            </Link>
        </div>
    ))

    return (
        <div className="px-6">
            <h1 className="text-2xl font-bold mb-6">Explore our van options</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
                {vanElements}
            </div>
        </div>
    )
}
