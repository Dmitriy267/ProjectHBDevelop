import React  from "react";

interface ArticleComponent1Props{
    imgSrc:string;
    title:string;
    description:string;
    altTitle:string;
}
const ArticleComponent1 =({imgSrc, title, description, altTitle}:ArticleComponent1Props)=>{
    return(
        <>
<div>
<img src={imgSrc} alt={altTitle}/>
<h3>{title}</h3>
<p>{description}</p>
</div>
</>
    )
}
export default ArticleComponent1;