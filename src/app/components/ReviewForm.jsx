import { useState, useRef } from "react";

export default function ReviewForm({ reviewFormRef }) {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const nameRef = useRef(null);
  const reviewRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value.trim();
    const reviewText = reviewRef.current.value.trim();

    if (!name || !reviewText || rating === 0) {
      alert("Please complete all fields and select a rating!");
      return;
    }

    const newReview = { name, reviewText, rating };

    setReviews((prev) => [newReview, ...prev.slice(0, 3)]); 

    nameRef.current.value = "";
    reviewRef.current.value = "";
    setRating(0);
  };

  return (
    <div className="flex flex-col items-center">
     
      {/* Review Form Section */}
      <section ref={reviewFormRef} className="max-w-2xl mx-auto mt-10 p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
          Write a Review
        </h3>
        <form onSubmit={handleSubmit}>
          {/* Star Rating */}
          <div className="flex justify-center space-x-1 mb-4">
            {[...Array(5)].map((_, index) => {
              const starValue = index + 1;
              return (
                <span
                  key={index}
                  className={`text-2xl cursor-pointer ${
                    starValue <= (hover || rating) ? "text-yellow-500" : "text-gray-400"
                  }`}
                  onMouseEnter={() => setHover(starValue)}
                  onMouseLeave={() => setHover(0)}
                  onClick={() => setRating(starValue)}
                >
                  ★
                </span>
              );
            })}
          </div>

          <input ref={nameRef} type="text" placeholder="Name" className="w-full p-2 border rounded-md mb-3" required />
          
          <textarea ref={reviewRef} placeholder="Review" className="w-full p-2 border rounded-md mb-3" required></textarea>

          <button type="submit" className="w-50 bg-[#bf5e35] text-white p-2 py-3 rounded-md hover:bg-orange-600 transition">
            Submit Review
          </button>
        </form>
      </section>

      {/* Reviews Section */}
      <section className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg max-w-6xl">
  <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">
    Recent Reviews
  </h3>
  {reviews.length === 0 ? (
    <p className="text-gray-500 text-center">No reviews yet.</p>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {reviews.map((review, index) => (
        <div key={index} className="border p-4 rounded-lg shadow-md bg-gray-50">
          <p className="font-semibold text-gray-800">{review.name}</p>
          <div className="flex space-x-1 text-yellow-500">
            {[...Array(review.rating)].map((_, idx) => (
              <span key={idx}>★</span>
            ))}
          </div>
          <p className="text-gray-600">{review.reviewText}</p>
        </div>
      ))}
    </div>
  )}
</section>


    </div>
  );
}
