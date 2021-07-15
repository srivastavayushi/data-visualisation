# data-visualisation

## Live Demo : https://data-visualisation-blue-stacks.netlify.app/

## Tasks Completed 

:white_check_mark:   Decide the best format based on the feature mentioned below
</br>
:white_check_mark:  Store the JSON files on the frontend
</br>
:white_check_mark:  Select time period and country
</br>
:white_check_mark:  Select/deselect different parameters like CO2, NO2, etc
</br>
:white_check_mark:  Keep the state of the UI in the URL
</br>
:white_check_mark:  Must have a line chart
</br>
</br>

## Bonus Features

:gift: Select multiple countries for the same time period 
</br>
:gift: Map visualization
</br>

## :blue_book: Guidelines Followed 
<ul>
  <li>Component-based, min code and easy to read and understand</li>
  <li>Min libraries, no redux required </li>
  <li>Libraries added : React-Google-Maps - to display the map, React-Geocode - to fetch latitude/longitude from the name of country</li>
  <li>Proper error boundaries</li>
  <li>Must be deployed online ( e.g. netlify)</li>
  <li>The converting script is included below : </li>
 </ul>
 
## :bar_chart: Data converting script
 ```bash
# Import packages
import pandas as pd
import json
import numpy as np
path = "F:/Projects/Python/gas-emission/greenhouse_gas_inventory_data_data.csv"
df = pd.read_csv(path)
df.dropna()
result = df.to_json(orient="records")
parsed = json.loads(result)

json_object = (json.dumps(parsed, indent=4))
  
# Writing to sample.json
with open("sample.json", "w") as outfile:
    outfile.write(json_object)
```
## :computer: Instructions to start the project

```bash
# Install dependencies
npm install
```
```bash
# Run app
npm start
```
```bash
# Build app
npm run build

```

## A few questions :question:

### What was the most challenging part?

Ans : The most challenging part was managing state without redux within different components and error handling within various inputs in the dropdown.

### What was the most fun part?

Ans : Displaying graphs of several countries at the same time was the most fun part.

### What do you think is wrong with this task or could be made better in this task?

Ans : I think if the website was more responsive and an efficient database like MongoDB was used it would be easy to fetch and store the data.

## Glimpses of the project :

#### Alert when the inputs in the form are not filled properly

<img width="1066" alt="Screenshot 2021-07-15 at 9 45 53 AM" src="https://user-images.githubusercontent.com/56116708/125728352-d7722512-0d36-48c9-a8e6-a454bb09ea85.png">

#### Selecting various countries at the same time

<img width="373" alt="Screenshot 2021-07-15 at 9 46 43 AM" src="https://user-images.githubusercontent.com/56116708/125728367-701548bf-2ee4-4e54-a260-de082ad400ab.png">


#### Selecting various inputs from the dropdown

<img width="385" alt="Screenshot 2021-07-15 at 9 50 15 AM" src="https://user-images.githubusercontent.com/56116708/125728399-b10b9c76-e8a6-4676-bc0e-2ae5b1a0c476.png">

#### The state of the UI in the URL

<img width="985" alt="Screenshot 2021-07-15 at 9 54 57 AM" src="https://user-images.githubusercontent.com/56116708/125728732-279e6395-45e0-4fa5-87fe-c3817a2d5ea1.png">

#### Showing the graph of all the inputs

<img width="490" alt="Screenshot 2021-07-15 at 9 52 03 AM" src="https://user-images.githubusercontent.com/56116708/125728515-4e5e9fe4-5712-412e-a818-faa033570f14.png">


#### Map visualisation of the selected country

<img width="1001" alt="Screenshot 2021-07-15 at 9 53 12 AM" src="https://user-images.githubusercontent.com/56116708/125728594-95b89528-b30f-4bab-8c3b-c82891fc7d95.png">


#### An overall look

<img width="1392" alt="Screenshot 2021-07-15 at 9 53 32 AM" src="https://user-images.githubusercontent.com/56116708/125728623-7c015be0-ab97-43ee-aadf-90ee5874799b.png">

