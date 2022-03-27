import React from 'react';
import './Qa.css';
const Qa = () => {
    return (
        <div style={{marginLeft:'40px'}}>
            <br /> <br />
            <hr />
            <h2>Question</h2>
            <h3>1.How React Work?</h3>
            <h5>React is a JavaScript library [not a framework] that creates user interfaces - UIs in a predictable and efficient way using declarative code. You can use it to help build single page <br /> applications and mobile apps, or to build complex apps if you utilise it with other libraries</h5>



            <h3>2.Props vs State</h3>
            <h5><u>State:</u>  is referred to the local state of the component which cannot be accessed and modified outside of the component and only can be used and modified inside the component. <br />
            <u>Props:</u>  make components reusable by giving components the ability to receive data from the parent component in the form of props. <br />The value of props can never be changed. But the value of State can be changed</h5>
        </div>
    );
};

export default Qa;