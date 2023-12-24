'use client'
import { TiArrowForward } from "react-icons/ti"
export default function Company() {
    return (
        <div>
            <h3>Engineer <span className="text-textGreen tracking-wide underline-transition">Clover Bay Technologies Pvt Ltd</span></h3>
            <p className="text-sm mt-1 font-medium text-textDark">
                July 2021 - Present
            </p>
            <ul className="mt-6 flex flex-col gap-4">
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <TiArrowForward />
                    </span>
                    <div>
                        Established and uphold a resilient <span className="text-textGreen underline-transition">Back-End for Front- End </span>
                        layer to power a high performance application, effectively managing user data across 21 countries using&nbsp;
                        <span className="text-textGreen underline-transition">Nodejs</span> and&nbsp;
                        <span className="text-textGreen underline-transition">Fastify</span>
                        &nbsp;to optimise server-side processing, resulting in unparalleled uses responsiveness.
                    </div>
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <TiArrowForward />
                    </span>
                    <div>
                        Developed a uses friendly feature for a beauty product platform, introducing a points system linked to the purchases. Using&nbsp;
                        <span className="text-textGreen underline-transition">Vue.js</span>,
                        ensuring smooth and responsive experience. Users can redeem points for vouchers and products, leading to increase engagement.
                        collaborating with Back-end developers and agile methods.
                        Also revamped the existing 3 process checkout flow to single page checkout . Developed 3 more new features in short period.
                    </div>
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <TiArrowForward />
                    </span>
                    <div>
                        Managed a team of 4 and devised a personalised web theme using <span className="text-textGreen underline-transition">Vue.js</span>, not only enhancing the website's visual appeal but also ensuring effortless customisation via a platform application.
                    </div>
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <TiArrowForward />
                    </span>
                    <div>
                        Developed an efficient admin application utilising React and a bit of graphQL with strong emphasis on delivering seamless uses experience.
                    </div>
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <TiArrowForward />
                    </span>
                    <div>
                        Conducted code reviews identified areas for improvement , written unit test and implemented best practice to enhance code quality and maintainability.
                    </div>
                </li>
            </ul>
        </div>
    )
}