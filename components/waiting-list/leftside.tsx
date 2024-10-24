import "../../app/css/styles.scss"
import Form from "../utils/form";


// These functions can be moved into their own files
const LeftSide= () => {
    return <div className="column">
        <h1 className="title">
            Join<br/>
            <span className="titleKeyword">Our Waitinglist</span>
        </h1>
        <div className="subtitle">
            We will give you the first notice to experience our products
        </div>
        <Form/>
    </div>
}

export default LeftSide;