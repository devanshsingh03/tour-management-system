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

import { useLocation } from "react-router-dom";
import { ALL_TOURS } from "../data/tours";

const TourDetails = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace("/", "");
  const tour = ALL_TOURS[slug];

  if (!tour) return <h2>Tour not found</h2>;

  return (
    <div style={{ padding: 24 }}>
      <img src={tour.images[0]} width="100%" height="350" />
      <h1>{tour.title}</h1>
      <p>{tour.location}</p>
      <p>{tour.description}</p>
      <h3>₹{tour.price}</h3>
    </div>
  );
};

export default TourDetails;
