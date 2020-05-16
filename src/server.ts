import { Request, Response } from 'express';
import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';



(async () => {

  // Init the Express application
  const app = express();
  const isImageUrl = require('is-image-url');

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());
  let files: Array<string> = [];

  function ValidateImageUrl(url:string){
    if (!isImageUrl(url)) return false;
    return true;
  }
  
  /**
   * Image filtering API
   */
  app.get('/filteredimage/', async (req: Request, res: Response) => {

    const imageUrl = req.query.image_url;

    if (!ValidateImageUrl(imageUrl)){
      return res.status(422).send("Image url does not refere to an image.");
    }

    let outputUrl = await filterImageFromURL(imageUrl); 

    files.push(outputUrl);
    return res.status(200).sendFile(outputUrl, ()=> { deleteLocalFiles(files); });

  });

  //! END @TODO1
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();