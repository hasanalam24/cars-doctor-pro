
const Banner = () => {
    return (
        <div className="container mx-auto mt-10 ">
            <div className="carousel w-full  h-[90vh] ">
                {
                    banners.map((banner, idx) => <div
                        style={{
                            backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7),rgba(0,0,0,0.3)),url(/assets/images/banner/${idx + 1}.jpg)`
                        }}
                        key={idx} id={`slide${idx + 1}`} className="carousel-item relative w-full bg-top bg-no-repeat bg-cover rounded-lg">
                        <div className="h-full w-full flex items-center pl-16 text-white">
                            <div className="space-y-5">
                                <h2 className="text-4xl font-semibold ">{banner.title}</h2>
                                <p>{banner.description}</p>
                                <button className="btn btn-primary text-white mr-4">Discover More</button>
                                <button className="btn btn-primary btn-outline">Discover More</button>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform bottom-12 right-12 gap-5 text-white ">
                            <a href={banner.prev} className="btn btn-circle hover:bg-orange-500">❮</a>
                            <a href={banner.next} className="btn btn-circle hover:bg-orange-500">❯</a>
                        </div>
                    </div>)
                }


            </div>
        </div>
    );
};

const banners = [
    {
        title: 'Affortable Price for Car servicing',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, tempora.',
        next: '#slide2',
        prev: '#slide4',

    },
    {
        title: 'Affortable Price for Car servicing',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, tempora.',
        next: '#slide3',
        prev: '#slide1',

    },
    {
        title: 'Affortable Price for Car servicing',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, tempora.',
        next: '#slide4',
        prev: '#slide2',

    },
    {
        title: 'Affortable Price for Car servicing',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, tempora.',
        next: '#slide1',
        prev: '#slide3',

    },
]

export default Banner;