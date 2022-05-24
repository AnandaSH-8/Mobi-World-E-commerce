import { Component } from "react"

export class Footer extends Component{

    constructor(props)
    {
        super(props)
    }

    render()
    {
        return <div style={
            {background:"black",
            marginTop:"5%",
            height:"30vh"}
        }>
            <h1>Footer</h1>
        </div>
    }
}