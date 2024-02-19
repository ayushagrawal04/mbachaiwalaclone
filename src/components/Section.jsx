import React from 'react'
import {motion} from "framer-motion"

const Section = ({
    h3,
    text,
    hasBtn=true,
    btnText,
    imgSrc,
    imgSize="70%",
    backgroundColor,
    headingColor,
    textColor,
    btnBgColor,
    btnColor})  => {
        
//  use to add animation in the element 

        const headingOptions={
            initial:{
                y:"-100%",
                opacity:0,
            },
             whileInView :{
                y:0,
                opacity:1,
            },
        };

        // for giving animation to the text part in the website 
        const textOption={
            ...headingOptions,
            transition:{
                delay:0.2,
            },
        };

        //  for button animation 
        const buttonOption={
            initial:{
                y:"100%",
                opacity:0,
            },
             whileInView :{
                y:0,
                opacity:1,
            },
            transition:{
                delay:0.2,
                easeIn:"easeIN"
            },
        };

        //now we cretae animation for img 
        const imgOption={
            initial:{
               scale:0.1,
                opacity:0,
            },
             whileInView :{
                scale:1,
                opacity:1,
            },
            transition:{
                delay:0.2,
                
            },
        };
        
  return (
    <section className='section' style={{
       backgroundColor:backgroundColor,
        
    }}> 
    <div>
        <motion.h3 style={{
            color:headingColor,

        }} data-cursorpointer={true} 
        {...headingOptions}
        >{h3}</motion.h3>
        <motion.p style={{
            color:textColor,
            
        }}  data-cursorpointer={true}  {...textOption}>{text}</motion.p>
        {
        hasBtn && <motion.button style={{
            color:btnColor,
            backgroundColor:btnBgColor
            
        }}  data-cursorpointer={true} {...buttonOption}> {btnText} </motion.button> 
        }
        <div>
            <motion.img src={imgSrc} alt="ImgSrc"
            style={{
                width:imgSize
            }}  {...imgOption}
            />
        </div>

    </div>
</section>
  )
}

export default Section