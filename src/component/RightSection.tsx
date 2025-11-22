'use client'
export default function RightSection() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-end gap-20 text-textLight">
            <a
                href="mailto:jeevansuvarna71@gmail.com"
                className="text-sm rotate-90 w-72 tracking-wide text-textLight hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"
            >
                jeevansuvarna71@gmail.com
            </a>
            <span className="w-[2px] h-32 bg-textDark inline-flex"></span>
        </div>
    )
}   