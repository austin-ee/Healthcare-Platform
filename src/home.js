import { useState, useEffect, useRef } from "react";
      //landing page
  export const Title=()=>{
      return(
        <div className="fixed top-0 right-0 left-0 z-50 h-[160px] bg- shadow bg-gray-200">
          <div className="bg-indigo-500 flex justify-between px-3 sm:h-[50px] py-3 pl-1 pr-4">
            <span className="text-gray-300 font-bold text-[19px]"
                  style={{
                    fontFamily:'Segoe, san serif',
                    boxShadow:'0 4px 15px rgba(248, 73, 105, 0.3)'
                  }}>WEST HILLS COMMUNITY HOSPITAL</span>
            <div className="flex gap-4">
              <span className="flex gap-1 text-white text-[13px]">
              <svg viewBox="0 0 24 24" className="sm:h-5 sm:w-5 h-4 w-3"fill="none" xmlns="http://www.w3.org/2000/svg" 
                 stroke="#ffffff" transform="rotate(0)"><g id="SVGRepo_bgCarrier" 
                 strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" 
                 strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> 
              <path fillRule="evenodd" clipRule="evenodd" d="M17.3545 22.2323C15.3344 21.7262 11.1989 20.2993 7.44976 16.5502C3.70065 12.8011 2.2738 8.66559 1.76767 6.6455C1.47681 5.48459 2.00058 4.36434 2.88869 3.72997L5.21694 2.06693C6.57922 1.09388 8.47432 1.42407 9.42724 2.80051L10.893 4.91776C11.5152 5.8165 11.3006 7.0483 10.4111 7.68365L9.24234 8.51849C9.41923 9.1951 9.96939 10.5846 11.6924 12.3076C13.4154 14.0306 14.8049 14.5807 15.4815 14.7576L16.3163 13.5888C16.9517 12.6994 18.1835 12.4847 19.0822 13.1069L21.1995 14.5727C22.5759 15.5257 22.9061 17.4207 21.933 18.783L20.27 21.1113C19.6356 21.9994 18.5154 22.5232 17.3545 22.2323ZM8.86397 15.136C12.2734 18.5454 16.0358 19.8401 17.8405 20.2923C18.1043 20.3583 18.4232 20.2558 18.6425 19.9488L20.3056 17.6205C20.6299 17.1665 20.5199 16.5348 20.061 16.2171L17.9438 14.7513L17.0479 16.0056C16.6818 16.5182 16.0047 16.9202 15.2163 16.7501C14.2323 16.5378 12.4133 15.8569 10.2782 13.7218C8.1431 11.5867 7.46219 9.7677 7.24987 8.7837C7.07977 7.9953 7.48181 7.31821 7.99439 6.95208L9.24864 6.05618L7.78285 3.93893C7.46521 3.48011 6.83351 3.37005 6.37942 3.6944L4.05117 5.35744C3.74413 5.57675 3.64162 5.89565 3.70771 6.15943C4.15989 7.96418 5.45459 11.7266 8.86397 15.136Z" fill="#ffffff"></path> 
              </g></svg>
          +254706602784
              </span>
             <span className="flex gap-1 text-white text-[13px]">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="sm:h-5 sm:w-5 h-4 w-3 sm:mr-1"
               fill="white">
             <path d="M12 13.5l-8.5-5h17L12 13.5zM22 4H2C.89 4 0 4.89 0 6v12c0 1.1.89 2 2 2h20c1.11 0 2-.9 2-2V6c0-1.11-.89-2-2-2zm0 14H2V6h20v12z"/>
             </svg>
          westhillshospital2021@gmail.com
             </span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 ml-4 mr-0 w-5 sm:hidden"
              fill="none" stroke="white"strokeWidth="2"strokeLinecap="round"strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="15" y2="15"></line>
           </svg>
         </div>
       </div>
    {/**End of top part */}
       <div className="h-[100px] flex bg-white sm:gap-8 border-b-2 border-gray-100 pl-4">
         <img src="west logo.jpg" alt="logo" loading="lazy" className="w-[100px] h-[90px] rounded-full my-auto"/>
         <div className="flex gap-2 justify-center p-2 sm:gap-4 m-auto text-[16px] font-[arial]"> 
           <span className="text-[#1E98D7] cursor-default hover:text-[#81D3F8]">Home</span>
           <span className="text-[#1E98D7] cursor-default hover:text-[#81D3F8]">About us</span>
           <span className="text-[#1E98D7] cursor-default hover:text-[#81D3F8]">Services</span>
           <span className="text-[#1E98D7] cursor-default hover:text-[#81D3F8]">Contacts</span>
           <span className="text-[#1E98D7] cursor-default hover:text-[#81D3F8]">Location</span>
         </div>
       <div className="flex hidden sm:block justify-end mr-3">
          <Search/>
       </div>
       </div>
   </div>)
  }
  export const LandingPagee=()=>{
    const totalSlides=info.length
    const [currentSlide,setCurrentSlide]=useState(0);
    const [containerWidth,setContainerWidth]=useState(0);
    const containerRef=useRef(null);
    useEffect(()=>{
         const interval=setInterval(()=>{setCurrentSlide(prev=>((prev+1)%totalSlides))},
         4000)
         return ()=>{clearInterval(interval);}
     },[totalSlides]
    )
    useEffect(()=>{
      const updateWidth=()=>{
        if(containerRef.current){
          setContainerWidth(containerRef.current.offsetWidth);
        }
      };
      updateWidth();
      window.addEventListener('resize',updateWidth);
      return ()=>window.removeEventListener('resize',updateWidth);
    },[])
    function prevSlide(){
        setCurrentSlide(prev=>((prev-1+totalSlides)%totalSlides))
     }
    function nextSlide(){
      setCurrentSlide(prev=>((prev+1)%totalSlides))
     }
    return(
      <div className="overflow-y-auto mt-[160px] flex-1">
          <div className="w-full h-[400px] bg-white bg-[url(./images/hospbgg.jpg)] flex-row place-content-center">
               <span className="block flex justify-center text-[24px] text-gray-600">
                 Your health is our priority, and we are dedicated to providing <span className="text-indigo-800 ml-1">exceptional medical care with compassion and expertise.</span>
               </span>
               <span className="block flex justify-center mt-3 text-[28px] text-gray-600">
                 Welcome to West Hills
               </span>
          </div>
          <div className={`relative overflow-hidden shadow-lg px-[10px] h-[430px] bg-[#ffffff]`} ref={containerRef}>
           <div style={{
              display:"flex",
              gap:'4',
              width:`${totalSlides*containerWidth}px`,
              transform:`translateX(-${currentSlide*containerWidth}px)`,
              transition:"transform 0.8s ease"}}>
              <Display param={info[0]} contWidth={containerWidth}/>
              <Display param={info[1]} contWidth={containerWidth}/>
              <Display param={info[2]} contWidth={containerWidth}/>
              <Display param={info[3]} contWidth={containerWidth}/>
            </div>
            <div className="flex justify-between font-bold text-[40px] absolute bottom-[48%]">
              <button disabled={currentSlide===0} onClick={prevSlide}>{'<'}</button>
              <button disabled={currentSlide===totalSlides-1} onClick={nextSlide}>{'>'}</button>
            </div>
          </div>
           {/**Services */}
        <div className="bg-white w-full h-fit mt-1 py-4 sm:p-4">
          <span className="flex justify-center text-gray-600 mb-3 mt-[60px] font-bold text-[28px]"> Our Core Services</span>
          <span className="flex justify-center text-indigo-600 text-[18px]">
            Caring for you with a range of medical services tailored to your individual health needs.</span>
          <div className="flex flex-wrap sm:flex justify-evenly my-5">
            <ServiceDisplayR param={service[0]}/>
            <ServiceDisplayL param={service[1]}/>
            <ServiceDisplayR param={service[2]}/>
            <ServiceDisplayL param={service[3]}/>
            <ServiceDisplayR param={service[4]}/>
          </div>
       </div>
      {/**End of services */}
      <WhyUs/>
      {/**news and events */}
       <NewsEvents/>
      {/**Patners */}
      <Partners/>
      {/**footer */}
      <div className="w-full h-[250px] bg-[#191970] pb-4">
         <div className="h-[150px] sm:32 flex  justify-between flex-wrap sm:pl-8 px-1 sm:px-5 py-2 text-white">
           <section>
            <span className="text-gray-400 mb-2">Quick Links:</span>
            <span className="block text-[14px] cursor-default hover:text-[#02A7F0]">About us</span>
            <span className="block text-[14px] cursor-default hover:text-[#02A7F0]">Location</span>
            <span className="block text-[14px] cursor-default hover:text-[#02A7F0]">Our branches</span>
            <span className="block text-[14px] cursor-default hover:text-[#02A7F0]">Sign in</span>
           </section>
           <div className="sm:flex justify-evenly w-[50%]">
             <section className=" ">
               <span className="text-gray-400 mb-2">Contact us:</span>
               <span className="block text-[14px]">+254712345678</span>
               <span className="block text-[14px]">+254712345678</span>
              <span className="block text-[14px]">+254712345678</span>
              </section>
             <section>
              <span className="text-gray-400 mb-2">Email us:</span>
              <span className="block text-[14px]">westhill@gmail.com</span>
              <span className="block text-[14px]">org.westhill@gmail.com</span>
            </section>
            </div>
         </div>
         
         <div className="border-t px-3 flex justify-between border-gray-500 text-white text-[13px] h-[50px]">
            <p>Copyright &copy; 2025 Westhill.com. All rights reserved.</p> 
            <div className="p-2 w-20 flex justify-evenly">
            <svg fill="#FFFFFF" viewBox="0 0 256 256" id="Flat" className="h-8 w-8 flex p-1 justify-center hover:bg-[blue]" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" 
              strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
             <path d="M128.00049,28A100.02594,100.02594,0,0,0,41.11475,177.53908l-9.0044,31.51661a11.99971,11.99971,0,0,0,14.835,14.834l31.5166-9.00391A100.00677,100.00677,0,1,0,128.00049,28Zm0,192a91.87082,91.87082,0,0,1-46.95264-12.86719,3.99494,3.99494,0,0,0-3.14355-.4082l-33.15723,9.47363a3.99979,3.99979,0,0,1-4.94434-4.94531l9.47266-33.15625a4.00111,4.00111,0,0,0-.4082-3.14355A92.01077,92.01077,0,1,1,128.00049,220Zm50.51123-73.457-20.45947-11.69141a12.01054,12.01054,0,0,0-12.12745.12891l-13.80664,8.28418a44.04183,44.04183,0,0,1-19.38232-19.38281l8.28369-13.80664a12.0108,12.0108,0,0,0,.12891-12.127l-11.69092-20.46A10.91584,10.91584,0,0,0,100,72a32.00811,32.00811,0,0,0-32,31.88086A84.001,84.001,0,0,0,151.999,188h.12012A32.00842,32.00842,0,0,0,184,156,10.913,10.913,0,0,0,178.51172,146.543ZM152.10791,180h-.1084A75.99972,75.99972,0,0,1,76,103.8926,23.997,23.997,0,0,1,100,80a2.89975,2.89975,0,0,1,2.51172,1.457L114.20264,101.918a4.00418,4.00418,0,0,1-.043,4.042l-9.38916,15.64844a3.9987,3.9987,0,0,0-.21826,3.69824,52.04112,52.04112,0,0,0,26.1416,26.1416,3.99707,3.99707,0,0,0,3.69873-.21875L150.04,141.84084a4.006,4.006,0,0,1,4.043-.04394l20.46045,11.69238A2.89712,2.89712,0,0,1,176,156,23.99725,23.99725,0,0,1,152.10791,180Z"></path> </g></svg>
             <svg viewBox="0 0 48 48" id="Layer_2" xmlns="http://www.w3.org/2000/svg" className="h-8 flex p-1 justify-center hover:bg-[blue]"
               fill="#FFFFFF"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path className="cls-1" d="M38.74,16.55v1c0,10.07-7.64,21.61-21.62,21.61A21.14,21.14,0,0,1,5.5,35.71a12.22,12.22,0,0,0,1.81.11,15.25,15.25,0,0,0,9.44-3.24,7.56,7.56,0,0,1-7.1-5.29,6.9,6.9,0,0,0,1.44.15,7.53,7.53,0,0,0,2-.27A7.57,7.57,0,0,1,7,19.72v-.1a7.42,7.42,0,0,0,3.44.94A7.54,7.54,0,0,1,8.05,10.5a21.58,21.58,0,0,0,15.68,7.94,6.38,6.38,0,0,1-.21-1.74,7.55,7.55,0,0,1,13.17-5.31,15.59,15.59,0,0,0,4.83-1.85,7.65,7.65,0,0,1-3.39,4.27,15.87,15.87,0,0,0,4.37-1.26,15.56,15.56,0,0,1-3.76,4Z"></path></g></svg>
             <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" 
               xmlnsXlink="http://www.w3.org/1999/xlink" className="h-7 flex p-1 justify-center hover:bg-[blue]"fill="#000000"><g 
               id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" 
              strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>facebook [#176]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-385.000000, -7399.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z" id="facebook-[#176]"> </path> </g> </g> </g> </g></svg>
             </div>
         </div>
      </div>
    </div>
    )
  }

  export const ServiceDisplayR =({param})=>{
    return(
      <div className="h-fit w-full py-[30px] my-3 px-[50px] flex bg-[#F5F5F5] justify-between rounded-[15px]">
        <div className={`h-[300px] w-[350px] bg-indigo-100 ml-4 mr-[40px] mb-4 rounded-bl-[100px] ${param.img} `}></div>
        <div className="flex-col justify-center my-auto text-pretty w-[600px] text-[18px] text-gray-600">
          <span className="text-[#02A7F0] font-bold p-1 flex text-[26px]">{param.title}</span>
          {param.msg}
        </div>
      </div>
    )
  }

  export const ServiceDisplayL=({param})=>{
    return(
      <div className="h-fit w-full py-[30px] my-3 px-[50px] flex bg-[#F5F5F5] justify-between rounded-[15px]">
        <div className="flex-col justify-center my-auto text-pretty w-[600px] text-[18px] text-gray-600">
            <span className="text-[#02A7F0] font-bold p-1 flex text-[26px]">{param.title}</span>
            {param.msg}
        </div>
        <div className={`h-[300px] w-[350px] bg-indigo-100 ml-4 mr-[40px] mb-4 rounded-br-[100px] ${param.img}`}></div>
      </div>
    )
  }

  export const Search=()=>{
    return(
      <div className="w-[400px] h-[40px] py-[1px] px-[15px] my-[10px] flex">
         <input type="text" className="border-[1px] w-[250px] h-[33px] px-[10px] py-[5px] rounded-s-[20px] 
          border-gray-300 outline-0 bg-[#FFFFFF]" placeholder="Enter Keywords"/>
        <div className="border-[1px] w-[35px] h-[33px] px-[2px] py-[2px] flex justify-center rounded-e-[20px] border-gray-300 outline-0 bg-[#FFFFFF]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" className="stroke-gray-500 w-[33px] h-[26px]">
          <circle cx="10.5" cy="10.5" r="4.5" /><line x1="21" y1="19" x2="15.6" y2="15.6" />
          </svg>
        </div>
     </div>
    );
}

const Display=({param,contWidth})=>{
  return(
    <div className={`flex gap-[60px] p-[20px] h-fit justify-center ${'w'+(contWidth)}`}>
      <div className="flex-col justify-center my-auto text-pretty w-[600px] text-[18px] text-gray-600">
          <span className="text-[#02A7F0] font-bold p-1 flex text-[26px] justify-center">{param.title}</span>
            <div className="text-center">{param.msg}</div> 
        </div>
      <img src={param.img} alt="carousel" loading="lazy" className="h-[400px] w-[550px]"/>
    </div>
  )
}

const WhyUs=()=>{
  return(
    <div className="h-[570px] w-full bg-gray-100 p-4 pt-9">
      <div className="flex-col place-items-center mb-[60px] mt-[40px] text-[28px] font-[600]">
          <span className="block">CHOOSE <span className="font-[300] italic">WEST HILLS</span> FOR <span className="font-[300] italic">HEALTHCARE</span></span>
          <span className="block my-1">  AFFORDABLiTY, COMPREHENSiVENESS <span className="font-[300] italic">AND</span> RELiABiLITY</span>
      </div>
      <div className="flex gap-8">
        <div className="mt-[30px]">
          <span className="block mb-[15px] flex justify-center"><img className="h-[70px] w-[70px]" loading="lazy" src="familycare.png" alt="care"/></span>
          <span className="block flex justify-center font-bold">Family-Owned Excellency</span>
          <span className="block flex text-center">Trust in a tradition of warmth and expertise, delivered with a personal touch.</span>
        </div>
        <div className="-mt-[10px]">
          <span className="block mb-[15px] flex justify-center"><img className="h-[60px] w-[60px]" loading="lazy" src="affordable.png" alt="best"/></span>
          <span className="block flex justify-center font-bold">Best Price Assurance</span>
          <span className="block text-center">Guaranteeing the lowest prices - we beat or match any competitor</span>
        </div>
        <div className="mt-[30px]">
          <span className="block mb-[15px] flex justify-center"><img className="h-[60px] w-[60px]" loading="lazy" src="toprated.png" alt="best"/></span>
          <span className="block flex justify-center font-bold">Top-Rated Expertise</span>
          <span className="block text-center">Highly reviewed, trained, and certified professionals ensuring quality service. </span>
        </div>
      </div>
    </div>
  )
}

const Partners=()=>{
  return(
    <div className="h-[300px] w-full bg-gray-200 p-5">
      <span className="block flex text-[22px] font-semibold text-[#228B22]">OUR PARTNERS</span>
      <div className="flex gap-4">
        <img src="sha.jpg" loading="lazy" alt="sha" className="h-[70px] w-[270px] rounded-md mr-4 mt-9"/>
        <img src="tuishi.jpg" loading="lazy" alt="sha" className="h-[150px] w-[150px] rounded-full"/>
        <img src="afya.jpg" loading="lazy" alt="sha" className="h-[70px] w-[200px] rounded-md ml-4 mt-9"/>
      </div>
    </div>
  )
}

const NewsEvents=()=>{
  return(
    <div className="h-[500px] w-full bg-[#ffffff] flex justify-center py-6">
      <div className="w-[40%] h-full bg-[#008080] rounded-s-lg p-3">
        <span>News</span>
      </div>
      <div className="w-[40%] h-full bg-[#3399FF] rounded-e-lg p-3">
        <span>Events</span>
      </div>
    </div>
  )
}

const service=[{img:'bg-[url(./images/outpatient.jpg)]',title:'OutPatient Care',msg: 'Need healthcare on the go? Our expert outpatient'+
   ' services are the answer. You\'ll receive quick care focused on lasting wellness from our dedicated'+
   ' professional team, keeping your life uninterrupted.'+
   'Quick visits, lasting wellness.'},{img:'bg-[url(./images/inpatient.jpg)]',title:'Inpatient Care',msg:
   'Our inpatient services provide comprehensive, round-the-clock care tailored to each patient\'s'+
   ' needs. From advanced diagnostics to personalized treatment plans, our dedicated team ensures you'+
   ' receive the best possible care. Our skilled medical staff monitors your progress closely, offering support every step of the way. We prioritize patient safety, comfort, and dignity throughout your stay. Your path to recovery begins here with our dedicated inpatient services.'},{
    img:'bg-[url(./images/immune.jpg)]',title:'Immunization',msg:'Protect your loved ones and community with our comprehensive immunization services! Our expert team provides safe, effective vaccines tailored to all age groups, ensuring you stay healthy year-round. Vaccinations are your best defense against preventable diseases and help build a healthier future for everyone. Walk in today and take a confident step towards safeguarding your well-being. Your health is our top priority—trust us to keep you protected!'
   },{img:'bg-[url(./images/lab.jpg)]',title:'Laboratory Services',msg:'Discover our state-of-the-art laboratory services, dedicated to delivering fast and accurate test results. Our advanced facilities ensure reliable diagnostics to support your healthcare needs. With experienced professionals and cutting-edge technology, we prioritize precision and patient safety. Trust us to be your partner in providing comprehensive, high-quality laboratory care.'},{
    img:'bg-[url(./images/maternity.jpg)]',title:'Maternity Services',msg:'Experience compassionate and comprehensive maternity services designed to support mothers and babies at every stage. Our skilled team of obstetricians, nurses, and support staff provide personalized care tailored to your unique needs. From prenatal check-ups and childbirth to postpartum support, we ensure a safe and comfortable journey. State-of-the-art facilities and modern equipment guarantee the highest standards of safety and comfort. Your family\'s new beginning starts here with us.'
   }]

const info=[{title:'Our Commitment to Care',img:'commitment.jpg',msg:'In our hospital, patient-centered care is at'+
  ' the forefront of our mission. Our committed team works diligently to provide each patient with'+
  ' customized attention and thorough treatment that addresses their specific requirements.'},
  {title:'Community Engagement',img:'community.jpg',msg:'We believe in building strong relationships with our'+
    ' community. Our outreach programs aim to promote health awareness and provide essential services to those in need, fostering a healthier environment for all.'},
  {title:'Advanced Medical Technology',img:'surgical.jpg',msg:'We utilize the latest medical technologies and innovations to'+
    ' provide the highest standards of healthcare. Our cutting-edge facilities are equipped to handle a wide range of medical challenges with precision and efficiency.'},
   {title:'Community Engagement',img:'community.jpg',msg:'We believe in building strong relationships with our'+
    ' community. Our outreach programs aim to promote health awareness and provide essential services to those in need, fostering a healthier environment for all.'}
  ]