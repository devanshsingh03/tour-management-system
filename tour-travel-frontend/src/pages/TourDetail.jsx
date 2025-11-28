// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";


// export default function TourDetail() {
// const { slug } = useParams();
// const [tour, setTour] = useState(null);


// useEffect(() => {
// axios.get(`http://localhost:5000/api/tours/${slug}`).then(res => {
// setTour(res.data);
// });
// }, [slug]);


// if (!tour) return <div className="pt-24 px-6">Loading...</div>;


// return (
// <div className="pt-24 px-6">
// <h1 className="text-4xl font-bold">{tour.title}</h1>
// <img
// className="w-full max-w-3xl mt-6 rounded"
// src={tour.images?.[0] || "https://via.placeholder.com/600"}
// />
// <p className="mt-5 text-lg">{tour.description}</p>
// <div className="mt-4 text-xl font-semibold">Price: ₹{tour.pricePerPerson}</div>
// </div>
// );
// }