import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import Cards from "./components/Cards";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory]=useState(filterData[0].title)
  console.log('object')
  async function fetchData() {
    setLoading(true);
    try {
      let respose = await fetch(apiUrl);
      let output = await respose.json();
      // output-->
      setCourses(output.data);
    } catch (error) {
      toast.error("somethig went wrong");
      console.log(error)
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar />
      </div>
      <div className="bg-bgDark2">
        <Filters filterData={filterData} category={category} setCategory={setCategory}/>
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {loading ? <Spinner /> : <Cards courses={courses} category={category} />}
      </div>
    </div>
  );
};

export default App;
