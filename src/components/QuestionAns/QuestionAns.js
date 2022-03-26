import React from 'react';
import './QuestionAns.css'

const QuestionAns = () => {
    return (
        <div className='question-answer'>
            <h2>Question Answers</h2>
            <div className="how-react-works">
                <h2>How Javascript works</h2>
                <p>Ans:When react run it creat a virtual dom insite it and in every change it is compare the change with the vertual dom and update .react works with diff function . It have jsx a powerful component that allows developer to write js as html.jsx stands for javascript xml</p>
            </div>
            <div className="proops-state">
                <h3>difference between proops and state</h3>
                <p>props uses to send data in component, it can contain function variable ,etc.state uses for user interection when user interect something props update it in dom without loading hole page.state also uses to fetch data outsite of programme .</p>
            </div>
            <div className="state-works">
                <h3>How does state works</h3>
                <p></p>
            </div>
        </div>
    );
};

export default QuestionAns;