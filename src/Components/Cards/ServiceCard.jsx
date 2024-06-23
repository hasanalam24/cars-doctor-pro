import Image from "next/image";


const ServiceCard = ({ service }) => {

    const { title, img, price } = service

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            {/* <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
            <Image height={120} width={430} alt="service card photo" src={img} />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                <div className="card-actions justify-between items-center">
                    <p className="text-primary font-semibold">Price: ${price}</p>
                    <button className="btn btn-primary text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;