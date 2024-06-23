import Image from "next/image";

const About = () => {
    return (
        <div className="mt-10 ">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    <div className="relative">
                        <Image src={`/assets/images/about_us/person.jpg`} width={500} height={900} alt="about us photo" className="w-[520px]  h-[500px]" />
                        <div className="">
                            <Image width={500} height={500} src={`/assets/images/about_us/parts.jpg`} alt="about us photo parts" className="absolute w-[350px] h-[350px] top-[45%] left-[40%] border-4 border-white " />
                        </div>
                    </div>
                    <div className="space-y-5">
                        <p className="text-[#FF3811]">About Us</p>
                        <div className="space-y-5">
                            <h2 className="text-4xl font-semibold w-3/4">
                                We are qualified & of experience in this field
                            </h2>
                            <p className="w-3/4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br />
                                <br />
                                the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                            </p>
                            <button className="btn btn-primary text-white">Get More Info</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;