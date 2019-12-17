import getDataApi from "@/api/index";

// initial state
const state = {
    allData: [],
    dataOnecall: [],
    chosenCard:{},
    urlParameters:{
      section: 'hot',
      sort: 'viral',
      window: 'day',
      page: 0,
      showViral: true
    }
}
  
  // getters
  const getters = {
    getAllGalleryData: state => {
      return state.allData;
    },
    getUrlParameters: state =>{
      return state.urlParameters;
    },
    getChosenCard: state => {
      return state.chosenCard;
    }
  }
  
  // actions
  const actions = {
    getAllGallery(context){
        return getDataApi.getGallery(context.getters.getUrlParameters).then( galleries => {
          context.commit('setGallery', galleries);
        });
    },
    updateUrlParamters(context,newObjectUrlParameters){
      context.commit('setUrlParameters', {...context.getters.getUrlParameters, ...newObjectUrlParameters});
    },
    assignChosenCard(context, choosenCard){
      context.commit('setChosenCard', choosenCard);
    }
  }
  
  // mutations
  const mutations = {
    setGallery (state, galleries) {
      if(state.urlParameters.page===0)state.allData=[];
      state.dataOnecall = galleries;
      state.allData.push(...galleries);
      state.urlParameters.page++;
    },
    setUrlParameters (state, parameters){
      state.urlParameters = parameters;
    },
    setChosenCard(state,chosenCard){
      state.chosenCard=chosenCard;
    }
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }
