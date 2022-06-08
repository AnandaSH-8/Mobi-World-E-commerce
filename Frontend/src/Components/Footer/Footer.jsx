import { Component } from "react"
import Style from "./footer.module.css"
import {Twitter,LinkedIn,GitHub} from '@mui/icons-material';

export class Footer extends Component{

    constructor(props)
    {
        super(props)
    }

    render()
    {
        return <div className={Style.footer}>
            <div className={Style.footer_Content}>
                <div className={Style.Head}>Mobi World</div>
                <div className={Style.about}>
                    <a href="https://github.com/Anands-88/Mobi-World-E-commerce" >About</a>
                    <a href="" >Terms & Conditions</a>
                    <a href="" >Privacy Policy</a>
                    <a href="" >Contact</a>
                </div>
                <div className={Style.connect} >Connect
                    <div className={Style.Icons}>
                        <a href="https://github.com/Anands-88">
                            <GitHub sx={{fontSize:35,color:"white"}} >
                            </GitHub>
                        </a>
                        <a href="https://www.linkedin.com/in/ananda-s-holla-268b94147/">
                            <LinkedIn sx={{color:"rgb(37, 60, 151)",fontSize:35}} >
                            </LinkedIn>
                        </a>
                        <a href="https://twitter.com/AnandSHolla8">
                            <Twitter sx={{color:"rgb(33, 142, 252)",fontSize:35}}>
                            </Twitter>
                        </a>
                    </div>
                </div>
                <div className={Style.copy}>MobiWorld 2022.  All rights Reserved</div>
            </div>
        </div>
    }
}