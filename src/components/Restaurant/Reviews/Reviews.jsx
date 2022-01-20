import React, {useState, useEffect} from 'react';

//redux
import {useDispatch, useSelector} from 'react-redux';
import { getReview } from '../../../redux/reducer/review/review.action';

//components
import ReviewCard from "./ReviewCard";
import AddReviewCard from './AddReviewCard';


function Reviews() {

    const [reviews, setReviews] = useState([]);

    const dispatch = useDispatch();

    const reduxState = useSelector((globalState) => globalState.restaurant.selectedRestaurant.restaurant);

    useEffect(() => {
        reduxState && dispatch(getReview(reduxState._id)).then((data) => {
            setReviews(data.payload.reviews);
        })
    }, [reduxState])

    return (
        <>
         <div className='w-full h-full flex-col md:flex gap-5 md:flex-row relative'>
             <div className='w-full md:w-8/12 flex flex-col gap-3'>
                 <div className='md:hidden mb-4'>
                     <AddReviewCard />
                 </div>
                 {reviews.map((review)=>(
                     <ReviewCard {...review} />
                 ))}
             </div>
             <aside style={{height: "fit-content"}} className='hidden md:flex items-start md:w-4/12 rounded-xl sticky top-2 bg-white p-4 shadow-md flex-col gap-3'>
                 <AddReviewCard/>
             </aside>
             </div>   
        </>
    )
}

export default Reviews
