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
    place:string[];
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