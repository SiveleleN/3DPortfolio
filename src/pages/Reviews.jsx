import React from "react";

import { CTA } from "../components";
import { reviews } from "../constants";

const Reviews = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Reviews
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        Explore testimonials from colleagues, management, and lectures about my work.
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {reviews.map((review) => (
          <div className='lg:w-[400px] w-full' key={review.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${review.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={review.imageUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {review.name}
              </h4>
              <p className='mt-2 text-slate-500'>{review.testimonial}</p>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Reviews;
