import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const Link = ({ domain, href }: { domain?: string; href: string }) => {
    let realDomain = domain;

    if (!realDomain) {
        try {
            realDomain = new URL(href).host;
        } catch (_: unknown) {}
    }

    return (
        <span>
            (
            <a
                href={href}
                className="text-lightBlue hover:underline"
                target="_blank"
            >
                {realDomain ?? href}
            </a>
            )
        </span>
    );
};

export const MainPage = () => {
    const [lightOn, setLightOn] = useState(true);

    return (
        <AnimatePresence>
            <motion.div className="w-full h-full flex flex-col items-start justify-center p-8 md:p-16 bg-amber-7">
                <div className="flex flex-col items-center md:items-start justify-center p-8 md:p-16 bg-amber-9 shadow-xl w-full md:w-unset">
                    <motion.p
                        initial={{ scaleX: 0, translateX: "-50%" }}
                        animate={{ scaleX: 1, translateX: 0 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="text-4xl md:text-7xl font-jbm font-bold flex flex-row items-center justify-start overflow-hidden"
                    >
                        OUR WORLD
                    </motion.p>

                    <motion.p
                        initial={{ scaleX: 0, translateX: "-50%" }}
                        animate={{ scaleX: 1, translateX: 0 }}
                        transition={{
                            delay: 0.25,
                            duration: 0.5,
                            type: "spring",
                        }}
                        className="text-2xl md:text-4xl font-alexandria"
                    >
                        IS IN TROUBLE
                    </motion.p>
                </div>
            </motion.div>

            <motion.div className="w-full h-full flex flex-col items-end justify-center p-8 md:p-16 bg-red-9">
                <div className="flex flex-col items-start md:items-end justify-center p-8 md:p-16 bg-red-7 shadow-xl">
                    <motion.p
                        initial={{ scaleX: 0, translateX: "-50%" }}
                        whileInView={{ scaleX: 1, translateX: 0 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-jbm font-bold flex flex-row items-center justify-start overflow-hidden"
                    >
                        OUR NATURAL RESOURCES
                    </motion.p>

                    <motion.p
                        initial={{ scaleX: 0, translateX: "-50%" }}
                        whileInView={{ scaleX: 1, translateX: 0 }}
                        transition={{
                            delay: 0.25,
                            duration: 0.5,
                            type: "spring",
                        }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-4xl font-alexandria"
                    >
                        ARE DEPLETING
                    </motion.p>
                </div>
            </motion.div>

            <motion.div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-16 space-y-12 bg-trueGray-7">
                <motion.p
                    initial={{ scaleY: 0, translateY: "-50%" }}
                    whileInView={{ scaleY: 1, translateY: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-5xl font-light text-trueGray-4 font-alexandria uppercase"
                >
                    The U.S. produces roughly{" "}
                    <span className="font-bold text-cyan">340 MILLION</span>{" "}
                    megawatt hours of electricity every month.
                </motion.p>

                {/* nuclear = 62 mil MWh */}
                {/* solar = 22.2 mil MWh */}
                {/* wind = 39.4 mil MWh */}
                {/* hydro = 19.3 mil MWh */}
                {/* clean energy = 42% */}

                {/*
                    Nuclear energy is considered to be clean.
                    See: https://www.energy.gov/ne/articles/3-reasons-why-nuclear-clean-and-sustainable
                    See: https://www.nationalgrid.com/stories/energy-explained/what-nuclear-energy-and-why-it-considered-clean-energy
                */}

                <motion.p
                    initial={{ scaleY: 0, translateY: "-50%" }}
                    whileInView={{ scaleY: 1, translateY: 0 }}
                    transition={{ delay: 1, duration: 0.5, type: "spring" }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-4xl font-jbm uppercase font-bold"
                >
                    <span className="text-emerald">57%</span> of that is{" "}
                    <span className="text-fuchsia">coal</span> and{" "}
                    <span className="text-amber-5">natural gas</span>.
                </motion.p>

                <motion.p className="font-jbm text-sm w-full pt-16 md:pt-32 text-coolGray-2">
                    Data as of February 2025, from the U.S. Energy Information
                    Administration{" "}
                    <Link href="https://www.eia.gov/electricity/data/browser/" />
                </motion.p>
            </motion.div>

            <motion.div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-16 space-y-12 bg-blue-9">
                <motion.p
                    initial={{ scaleX: 0, translateX: "-50%" }}
                    whileInView={{ scaleX: 1, translateX: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-alexandria font-bold flex flex-row items-center justify-start overflow-hidden"
                >
                    SO WHAT CAN YOU DO?
                </motion.p>
            </motion.div>

            <motion.div className="w-full h-full flex flex-col md:flex-row items-center justify-center p-8 md:p-16 space-y-12 bg-yellow-9">
                <div className="md:w-[75%]">
                    <motion.p
                        className="font-alexandria uppercase text-5xl"
                        initial={{ scaleX: 0, translateX: "-50%" }}
                        whileInView={{ scaleX: 1, translateX: 0 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        viewport={{ once: true }}
                    >
                        Turn off the lights
                    </motion.p>
                    <motion.p
                        className="font-alexandria uppercase text-3xl text-trueGray-4"
                        initial={{ scaleX: 0, translateX: "-50%" }}
                        whileInView={{ scaleX: 1, translateX: 0 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        viewport={{ once: true }}
                    >
                        when you don't need them
                    </motion.p>
                </div>

                <svg
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className={`iconify iconify--fxemoji w-full h-full md:w-[50%] md:h-[50%] filter-drop-shadow-2xl ${lightOn ? "filter-drop-shadow-color-yellow" : "filter-drop-shadow-color-trueGray-8"} transition-all transition-duration-[0.75s]`}
                    preserveAspectRatio="xMidYMid meet"
                    onClick={() => setLightOn(!lightOn)}
                >
                    <motion.path
                        animate={{ fill: lightOn ? "#FFE46A" : "#111111" }}
                        transition={{ duration: 1.5, type: "spring" }}
                        viewport={{ once: true }}
                        d="M411.111 183.926c0-87.791-68.91-158.959-153.914-158.959S103.283 96.136 103.283 183.926c0 39.7 14.093 75.999 37.392 103.856h-.001l33.666 61.027c8.793 16.28 12.057 26.792 26.792 26.792h109.774c14.736 0 19.071-11.07 26.792-26.792l36.022-61.027h-.002c23.299-27.857 37.393-64.156 37.393-103.856z"
                    ></motion.path>
                    <motion.path
                        animate={{ fill: lightOn ? "#FFF0B7" : "#111111" }}
                        transition={{ duration: 1.5, type: "spring" }}
                        viewport={{ once: true }}
                        d="M112.805 203.285c0-90.721 68.378-165.701 157.146-177.719a150.851 150.851 0 0 0-13.319-.599c-85.004 0-153.914 71.169-153.914 158.959c0 28.89 7.469 55.974 20.512 79.319c-6.75-18.749-10.425-38.932-10.425-59.96z"
                    ></motion.path>
                    <motion.path
                        animate={{ fill: lightOn ? "#FFDA00" : "#111111" }}
                        transition={{ duration: 1.5, type: "spring" }}
                        viewport={{ once: true }}
                        d="M411.111 184.266c0-31.445-8.843-60.755-24.097-85.428a160.416 160.416 0 0 1 4.917 39.416c0 104.454-101.138 189.522-227.481 192.967l9.89 17.929c8.793 16.28 12.057 26.792 26.792 26.792h109.774c14.736 0 19.071-11.07 26.792-26.792l36.022-61.027h-.002c23.299-27.858 37.393-64.157 37.393-103.857z"
                    ></motion.path>
                    <motion.path
                        animate={{ fill: lightOn ? "#FAAF63" : "#333333" }}
                        transition={{ duration: 1.5, type: "spring" }}
                        viewport={{ once: true }}
                        d="M321.905 211.203c.149-.131.297-.251.447-.395c2.787-2.667 5.082-6.921 3.161-10.867c-7.879-16.176-31.97-21.308-49.524-15.951c-.889.271-1.751.566-2.588.885c-9.562-5.583-21.434-6.925-32.001-3.569a35.399 35.399 0 0 0-3.678 1.394c-5.785-3.38-12.552-5.066-19.294-4.414c-14.112 1.365-26.375 12.81-28.805 26.752l-1.112.688c9.617 15.541 34.93 60.071 36.552 79.233c2.045 24.174.002 89.793-.019 90.453l11.994.379c.086-2.723 2.086-66.978-.019-91.844c-.938-11.087-7.722-28.758-20.164-52.521c-5.807-11.092-11.445-20.83-14.858-26.576c2.36-7.646 9.61-13.848 17.586-14.619c2.429-.235 4.893.037 7.251.729a22.68 22.68 0 0 0-2.32 3.638c-4.047 7.935-2.356 17.898 3.933 23.176c3.725 3.125 9.137 4.276 14.127 3c4.647-1.188 8.239-4.242 9.854-8.379c1.451-3.718 1.328-8.01-.367-12.756a30.665 30.665 0 0 0-4.05-7.655a28.134 28.134 0 0 1 13.61.744c-1.715 1.975-3.027 4.173-3.89 6.556c-1.844 5.101-1.029 11.163 2.128 15.822c2.721 4.016 6.856 6.403 11.348 6.551c.15.005.301.008.45.008c3.935 0 7.67-1.692 10.562-4.797c3.397-3.647 5.126-8.71 4.624-13.544c-.319-3.073-1.412-6.079-3.172-8.867c12.236-2.223 24.205 1.911 29.383 8.186c-3.125 5.2-9.542 16.11-16.178 28.785c-12.441 23.764-19.227 41.435-20.164 52.521c-2.104 24.866-.104 89.121-.019 91.844l11.994-.379c-.021-.66-2.064-66.275-.019-90.453c1.459-17.251 22.113-55.046 33.237-73.758zm-80.657-3.171c-.279.716-1.331 1.035-1.647 1.116c-1.25.319-2.665.086-3.442-.565c-2.015-1.691-2.453-5.599-.957-8.532a11.21 11.21 0 0 1 1.85-2.583c1.611 1.828 2.892 3.926 3.707 6.208c.665 1.86.843 3.449.489 4.356zm32.19.654c-.351.375-1.065.992-1.839.976c-.831-.027-1.489-.819-1.808-1.289c-.993-1.467-1.312-3.527-.776-5.009c.618-1.71 1.811-3.109 3.203-4.235c1.55 1.751 2.501 3.634 2.688 5.434c.144 1.371-.447 3.027-1.468 4.123z"
                    ></motion.path>
                    <path
                        fill="#6B83A5"
                        d="M315.932 402.701H197.897c-6.6 0-12 5.4-12 12v6.957c0 6.6 5.4 12 12 12h38.122c-11.367 4.229-23.369 14.285-23.369 25.946v4.68c9.123 10.254 17.619 28.081 33.802 28.081h21.89c12.748 0 21.804-13.762 32.836-28.081v-4.68c0-11.661-11.451-21.717-22.548-25.946h37.302c6.6 0 12-5.4 12-12v-6.957c0-6.6-5.4-12-12-12z"
                    ></path>
                    <path
                        fill="#ABBDDB"
                        d="M324.406 402.701H189.423c-6.6 0-12-5.4-12-12v-6.957c0-6.6 5.4-12 12-12h134.983c6.6 0 12 5.4 12 12v6.957c0 6.6-5.4 12-12 12zm-7.007 49.915v-6.957c0-6.6-5.4-12-12-12H208.43c-6.6 0-12 5.4-12 12v6.957c0 6.6 5.4 12 12 12h96.969c6.6 0 12-5.4 12-12z"
                    ></path>
                </svg>

                <div
                    className="w-64 h-96 bg-trueGray-8 flex flex-row items-start justify-center p-6 transition-all shadow-lg shadow-trueGray-9 transition-duration-[1s]"
                    onClick={() => setLightOn(!lightOn)}
                >
                    <div
                        className={`w-64 h-32 ${lightOn ? "bg-yellow-6" : "bg-trueGray-7"} transition-all ${lightOn ? "" : "md:mt-full"} cursor-pointer transition-duration-[1s] flex flex-row items-center justify-center font-jbm text-5xl select-none shadow-xl`}
                        onClick={() => setLightOn(!lightOn)}
                    >
                        {lightOn ? "ON" : "OFF"}
                    </div>
                </div>
            </motion.div>

            <motion.div className="w-full h-full flex flex-col md:flex-row items-center justify-center md:justify-between p-8 md:p-16 space-y-12 bg-green-9">
                <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512.007 512.007"
                    xmlSpace="preserve"
                    className="h-[50%] md:h-[75%]"
                >
                    <path
                        style={{ fill: "#A0BF7C" }}
                        d="M204.805,499.207c-105.873,0-192-86.135-192-192s86.127-192,192-192s192,86.135,192,192
	S310.678,499.207,204.805,499.207z"
                    />
                    <path
                        style={{ fill: "#A9D0D3" }}
                        d="M305.745,359.261c-13.133,0-23.287-4.873-30.191-14.473c-5.931-8.303-8.934-19.166-8.934-32.324
	c0-13.269,3.021-24.166,8.986-32.393c6.827-9.549,16.99-14.43,30.14-14.43c13.039,0,23.194,4.881,30.182,14.498
	c6.007,8.235,9.071,19.115,9.071,32.324c0,13.09-3.038,23.953-9.037,32.282C328.965,354.38,318.81,359.261,305.745,359.261z"
                    />
                    <path
                        style={{ fill: "#C6D9B0" }}
                        d="M406.746,191.982c-22.451,0-42.325-6.869-57.472-19.857l-11.802-10.129l-0.102,0.068l-6.63-14.438
	c-5.316-11.571-7.356-24.567-5.897-37.564c6.468-58.308,57.66-67.354,102.818-75.324c18.441-3.26,35.601-6.289,48.154-12.484
	l14.438-7.117l3.678,15.676c8.474,36.122,9.489,90.999-15.565,126.763C462.597,180.086,437.833,191.982,406.746,191.982z"
                    />
                    <path
                        style={{ fill: "#788F5D" }}
                        d="M295.77,138.119c-5.41-2.927-10.957-5.589-16.495-7.927l-9.643-4.079l-13.286-3.695
	c-10.863-3.021-20.975-5.009-30.916-6.076l-14.626-1.562l3.567-14.276c3.524-14.089,12.74-27.298,27.46-45.363
	c8.073-9.89,15.659-19.183,19.772-28.083l6.366-13.773l12.501,8.593c24.132,16.563,40.917,39.953,44.902,62.549
	c3.055,17.34-1.408,34.185-13.261,50.074l-6.613,8.866L295.77,138.119z"
                    />
                    <g>
                        <path
                            style={{ fill: "#573A32" }}
                            d="M126.853,344.131H82.3v-20.779h38.298c3.652,0,6.997-1.348,9.446-3.797
		c2.372-2.347,3.678-5.478,3.678-8.798c0-3.447-1.246-6.528-4.002-9.25c-2.423-2.202-5.572-3.354-9.122-3.354H82.027l-0.529-17.374
		h43.648c3.575,0,6.878-1.348,9.327-3.797c2.372-2.347,3.678-5.504,3.678-8.798c0-3.396-1.297-6.579-4.002-9.25
		c-2.423-2.202-5.547-3.354-9.003-3.354H77.649c-6.596,0-12.177,2.423-16.179,7.023c-3.371,3.925-5.146,8.977-5.146,14.575v70.673
		c0,5.547,1.724,10.402,5.171,14.473c2.748,3.174,7.799,6.972,16.154,6.972h49.203c4.779,0,7.825-2.099,9.353-3.678
		c2.449-2.347,3.772-5.521,3.772-8.926s-1.297-6.579-4.002-9.25C134.302,345.932,131.35,344.131,126.853,344.131z"
                        />
                        <path
                            style={{ fill: "#573A32" }}
                            d="M232.76,318.412c-1.024-0.222-2.022-0.324-3.021-0.324l-4.429,0.529l-2.074,1.178
		c-3.354,1.929-5.598,5.171-6.246,8.875c-1.476,6.75-3.977,11.401-7.552,14.097c-3.174,2.372-7.629,3.575-13.252,3.575
		c-7.501,0-12.979-2.347-17.271-7.398c-4.975-5.854-7.501-14.754-7.501-26.479c0-11.426,2.551-20.275,7.475-26.197
		c4.497-5.222,10.001-7.671,17.297-7.671c5.726,0,10.172,1.178,13.602,3.575c3.524,2.475,5.726,6.221,6.724,11.273
		c0.896,5.103,3.678,7.876,5.572,9.122c2.125,1.502,4.599,2.304,7.151,2.304l2.876-0.324c3.251-0.725,6.101-2.603,8.098-5.453
		c1.929-2.876,2.671-6.221,2.125-10.027c-1.929-10.3-6.528-18.722-13.798-25.097c-8.226-7.023-19.123-10.573-32.35-10.573
		c-15.147,0-27.571,5.675-36.898,16.828c-9.199,10.803-13.85,25.028-13.85,42.249c0,17.604,4.676,31.923,13.824,42.479
		c9.301,11.025,21.726,16.597,36.924,16.597c13.278,0,24.201-3.849,32.452-11.426c6.903-6.246,11.648-14.729,14.174-25.25
		c1.126-5.026-0.375-8.678-1.698-10.65C239.237,321.211,236.335,319.205,232.76,318.412z"
                        />
                        <path
                            style={{ fill: "#573A32" }}
                            d="M265.349,272.332c-7.902,10.65-11.904,24.149-11.904,40.124c0,15.974,4.002,29.449,11.947,40.021
		c9.549,12.646,23.125,19.046,40.354,19.046c17.101,0,30.626-6.4,40.175-19.004c8.149-10.598,12.254-24.073,12.254-40.073
		c0-15.974-4.096-29.5-12.228-40.226c-9.6-12.527-23.1-18.85-40.201-18.85C288.542,253.379,274.966,259.736,265.349,272.332z
		 M325.568,287.658c4.403,6.025,6.622,14.379,6.622,24.798c0,10.351-2.253,18.722-6.622,24.798
		c-4.548,6.272-10.871,9.199-19.823,9.199c-9.028,0-15.326-2.927-19.797-9.148c-4.326-6.05-6.528-14.404-6.528-24.849
		c0-10.522,2.202-18.876,6.554-24.875c4.446-6.221,10.752-9.148,19.772-9.148C314.697,278.433,320.994,281.36,325.568,287.658z"
                        />
                        <path
                            style={{ fill: "#573A32" }}
                            d="M500.681,8.387c-1.562-4.25-5.291-7.373-9.839-8.201l-2.159-0.179c-3.772,0-7.322,1.621-9.754,4.446
		c-8.286,9.677-31.223,13.722-53.478,17.647c-31.403,5.555-70.613,12.979-93.961,40.226c-12.51-27.895-38.528-50.458-61.423-61.124
		c-4.122-1.929-8.951-1.51-12.698,1.067c-3.678,2.577-5.828,6.955-5.47,11.52c0.623,8.004-9.856,20.855-19.985,33.28
		c-12.578,15.403-27.605,34.219-31.292,55.543C89.468,104.865,0.005,195.506,0.005,307.207c0,113.109,91.691,204.8,204.8,204.8
		s204.8-91.691,204.8-204.8c0-38.801-10.991-74.948-29.73-105.873c8.499,2.21,17.468,3.447,26.871,3.447
		c35.934,0,63.565-13.397,82.099-39.876C521.818,117.861,513.609,43.928,500.681,8.387z M251.746,63.239
		c8.474-10.385,16.674-20.42,21.47-30.805c18.534,12.723,35.78,32.879,39.543,54.221c2.466,13.995-1.399,27.443-10.914,40.192
		c-5.709-3.081-11.58-5.914-17.596-8.448c2.193-10.701,3.601-22.622,1.894-37.06c-0.828-7.023-7.194-12.041-14.217-11.204
		c-7.006,0.862-12.032,7.219-11.204,14.217c1.135,9.591,0.418,17.929-0.956,25.745c-10.692-2.978-21.666-5.257-32.99-6.468
		C229.824,91.442,239.109,78.744,251.746,63.239z M384.005,307.207c0,98.807-80.393,179.2-179.2,179.2s-179.2-80.393-179.2-179.2
		s80.393-179.2,179.2-179.2S384.005,208.4,384.005,307.207z M467.887,150.237c-13.449,19.2-34.014,28.954-61.141,28.954
		c-19.328,0-36.463-5.897-49.135-16.777c9.66-7.296,20.659-13.278,32.777-17.749l2.697-1.05c22.059-7.697,42.684-7.501,44.297-7.125
		l2.748,0.299c6.025,0,11.162-4.096,12.501-10.001c1.263-5.7-1.502-11.375-6.409-14.046c12.015-10.846,21.513-23.45,28.373-37.649
		c1.476-3.072,1.673-6.554,0.546-9.779c-1.126-3.226-3.447-5.828-6.528-7.296c-6.11-2.901-14.123-0.154-17.084,5.948
		c-10.197,21.129-27.221,37.299-51.797,49.126c1.51-10.675-0.154-21.274-4.975-30.925c-3.046-6.153-11.187-8.678-17.135-5.751
		c-3.072,1.527-5.359,4.147-6.451,7.398c-1.101,3.277-0.836,6.75,0.691,9.779c7.697,15.428-2.022,29.5-5.786,34.074
		c-8.422,4.198-16.358,9.097-23.697,14.626c-4.361-9.498-6.025-19.977-4.813-30.797c5.41-48.802,47.616-56.252,92.339-64.154
		c19.098-3.379,37.325-6.579,51.575-13.602C490.082,70.433,489.383,119.534,467.887,150.237z"
                        />
                    </g>
                </svg>

                <div className="flex flex-col md:items-end">
                    <motion.p
                        className="font-alexandria uppercase text-3xl md:text-5xl"
                        initial={{ scaleX: 0, translateX: "-50%" }}
                        whileInView={{ scaleX: 1, translateX: 0 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        viewport={{ once: true }}
                    >
                        Use clean energy
                    </motion.p>
                    <motion.p
                        className="font-alexandria uppercase text-2xl text-trueGray-4"
                        initial={{ scaleX: 0, translateX: "-50%" }}
                        whileInView={{ scaleX: 1, translateX: 0 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        viewport={{ once: true }}
                    >
                        if it's available{" "}
                        <span className="hidden md:inline">in your area</span>
                    </motion.p>
                </div>
            </motion.div>

            <motion.div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-16 space-y-12 bg-cyan-9">
                <motion.p
                    initial={{ scaleX: 0, translateX: "-50%" }}
                    whileInView={{ scaleX: 1, translateX: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-jbm font-bold overflow-hidden uppercase text-trueGray-4"
                >
                    Even the <span className="text-white">smallest</span> thing
                    makes a <span className="text-white">huge</span> impact.
                </motion.p>
            </motion.div>

            <motion.div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-16 space-y-12 bg-dark-3">
                <motion.p
                    initial={{ scaleX: 0, translateX: "-50%" }}
                    whileInView={{ scaleX: 1, translateX: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    viewport={{ once: true }}
                    className="text-5xl text-center md:text-7xl font-alexandria font-bold flex flex-row items-center justify-start overflow-hidden uppercase"
                >
                    Do your part.
                </motion.p>

                <motion.p
                    initial={{ scaleX: 0, translateX: "-50%" }}
                    whileInView={{ scaleX: 1, translateX: 0 }}
                    transition={{ duration: 0.5, type: "spring", delay: 0.75 }}
                    viewport={{ once: true }}
                    className="text-5xl text-center md:text-7xl font-alexandria font-bold flex flex-row items-center justify-start overflow-hidden uppercase pt-8 md:pt-16"
                >
                    Let's repair our world,
                </motion.p>

                <motion.p
                    initial={{ scaleX: 0, translateX: "-50%" }}
                    whileInView={{ scaleX: 1, translateX: 0 }}
                    transition={{ duration: 0.5, type: "spring", delay: 1.5 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-alexandria text-cyan-4 font-bold flex flex-row items-center justify-start overflow-hidden uppercase"
                >
                    Together.
                </motion.p>
            </motion.div>

            <div className="w-full flex flex-row items-center justify-between p-4 px-8 font-alexandria">
                <div className="w-full flex flex-col items-start justify-center">
                    <p className="font-bold">Created by Jacob Sapoznikow</p>
                    <p className="text-sm text-trueGray-3">
                        Built with{" "}
                        <a
                            href="https://astro.build/"
                            target="_blank"
                            className="text-blue-4 hover:underline"
                        >
                            Astro
                        </a>
                        ,{" "}
                        <a
                            href="https://react.dev/"
                            target="_blank"
                            className="text-blue-4 hover:underline"
                        >
                            React
                        </a>
                        , and{" "}
                        <a
                            href="https://motion.dev/"
                            target="_blank"
                            className="text-blue-4 hover:underline"
                        >
                            Motion
                        </a>
                    </p>
                    <p className="text-sm text-trueGray-3">
                        Icons from{" "}
                        <a
                            href="https://www.svgrepo.com/"
                            target="_blank"
                            className="text-blue-4 hover:underline"
                        >
                            SVG Repo
                        </a>
                    </p>
                </div>
                <a
                    href="https://github.com/RedstoneWizard08/EnvironmentWebsite"
                    target="_blank"
                    className="group"
                >
                    <svg
                        height="24px"
                        viewBox="0 0 20 20"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                        <title>github [#142]</title>
                        <desc>Created with Sketch.</desc>
                        <defs></defs>
                        <g
                            id="Page-1"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                        >
                            <g
                                id="Dribbble-Light-Preview"
                                transform="translate(-140.000000, -7559.000000)"
                                fill="#ffffff"
                                className="group-hover:fill-trueGray-4 transition-all"
                            >
                                <g
                                    id="icons"
                                    transform="translate(56.000000, 160.000000)"
                                >
                                    <path
                                        d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                                        id="github-[#142]"
                                    ></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </a>
            </div>
        </AnimatePresence>
    );
};

export default MainPage;
