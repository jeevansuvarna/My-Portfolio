'use client'
import { useState } from "react";
import Title from "./Title";
import Company from "./company";

export default function Work() {
    const [workId, setworkId] = useState(1);
    const handleButton = (index: number) => {
        setworkId(index);

    }
    return (
        <section className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4" id="work">
            <Title title="Work" id="02"></Title>
            <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
                <ul className="md:w-38 flex flex-col">
                    <li onClick={(e) => handleButton(1)}
                        className={`${workId == 1 ?
                            "border-l-textGreen text-textGreen" :
                            "border-l-textDark text-textDark"
                            } border-l-2  bg-transperant hover:bg-[#121212] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                    >
                        CBT
                    </li>
                    {/* <li className={`${workId == 2 ?
                        "border-l-textGreen text-textGreen" :
                        "border-l-textDark text-textDark"
                        } border-l-2  bg-transperant hover:bg-[#121212] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                        onClick={() => handleButton(2)}>
                        Company
                    </li>
                    <li className={`${workId == 3 ?
                        "border-l-textGreen text-textGreen" :
                        "border-l-textDark text-textDark"
                        } border-l-2  bg-transperant hover:bg-[#121212] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                        onClick={() => handleButton(3)}>
                        Company
                    </li>
                    <li className={`${workId == 4 ?
                        "border-l-textGreen text-textGreen" :
                        "border-l-textDark text-textDark"
                        } border-l-2  bg-transperant hover:bg-[#121212] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                        onClick={() => handleButton(4)}>
                        Company
                    </li>
                    <li className={`${workId == 5 ?
                        "border-l-textGreen text-textGreen" :
                        "border-l-textDark text-textDark"
                        } border-l-2  bg-transperant hover:bg-[#121212] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                        onClick={() => handleButton(5)}>
                        Company
                    </li> */}
                </ul>
                <Company />
            </div>
        </section>
    )
}