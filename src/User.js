// export function User(props) {
//     console.log(props);
//     return (
//         <>
//             <h1>Name: {props.name}, age: {props.age}</h1>

//         </>
//     )
// }
import React from "react";

export class User extends React.Component {
    // constructor(props){}

    render() {
    //   <User name = 'Chandu' age = '20'/>
        return (
            <>
                <h1>Name: {this.props.name}, age: {this.props.age}</h1>
                <p>Name: {this.props.name}, age: {this.props.age}</p>

            </>
        )
    }

}