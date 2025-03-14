// Code your solution here
const drivers=[ {name:'Bobby',hometown:'nevada'},
                {name:'ken',hometown:'austria'},
                {name:'Bobby',hometown:'texas'}
            ]
function findMatching(drivers,name){
    return drivers.filter(drivers =>drivers.toLowerCase() === name.toLowerCase())    

}
function fuzzyMatch(drivers,query){
    return drivers.filter(drivers => drivers.toLowerCase().startsWith(query.toLowerCase()));
}



function matchName(drivers,name){
    return drivers.filter(drivers => drivers.name === name)

}
   