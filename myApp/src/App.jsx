import { useState, useEffect, useRef } from 'react'
import './App.css'
import axios from 'axios';
import * as cheerio from 'cheerio'; 
import {motion} from 'framer-motion'; 
import $ from 'jquery'; 

function AddPoem(){
  useEffect(() => {
    const form = document.getElementById("form"); 
    const poem = document.getElementById("poem"); 
    const text = document.getElementById("text"); 


    form.addEventListener("submit", async (e) => {
      e.preventDefault(); 
      $("#text").empty()
      if(poem.value){
        let target = axios.get("https://obj-zk3fxzdevq-uc.a.run.app?text=" + poem.value + ""); 
        target.then((value) => {
          let x = document.createElement("div"); 
          x.innerText = value["data"]; 
          x.classList.add("texts"); 
          text.appendChild(x); 
          text.classList.add("scroller")
        })
        poem.value = ""
      }
    })
  })
  return(
      <div className="w-[100%] h-[90%] mt-[2%] m-auto p-[0] flex flex-col align-middle justify-center text-center relative ">
        <div className="w-[100%] h-[80%] m-auto p-[0] relative flex flex-col align-middle justify-center text-center " id="text">

        </div>
        <form action="" className="w-[100%] h-[15%] m-auto p-[0] relative flex flex-row align-middle justify-center text-center " id="form" method="post" >
          <input type="text" id="poem" placeholder="enter a poem idea" className="w-[75%] h-[100%] m-auto p-[0] relative text-center bg-gray-900 text-white text-2xl  " />
          <input type="submit" id="submit" value="submit" className="w-[25%] h-[100%] m-auto p-[0] relative text-center bg-gray-500 text-black text-2xl" />
        </form>
      </div>
  )
}
export default function App(){
  const ref = useRef(); 
  return(
    <div className="relative w-[60%] h-[85%] m-auto p-[0] flex flex-col align-middle justify-centere text-center " ref={ref}>
      <div className="flex flex-row align-middle justify-center text-center min-w-[100%] min-h-[fit-content] m-auto p-[0] ">
        <h1 className="text-white text-3xl">Poemio - Poem creator</h1>
      </div>
      <div className="flex flex-row mt-[2%] align-middle justify-center text-center min-w-[100%] min-h-[fit-content] m-auto p-[0] ">
        <h1 className="text-white text-2xl">Please Be patient - openai needs some time</h1>
      </div>
      <AddPoem></AddPoem>
    </div>
  )
}