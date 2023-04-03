import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;
  console.log("All courses", courses);
  const [likedCourses, setLikedCourses] = useState([]);
  // map() applied on array always. so, 1st we use forEach() for every array of object
  // then again apply forEach() for particular array of object. && object.value() focus only all the value avoid keys.

  function getCourses() {
    let allCourses = [];

    if (category === "All") {
      Object.values(courses).forEach((array) => {
        array.forEach((couseData) => {
          allCourses.push(couseData);
        });
      });
      return allCourses;
    } else {
      // I will print only specified category data
      return courses[category];
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((sigleCourse) => {
        return (
          <>
            {courses.length === 0 ? (
              "No data found"
            ) : (
              <Card
                key={sigleCourse.id}
                sigleCourse={sigleCourse}
                likedCourses={likedCourses}
                setLikedCourses={setLikedCourses}
              />
            )}
          </>
        );
      })}
    </div>
  );
};

export default Cards;
