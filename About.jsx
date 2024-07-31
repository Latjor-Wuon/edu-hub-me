import React from "react";

const About = () => {
    return (
        <div className="min-h-screen p-8 bg-gray-100">
            <h1 className="text-5xl mb-8 font-bold text-center">About Us</h1>

            <section className="flex flex-col md:flex-row items-center mb-16">
                <img
                    src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGVkdWNhdGlvbnxlbnwwfHx8fDE2MjY2NzU5OTM&ixlib=rb-1.2.1&q=80&w=800"
                    alt="Empowering Youth"
                    className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0 md:mr-8"
                />
                <div className="md:w-1/2">
                    <h2 className="text-3xl mb-4 font-semibold">Mission Statement</h2>
                    <p className="text-lg mb-4">
                        Empowering Youth, Building Futures: Trailblazing New Horizons
                        Harnessing technology-driven solutions to break down barriers to learning,
                        bridge educational gaps, and revolutionize the education system. The EduEmpower
                        platform aims to provide educational opportunities to all people in South Sudan
                        without discrimination, ensuring equitable access to quality education and
                        fostering a brighter future for the nation's youth.
                    </p>
                </div>
            </section>

            <section className="flex flex-col md:flex-row items-center mb-16">
                <div className="md:w-1/2">
                    <h2 className="text-3xl mb-4 font-semibold">Vision Statement</h2>
                    <p className="text-lg mb-4">
                        A Vibrant and Educated South Sudan. EduEmpower envisions a South Sudan where
                        every young person has access to quality education, irrespective of their
                        background or circumstances. By leveraging innovative technologies and
                        comprehensive support systems, we aim to create a well-educated, empowered,
                        and forward-thinking generation that can drive sustainable development and
                        peace in the nation.
                    </p>
                </div>
                <img
                    src="https://images.unsplash.com/photo-1565728744382-61accd4aa148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIzfHxlZHVjYXRpb258ZW58MHx8fHwxNjY2NzU5OTM&ixlib=rb-1.2.1&q=80&w=800"
                    alt="Vision"
                    className="w-full md:w-1/2 rounded-lg md:ml-8"
                />
            </section>

            <section className="mb-16">
                <h2 className="text-3xl mb-8 font-semibold text-center">Problem Statement</h2>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8">
                        <p className="text-lg mb-4">
                            In the wake of decades-long civil war, South Sudan has endured significant socio-economic
                            and political turmoil. This has led to the displacement of 2.3 million people internally
                            and 2.4 million refugees in neighboring countries. As a result, access to both foundational
                            and higher education for young people has been severely obstructed, leading to a widespread
                            illiteracy crisis affecting over 70% of the population, according to UNESCO and UNICEF (2023).
                        </p>
                        <blockquote className="italic border-l-4 border-blue-500 pl-4">
                            "In South Sudan, more than 70% of the adult population is illiterate. This puts individuals at
                            a disadvantage when it comes to finding employment. A lack of education among poor communities
                            ultimately creates a cycle of social oppression" (The Borgen Project, 2023).
                        </blockquote>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1584697964402-c1760877f3d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHxlZHVjYXRpb258ZW58MHx8fHwxNjY2NzU5OTM&ixlib=rb-1.2.1&q=80&w=800"
                        alt="Problem Statement"
                        className="w-full md:w-1/2 rounded-lg md:ml-8"
                    />
                </div>
            </section>

            <section>
                <h2 className="text-3xl mb-8 font-semibold text-center">Solution</h2>
                <div className="flex flex-col md:flex-row items-center">
                    <img
                        src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGVkdWNhdGlvbnxlbnwwfHx8fDE2MjY2NzU5OTM&ixlib=rb-1.2.1&q=80&w=800"
                        alt="Solution"
                        className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0 md:mr-8"
                    />
                    <div className="md:w-1/2">
                        <p className="text-lg mb-4">
                            Bridging this gap will result in a reduction in illiteracy and support the professional development
                            of young people. EduEmpower is a comprehensive, technology-driven platform designed to provide equitable
                            educational opportunities to all people in South Sudan, regardless of their background or circumstances.
                            It addresses the significant challenges faced by South Sudan in providing accessible and quality educational
                            opportunities to its population. EduEmpower offers a range of features and services aimed at empowering
                            individuals with knowledge and skills, fostering their personal and professional growth.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
