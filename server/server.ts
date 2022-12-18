import express from 'express';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 5000;
app.use((cors()));
app.use('/static', express.static('public'))
app.get('/', (req, res) => {
  res.json([{
    id:1,
    imgSrc:'http://localhost:5000/static/image/room.png',
    altDescript:'Изображение квартиры',
   price:'65.00 BYN',
   text1:'Минск, б-р Мулявина, д. 10',
   text2:'Грушевка',
   text3:'Шабаны',
   descript:'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...'
  },
  {
    id:2,
    imgSrc:'http://localhost:5000/static/image/MaskGroup.png',
    altDescript:'Изображение квартиры',
   price:'65.00 BYN',
   text1:'Минск, б-р Мулявина, д. 10',
   text2:'Грушевка',
   text3:'Шабаны',
   descript:'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...'
  },
  {
    id:3,
    imgSrc:'http://localhost:5000/static/image/MaskGroup3.png',
    altDescript:'Изображение квартиры',
   price:'65.00 BYN',
   text1:'Минск, б-р Мулявина, д. 10',
   text2:'Грушевка',
   text3:'Шабаны',
   descript:'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...'
  },
  {
    id:4,
    imgSrc:'http://localhost:5000/static/image/MaskGroup.png',
    altDescript:'Изображение квартиры',
   price:'65.00 BYN',
   text1:'Минск, б-р Мулявина, д. 10',
   text2:'Грушевка',
   text3:'Шабаны',
   descript:'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...'
  },
  {
    id:5,
    imgSrc:'http://localhost:5000/static/image/MaskGroup.png',
    altDescript:'Изображение квартиры',
   price:'65.00 BYN',
   text1:'Минск, б-р Мулявина, д. 10',
   text2:'Грушевка',
   text3:'Шабаны',
   descript:'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...'
  },
  {
    id:6,
    imgSrc:'http://localhost:5000/static/image/MaskGroup.png',
    altDescript:'Изображение квартиры',
   price:'65.00 BYN',
   text1:'Минск, б-р Мулявина, д. 10',
   text2:'Грушевка',
   text3:'Шабаны',
   descript:'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...'
  }
]);
});
app.listen(PORT, ()=> {console.log(`server is listening on port ${PORT}`)}
);