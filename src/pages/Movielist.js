import { useEffect } from "react";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";


export const Movielist = ({apiPath,title}) => {
    

    const {data : movies} = useFetch(apiPath);
    
    useEffect(()=>{
      document.title = `${title}`
    });
  
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex flex-wrap other-md:justify-start other-sm:justify-evenly  ">
          {movies.map((movie)=>(
            <Card key= {movie.id} movie = {movie}/>  
          ))}
          
        </div>
      </section>
    </main>
  )
}
