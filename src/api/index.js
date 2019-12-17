import axios from "axios";
import { loadProgressBar } from 'axios-progress-bar'
loadProgressBar()
export default {
    getGallery ({section, sort, window, page, showViral}) {
        // http://localhost:8888/proxy-eurowings-imgur/api/v1/hot/viral/day/0?showViral=true
        return axios.get(`http://localhost:8888/proxy-eurowings-imgur/api/v1/${section}/${sort}/${window}/${page}?showViral=${showViral}`).then(response => {
            return response.data.data
            .map(card_data => {
                let link,type,description;
                description = card_data.description;
                if(card_data.type){
                    link = card_data.link;
                    type = card_data.type;
                }else if(card_data.images && card_data.images.length > 0){
                    link = card_data.images[0].link;
                    type = card_data.images[0].type;
                    description = card_data.images[0].description;
                }
                return {
                    title: card_data.title,
                    description: description,
                    link: link,
                    type: type,
                    ups:card_data.ups,
                    views:card_data.views
                };
            })
            .filter(card_data =>  card_data.type!=="video/mp4");
        }).catch(error => {
            if(error){
                return [];
            }
        });
    },
    test(){

    }
}

