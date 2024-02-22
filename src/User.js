 export let User = (props)  => {
    console.log(props);
    return (
        <>
            <h1>id: {props.id},Name: {props.name}, place: {props.place}</h1>
        </>
    )
}
// import React from "react";

// export class User extends React.Component {
//     // constructor(props){}

//     render() {
//         return (
//             <>
//                 <h1>Name: {this.props.name}, age: {this.props.age}</h1>
//             </>
//         )
//     }

// }