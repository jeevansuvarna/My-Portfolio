'use client'

interface Props {
    title: string,
    id: string
}
export default function Title({ title, id }: Props) {
    return (
        <h2 className="font-titleFont font-semibold text-2xl flex items-center">
            <span className="text-base md:text-lg text-textGReen mr-2">{id}</span>{" "} {title}
            <span className="hidden md:flex md:w-60 lgl:w-72 h-[0.5px] bg-gray-700 ml-6"></span>
        </h2>
    )
}