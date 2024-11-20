
import cv2
import requests
import matplotlib.pyplot as plt
from deepface import DeepFace

class Moodify:
    def __init__(self):
        self.api_url = "https://spotify23.p.rapidapi.com/search"
        self.api_key = "c59ddb8e16msh15327c24e367ec8p19c886jsn2d86c2bf54c5"
        self.api_host = "spotify23.p.rapidapi.com"
    
    def get_songs(self, image_location, list_limit, offset=0): 
        image = cv2.imread(image_location)
        result = DeepFace.analyze(image, actions=['emotion'])

        query = str(max(zip(result[0]['emotion'].values(),
                        result[0]['emotion'].keys()))[1])
        
        querystring = {"q": f"{query}", "type": "multi",
                   "offset": str(offset), "limit": str(list_limit),
                   "numberOfTopResults": str(5)} # top results idk 
        print("Query string", querystring)
        headers = {
            "X-RapidAPI-Key": str(self.api_key),
            "X-RapidAPI-Host": str(self.api_host)
        }
        response = requests.get(self.api_url, headers=headers, params=querystring)
        
        tracks = response.json()["tracks"]
        #    print(json.dumps(tracks, indent=3))
        data_array = [item['data'] for item in tracks['items']]

 
        return data_array


    # # 1st convolution layer
    # model.add(Conv2D(64, (5, 5), activation="relu", input_shape=(48, 48, 1)))
    # model.add(MaxPooling2D(pool_size=(5, 5), strides=(2, 2)))

    # # 2nd convolution layer
    # model.add(Conv2D(64, (3, 3), activation="relu"))
    # model.add(Conv2D(64, (3, 3), activation="relu"))
    # model.add(AveragePooling2D(pool_size=(3, 3), strides=(2, 2)))

    # # 3rd convolution layer
    # model.add(Conv2D(128, (3, 3), activation="relu"))
    # model.add(Conv2D(128, (3, 3), activation="relu"))
    # model.add(AveragePooling2D(pool_size=(3, 3), strides=(2, 2)))

    # model.add(Flatten())

    # # fully connected neural networks
    # model.add(Dense(1024, activation="relu"))
    # model.add(Dropout(0.2))
    # model.add(Dense(1024, activation="relu"))
    # model.add(Dropout(0.2))

    # model.add(Dense(num_classes, activation="softmax"))

    # # ----------------------------

    # home = folder_utils.get_deepface_home()
    # output = os.path.join(home, ".deepface/weights/facial_expression_model_weights.h5")

    # if not os.path.isfile(output):
    #     logger.info(f"{os.path.basename(output)} will be downloaded...")
    #     gdown.download(url, output, quiet=False)

    # model.load_weights(output)

    # return model