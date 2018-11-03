* Frontend Deployment Link [https://proplayer.now.sh/](https://proplayer.now.sh/)
* Backend Deployment Link [proplayer-backend.now.sh](proplayer-backend.now.sh)

# A note regarding deployment 
* Everytime you deploy using now, you have to alias using now alias `<new deployment link.>` `<alias>`, feel free to just let Kate deploy

# A note regarding the front end and back end
* use config file to use fetch that references backend to keep API stuff secret, e.g. include { config } from config.js (in the root of the frontend folder, this references the backend URL)
    * at some point, this will all get deployed with the deployment link to the backend- when that happens, this will get added to the gitignore file and then everyone will changer their local version of this config file back to whatever the localhost of their backend is. 
# To run this app
* backend and frontend are going to run separate and simultaneous instances. cd into frontend and do yarn start, cd into backend and run npm run start

# Folder Structure:
* project
    * frontend
        * own now deployment
        * static folder for assets
        * components folder for all the components, gets referenced into pages
        * pages folder is the stuff that renders on the frontend 

    * backend
        * own now deplyment
        * routes folder, this is where api routing will go, referenced in index.js and individual folders for api routes, see [this project](https://github.com/k8xian/MongoNewsScraper/tree/master/routes/api) for structure 
        * the models folder is where mongo / mongoose stuff will go, like [this](https://github.com/k8xian/MongoNewsScraper/tree/master/models)
        * scripts folder for scraping junk as needed, reference this in normally


# Additional Notes: 
* get initial props is the same as component did mount
