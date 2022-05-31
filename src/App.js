// import React from "react"
// import Info from "./components/InfoSP"
// import About from "./components/AboutSP"
// import Interest from "./components/InterestSP"
// import Footer from "./components/FooterSP"
// import "./solop.css";


// export default function App() {
//     return (
//       <div className="card">
//         <div className='incard'>
//           <Info />
//           <About />
//           <Interest />
//           <Footer />
//         </div>
//       </div>
//     )
//   }


//   //MAP FUNCTION

//   export default function App() {
//     const cards = data.map(item => {
//       return (
//         <Card
//           key={item.id} 
//           img={item.coverImg}
//           rating={item.status.rating}
//         />
//       )
//     })

//     return (
//       <div>
//         {cards}
//       </div>
//     )
//   }

import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"
import './solo2.css';

export default function App() {
    const cards = data.map(item => {
        return (
            <Card 
              key={item.id}
              item={item}
            />
        )
    })        
    
            // <Hero />
    return (
        <div className='overall'>
            <div className="box">
                <Navbar />
                <section className="">
                    {cards}
                </section>
            </div>
        </div>
    )
}
