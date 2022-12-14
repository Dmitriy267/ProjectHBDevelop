import express from 'express';

const app = express();
const portListen = 5000;
app.get('/', (req, res) => {
  res.json([{
    id:1,
    imgSrc:'https://s3-alpha-sig.figma.com/img/9bae/2504/01610f9c7d065b922916595870051a28?Expires=1672012800&Signature=cpytcoKZ9rkRdjeiOH7JYmYEmCF2V~-vkXonf8h5hElXpzJaeCK5fkvwdrTe~yaujwN~SDeTu-sjXpeEOKdvofBTRkVcPtEKA22Sn3W7cuBCOgBMu1RJkKyUd9i9Q37ZFSQSmu7YhgD32IJ9HLx5kh6bPJwE8Ub~LtYPfBM0R52~lNM789ILwdU~-Sc1q4qRi~bAs6fCXL6KJAFbrELI-KqSA4t~EH6gFqqST-LyFMPtqXb~q2K1JRS~RGGpuxXL4vz-N~qM1D3KsN~6hBF86Q-nbQlTptMXZFiFoCG4q3wWxNPMZpNlHseF87Gy2f4TUg-EAmtFJ2-Et~r3qmELmg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'  
  }]);
});
app.listen(portListen, ()=> {console.log(`server is listening on port ${portListen}`)}
);