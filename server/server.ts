import express from 'express';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 5000;
app.use((cors()));
app.use('/static', express.static('public'))
app.get('/', (req, res) => {
  res.json([{
    id:1,
    imgSrc:'http://localhost:5000/static/image/userRoboto.png',
    altDescript:'Изображение квартиры',
   price:'65.00 BYN'
  }]);
});
app.listen(PORT, ()=> {console.log(`server is listening on port ${PORT}`)}
);