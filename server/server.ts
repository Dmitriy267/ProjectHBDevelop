import express from 'express';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 5000;
app.use((cors()));
app.use('/static', express.static('public'))
app.get('/', (req, res) => {
  res.json([{
    id:1,
    imgSrc:'http://localhost:5000/static/image/MaskGroup6.png',
    imgSrc1:'http://localhost:5000/static/image/Sliders/id1/MaskGroup1.png',
    imgSrc2:'http://localhost:5000/static/image/Sliders/id1/MaskGroup2.jpg',
    imgSrc3:'http://localhost:5000/static/image/Sliders/id1/MaskGroup3.jpg',
    imgSrc4:'http://localhost:5000/static/image/Sliders/id1/MaskGroup4.jpg',
    imgSrc5:'http://localhost:5000/static/image/Sliders/id1/MaskGroup5.jpg',
    imgSrc6:'http://localhost:5000/static/image/Sliders/id1/MaskGroup6.jpg',
    altDescript:'Изображение квартиры',
   price:'65.00 BYN',
   text1:'Минск, б-р Мулявина, д. 10',
   text2:'Грушевка',
   text3:'Шабаны',
   descript:'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...',
   textTitle:'4-комн. апартаменты на Грушевке ',
   descriptOther:'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...'
  },
  {
    id:2,
    imgSrc:'http://localhost:5000/static/image/MaskGroup.png',
    imgSrc1:'http://localhost:5000/static/image/Sliders/id2/MaskGroup1.png',
    imgSrc2:'http://localhost:5000/static/image/Sliders/id2/MaskGroup2.jpg',
    imgSrc3:'http://localhost:5000/static/image/Sliders/id2/MaskGroup3.jpg',
    imgSrc4:'http://localhost:5000/static/image/Sliders/id2/MaskGroup4.jpg',
    altDescript:'Изображение квартиры',
   price:'65.00 BYN',
   text1:'Минск, б-р Мулявина, д. 10',
   text2:'Грушевка',
   text3:'Шабаны',
   descript:'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...',
   textTitle:'4-комн. апартаменты на Грушевке ',
   descriptOther:'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...'
  },
  {
    id:3,
    imgSrc:'http://localhost:5000/static/image/MaskGroup3.png',
    imgSrc1:'http://localhost:5000/static/image/Sliders/id3/MaskGroup1.png',
    imgSrc2:'http://localhost:5000/static/image/Sliders/id3/MaskGroup2.jpg',
    imgSrc3:'http://localhost:5000/static/image/Sliders/id3/MaskGroup3.jpg',
    imgSrc4:'http://localhost:5000/static/image/Sliders/id3/MaskGroup4.jpg',
    imgSrc5:'http://localhost:5000/static/image/Sliders/id3/MaskGroup5.jpg',
    imgSrc6:'http://localhost:5000/static/image/Sliders/id3/MaskGroup6.jpg',
    altDescript:'Изображение квартиры',
   price:'65.00 BYN',
   text1:'Минск, б-р Мулявина, д. 10',
   text2:'Грушевка',
   text3:'Шабаны',
   descript:'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...',
   textTitle:'4-комн. апартаменты на Грушевке ',
   descriptOther:'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...'
  },
  {
    id:4,
    imgSrc:'http://localhost:5000/static/image/MaskGroup.png',
    altDescript:'Изображение квартиры',
   price:'65.00 BYN',
   text1:'Минск, б-р Мулявина, д. 10',
   text2:'Грушевка',
   text3:'Шабаны',
   descript:'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...',
   textTitle:'4-комн. апартаменты на Грушевке ',
   descriptOther:'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...'
  },
  {
    id:5,
    imgSrc:'http://localhost:5000/static/image/MaskGroup.png',
    altDescript:'Изображение квартиры',
   price:'65.00 BYN',
   text1:'Минск, б-р Мулявина, д. 10',
   text2:'Грушевка',
   text3:'Шабаны',
   descript:'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...',
   textTitle:'4-комн. апартаменты на Грушевке ',
   descriptOther:'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...'
  },
  {
    id:6,
    imgSrc:'http://localhost:5000/static/image/MaskGroup.png',
    altDescript:'Изображение квартиры',
   price:'65.00 BYN',
   text1:'Минск, б-р Мулявина, д. 10',
   text2:'Грушевка',
   text3:'Шабаны',
   descript:'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...',
   textTitle:'4-комн. апартаменты на Грушевке ',
   descriptOther:'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...'
  }
]);
});
app.listen(PORT, ()=> {console.log(`server is listening on port ${PORT}`)}
);