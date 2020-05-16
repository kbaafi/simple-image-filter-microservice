# Simple Image Filtering Microservice

This repo demonstrates an Image Filtering Microservices that returns a modified image retrieved from a url. It does the following

* Validate the image url
* Returns the modified version of the image from the url
* Delete the returned image after it has been delivered

## Build

Run `npm run build`

## Deploy on AWS Elastic Beanstalk

In the  application root folder run the following

* run `eb init`

* edit the resulting **.elasticbeanstalk/config.yml** file to point the deployment to the output of the build process **./www/Archive.zip**

* run `eb create` to deploy the application to AWS Elastic Beanstalk

## Results

Deployment Results

[deployment]:/deployment_screenshots/deploy.png
![deployment]

* Deployed URL : `http://udagram-image-filter-dev2.us-east-2.elasticbeanstalk.com/`
* Test with a Valid Image URL: `http://udagram-image-filter-dev2.us-east-2.elasticbeanstalk.com/filteredimage/?image_url=https://images.tori.fi/api/v1/imagestori/images/8610019184.jpg?rule=medium_660`
* Test with an Invalid Image URL: `http://udagram-image-filter-dev2.us-east-2.elasticbeanstalk.com/filteredimage/?image_url=https://stackoverflow.com/questions/14391690/how-to-capture-no-file-for-fs-readfilesync`
