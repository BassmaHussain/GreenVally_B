
import {combineReducers, createStore} from "redux"

// main images
import ImgOne from "../images/slid01.png";
import ImgTwo from "../images/slid02.jpeg";
import ImgThree from "../images/slid03.jpeg";
import ImgFour from "../images/slid04.png";
import ImgFive from "../images/slid05.jpeg";

//available/ non cars
import AvImgOne from "../images/slid01.png";
import AvImgTwo from "../images/slid02.jpeg";
import AvImgThree from "../images/slid03.jpeg";
import AvImgFour from "../images/slid04.png";
import AvImgFive from "../images/slid05.jpeg";


const mainCarsImages = [    {image:ImgOne, name:"Ford" , speed :"120" , type:"أتوماتيك" , use : "4", year:"2019" , review:"3",star:"5"},
{image:ImgTwo, name:"BMW" , speed :"100" , type:"عربيه ", use : "5" , year:"2018" , review:"3",star:"0"},
{image:ImgThree, name:"رينج روفر ", speed :"130" , type:"أتوماتيك" , use : "6", year:"2000" , review:"7",star:"4.5"},
{image:ImgFour, name:"مرسيدس" , speed :"90" , type:"عربيه " , use : "7", year:"2021" , review:"10",star:"50"},
{image:ImgFive, name:"جيتور" , speed :"140" , type:"أتوماتيك" , use : "8", year:"2020" , review:"6",star:"5"}   ];

const availableCars=[
        {img:AvImgOne,name:"هوندا",price:'1200 LE'},
        {img:AvImgTwo,name:"هوندا",price:'1300 LE'},
        {img:AvImgThree,name:"هوندا",price:'1400 LE'},
        {img:AvImgFour,name:"هوندا",price:'1100 LE'},
        {img:AvImgFive,name:"هوندا",price:'1220 LE'},
        {img:AvImgOne,name:"هوندا",price:'1200 LE'},
        {img:AvImgTwo,name:"هوندا",price:'1300 LE'},
        {img:AvImgThree,name:"هوندا",price:'1400 LE'},
        {img:AvImgFour,name:"هوندا",price:'1100 LE'},
        {img:AvImgFive,name:"هوندا",price:'1220 LE'} ,
        {img:AvImgOne,name:"هوندا",price:'1200 LE'},
        {img:AvImgTwo,name:"هوندا",price:'1300 LE'},
        {img:AvImgThree,name:"هوندا",price:'1400 LE'},
        {img:AvImgFour,name:"هوندا",price:'1100 LE'},
        {img:AvImgFive,name:"هوندا",price:'1220 LE'}  ];
const nonAvailableCars=[
    {img:AvImgOne,name:"هوندا",price:'1200 LE'},
    {img:AvImgTwo,name:"هوندا",price:'1300 LE'},
    {img:AvImgThree,name:"هوندا",price:'1400 LE'},
    {img:AvImgFour,name:"هوندا",price:'1100 LE'},
    {img:AvImgFive,name:"هوندا",price:'1220 LE'} ];

const User = {
    firstName : "",
    lastName : "",
    phone :"",
    password : ""
}


const userReducer = (state = User , action)=>{
    if(action.type === "FIRSTNAME"){
       return ({...state , firstName:action.payload})
    }

    if(action.type === "LASTNAME"){
        return ({...state , lastName:action.payload})
    }

    if(action.type === "PHONE"){
        return ({...state , phone:action.payload})
    }

    if(action.type === "PASSWORD"){
        return ({...state , password:action.payload})
    }


    return state
}


const mainCarsImagesReducer =(state = mainCarsImages , action)=>{
     return state;
}
const availableCarsReducer =(state = availableCars , action)=>{
    return state;
}
const nonAvailableCarsReducer =(state = nonAvailableCars , action)=>{
    return state;
}

const reducer = combineReducers({userReducer,mainCarsImagesReducer,availableCarsReducer,nonAvailableCarsReducer})

const store = createStore(reducer)

export default store;