
// export const API_KEY='AIzaSyCqeSPOTE92QaqSTXpJ7-0-ZYoMHI7kWz4'

// // accesskey="AIzaSyCqeSPOTE92QaqSTXpJ7-0-ZYoMHI7kWz4"
export const API_KEY='AIzaSyBPZ_7AAgJ8UfavO1yDWhAGrbZO4c3xwN4';

export const value_converter= (value)=>{

    if(value>=100000){
        return Math.floor(value/100000)+"M";
    }
    else if(value>=1000){

        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}