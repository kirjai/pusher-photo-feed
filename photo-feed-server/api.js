const express = require('express');
const router = express.Router();
const Pusher = require('pusher');
const fs = require('fs');

/**
 * Use your own Pusher credentials
 */
const pusher = new Pusher({
  appId: 'xxxxxxxx',
  key: 'xxxxxxxx',
  secret: 'xxxxxxxx',
  cluster: 'xxxxxxxx'
});

const imagesDirectory = 'images/';

router.get('/', (req, res) => {
  res.send('all good');
});

router.get('/images', (req, res) => {
  const images = [];
  /**
   * read all the files inside the images directory
   */
  fs.readdir(imagesDirectory, (err, files) => {
    /**
     * for each file in the images directory, we push it into the images array
     */
    files.forEach((file) => {
      images.push(imageUrl(file));
    });

    /**
     * return the images array
     */
    res.send(images);
  });
});

router.get('/image/:image', (req, res) => {
  const path = './images/' + req.params.image
  if (!fs.existsSync(path)) {
    res.status(404).send('Image not found');
    return;
  }
  fs.readFile(path, (err, data) => {
    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    res.end(data);
  });
});

router.post('/image', (req, res) => {
  console.log('POST to /image');
  const image = req.body.image;
  const base64Data = image.split(',')[1];  
  const fileLink = uploadImage(base64Data);
  pusher.trigger('images', 'new-image', fileLink);
  res.send({status: 'ok'});
});

function uploadImage(image) {
  /**
   * generate a random file name
   */
  const fileName = Math.floor(Math.random() * 10000000000) + '.jpeg';
  /**
   * save the file in the filesystem
   */
  fs.writeFile(imagesDirectory + fileName, image, 'base64', (error) => {
    console.error(error);
  });
  /**
   * return the url to the saved image
   */
  return imageUrl(fileName);
}

function imageUrl(fileName) {
  return 'http://localhost:3000/image/' + fileName;
}

module.exports = router;