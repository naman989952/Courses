import React from "react";
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
const Card = (props) => {
  let course = props.sigleCourse;
  let likedCourses=props.likedCourses;
  let setLikedCourses=props.setLikedCourses;

  function clickHandler(){
    if(likedCourses.includes(course.id)){
      // if they already liked then we use this
      setLikedCourses((prev)=>prev.filter((CourseId)=>(CourseId !== course.id)))
      toast.warning("Liked removed")
    }
    else{
      // If they not liked already then we insert the courses into liked courses
      if(likedCourses.length === 0){
        setLikedCourses([course.id])
      }
      else{
        // If non-empty then we store previous curses and new liked courses
        setLikedCourses((prev)=>[...prev, course.id])
      }
      toast.success("Liked Successfully")
    }
  }


  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url} alt="img"></img>

        <div
          className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center"
        >
          <button onClick={clickHandler}>
            {
              !likedCourses.includes(course.id) ? (<FcLikePlaceholder fontSize="1.75rem" />):( <FcLike fontSize="1.75rem" />)
            }
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="mt-2 text-white">
          {
            course.description.length > 100 ? (course.description.substring(0,100)) + " ...." : (course.description)
          }
        </p>
      </div>
    </div>
  );
};

export default Card;
