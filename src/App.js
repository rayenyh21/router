import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import Trailer from './Trailer';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [keyfilter,setKeyfilter]= useState("")
  const [newRate,setNewRate]= useState(1)
  const [movies,setMovies]= useState([

    { id: 1,
      main_img : "https://i.scdn.co/image/ab67616d0000b2733acfa77446066f0655677c36" ,
      second_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsXTqUWldxHfSRI1D5_k185c_a3HCaRIiwR577OfXAZi6b6AAVZZVDVQPM8GlDAI54PTU&usqp=CAU" ,

      Date: "2019" ,
      Title: "John Wick: Chapter 3  Parabellum",
      Time: "115 min",
      Rate: 4,
      Genre: "Action, Crime, Thriller",
      Description: "John Wick is on the run after a bounty is placed on his head leading to intense action sequences and a deep dive into the underworld of assassins." ,
      trailer : "https://www.youtube.com/watch?v=xy8aJw1vYHo"
    },

    { id: 2,
      main_img : "https://resizing.flixster.com/8PNiwC2bpe9OecfYZSOVkvYC5vk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U5NGM0Y2Q1LTAyYTItNGFjNC1hNWZhLWMzYjJjOTdjMTFhOS5qcGc=" ,
      second_img:"https://i.guim.co.uk/img/media/7eb5189fd08acf4c6a97af28a5ffb826b6573839/34_0_4015_2412/master/4015.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=627b274e0e096c528affba80e77fb5fc" ,

      Date: "2021",
      Title: "Spider-Man: No Way Home",
      Time: " 126 min",
      Rate: 5 ,
      Genre: "Action, Adventure, Sci-Fi ",
      Description: "Peter Parker’s secret identity is revealed, leading him to seek help from Doctor Strange. The film features multiverse elements and appearances by past Spider-Man villains.",
 
     },
     {id: 3,
      main_img :"https://play-lh.googleusercontent.com/t_pFIb5HjZyCYR7ftAX_8dpVxJR9x7TQs0mzRSaH8teQfZdeglZfW-adxXbjJpXzodSv_O1-CE6zlncdx5o=w240-h480-rw" ,
      second_img:"https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Dune_Part_Two_poster.jpeg/220px-Dune_Part_Two_poster.jpeg" ,
 
      Date: "2021" ,
      Title:" Dune",
      Time: " 122min",
      Rate: 5 ,
      Genre: "Action, Adventure, Drama ",
      Description:" An epic adaptation of Frank Herbert’s sci-fi novel, following Paul Atreides as his noble family becomes embroiled in a conflict over the desert planet Arrakis." 
 
     },

     {id: 4,
      main_img :"https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10854488_p_v8_ac.jpg",
      second_img:"https://m.media-amazon.com/images/M/MV5BMTgxMDkzMDM1OF5BMl5BanBnXkFtZTgwMzI3NTE2NTE@._V1_.jpg",

      Date:"2015",
      Title: "Mad Max: Fury Road" ,
      Time: "133 min",
      Rate: 5,
      Genre: "Action, Adventure, Sci-Fi" ,
      Description:" In a post-apocalyptic wasteland, Max teams up with Furiosa to escape a tyrannical warlord, featuring high-octane action and spectacular visuals." ,
 
     },

     {id:5 ,
      main_img :"https://lh4.googleusercontent.com/proxy/MAMHOXpcT0PdTWjGuK_mbEWySddTDT-13JMW-R5heKNVkDgNIHmz8R2jHdz2R9ELMf70CVVZZTrmCzl8HF5INcm7PPgFvpDJdXYgnHU",
      second_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ZWyOOFi_jrieA_abUekzf1G1AuzQ0L8ybQ&s",

      Date: "2018",
      Title: "A Quiet Place" ,
      Rate: 4 ,
      Time: "135 min",
      Genre: "Horror, Drama, Sci-Fi" ,
      Description:" A family must live in silence to avoid blind monsters with acute hearing, creating a tense and unique survival horror experience." 
 
 
     },

     {id:6 ,
      main_img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJEs1yFQFgWrxiZahyK_1kVkdV8WeFheU0CA&s",
      second_img:"https://pbs.twimg.com/media/GJa57oTWUAAuj9D?format=jpg&name=4096x4096",
 
      Date:"2018 ",
      Title: "Hereditary" ,
      Time: "110 min",
      Rate: 4,
      Genre: "Horror, Drama",
      Description: "After the death of their secretive grandmother, a family uncovers dark secrets and faces disturbing supernatural occurrences.",
 
     },

     {id:7 ,
      main_img :"https://www.originalfilmart.com/cdn/shop/products/joker_2019_japanese_b2_original_film_art_5000x.jpg?v=1601474883",

      second_img:"https://d1fufvy4xao6k9.cloudfront.net/images/blog/posts/2024/01/thumb/screenshot_14.jpg",


      Date:"2019" ,
      Title: "Joker ",
      Time: "123 min",
      Rate: 5 ,
      Genre: "Crime, Drama, Thriller ",
      Description:" A dark and gritty origin story of the infamous comic book villain, exploring themes of mental illness and societal neglect."


     },

     {id: 8,
      main_img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9e0_4pVYKBCN1rOn0yhHVCWU_vXY8ooMiYW8xjA5FEmoyoavaLMqu2wj-JcCzNDfu-Mg&usqp=CAU",

      second_img:"https://thehighlandernews.com/wp-content/uploads/2020/10/6oE8DKWUzLkXe5jzEfyuFEieM0ZwGYfg8Yw2maas-675x900.jpeg",

      Date:"2020" ,
      Title: "The Trial of the Chicago 7",
      Time: " 117min",
      Rate: 4 ,
      Genre: "Drama, History, Thriller",
      Description:" A courtroom drama about the seven defendants charged with conspiracy and inciting riots during the 1968 Democratic National Convention.",

     },

     {id:9 ,
      main_img :"https://m.media-amazon.com/images/M/MV5BZjU0Yzk2MzEtMjAzYy00MzY0LTg2YmItM2RkNzdkY2ZhN2JkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg",

      second_img:"https://pyxis.nymag.com/v1/imgs/314/b3d/5bf3ef8f4762eb097b9467ff9b489661d9-jojo-rabbit-curtain-raiser.rsquare.w400.jpg",

      Date: "2019" ,
      Title: "Jojo Rabbit",
      Time: "125 min",
      Rate: 4,
      Genre: "Comedy, Drama, War" ,
      Description: "A young boy in Nazi Germany discovers that his mother is hiding a Jewish girl in their home, and his imaginary friend, Adolf Hitler, helps him come to terms with the situation."
     },
    ]) 
    const filter= (text) => {
      setKeyfilter(text)
  
    }

    const setRate= (Rate) => {
      setNewRate(Rate)
    }
    
  
     const addMovie =(movie)=>{
      setMovies(movies.contact(movie))
     }     
    
    

  return (

    <div className="App">
      <Filter filter={ filter} setRate={setRate} newRate={newRate}/>
      <Routes>
        <Route path="/trailer/:id " element ={<Trailer movie={movies}/>}/>
        <Route path='/'  element={  <MovieList
               addMovie={addMovie}movies={movies.filter(el=> el.Rate >= newRate &&el.Title.toLowerCase().includes(keyfilter.toLowerCase()))}/>
              } />  

        </Routes >
      
    </div>
  )
}






export default App;
