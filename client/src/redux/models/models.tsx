export interface Rooms {
   id:number;
    city:string;
    rooms:string;
    place:string;
    MinPrice:string;
    MaxPrice:string;
    imgSrc:string;
    altTitle:string;
    areaText:string;
    description:string
    
}
export interface  MinskRoom{
    id:number;
    rooms:string;
    place:string;
    MinPrice:number;
    MaxPrice:number;
    imgSrc:string;
    altTitle:string;
    areaText:string;
    description:string;
    area:string;
}
export interface Post{
    id:number;
    imgSrc:string;
    title:string;
    description:string;
    altTitle:string;
}

export type MinskStateInit={
    loading:boolean;
    hasErrors:string;
    id:number;
    rooms:string[];
    place:string;
    MinPrice:number;
    MaxPrice:number;
    imgSrc:string;
    altTitle:string;
    areaText:string;
    description:string;
    area:string;
    
 }

 export interface Minsk {
    id:number;
    imgSrc:string;
    altTitle:string;
    description:string;
    title:string;
    areaText:string;
    city:string;
     rooms:string;
     place:string;
     MinPrice:string;
     MaxPrice:string;
     coffeMashins:string;
     cook: string;
     cookMashins: string;
     electOver:string;
     gaz:string;
     metro:string;
     stove:string;
     area:string;
     textPeople:string;
    
 }