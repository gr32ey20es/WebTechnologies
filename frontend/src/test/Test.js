import React from 'react';
import logo from './logo.svg';
import './Test.css'

class BoxQuestion extends React.Component {
    constructor(props) {
        super();
        let {boxquestion, idquestion} = props;

        this.idquestion = idquestion;
        this.question = boxquestion.question;
        this.options = boxquestion.options;
        this.type = boxquestion.type;
    }
    render() {
        let options = this.options,
            type = this.type,
            idquestion = this.idquestion.toString(),
            options_innerHTML = [];

        for (let i = 0; i < options.length; i++)
            (type==="Multiple-choice") ? 
                options_innerHTML.push(<label><input type="checkbox" /> {options[i]}</label>) :
                options_innerHTML.push(<label><input type="radio" name={"option-question" + idquestion} /> {options[i]}</label>);

        return (
            <fieldset className='box-question' id={"question" + idquestion}>
                <legend>Question #{this.idquestion}</legend>
                <p className='question'>{this.question}</p>
                <fieldset className='center column box-option'>
                    {options_innerHTML}
                </fieldset>
            </fieldset>
        );
    }
}

class Test extends React.Component {
    constructor(props) {
        super();
        // let {quizData} = props;

        // this.quizData = quizData;
    }
    handleScroll = () => {
        let aside = document.querySelector('aside');
        let information = aside.querySelector('#information');
        if (window.scrollY <= 140) {
            information.style.position = 'static';
        }
        else {
            information.style.position = 'fixed';
            information.style.top = '21px';
        }
    };
    render() {
        let quizData = [
            {
              question: 'What is the capital of France?',
              options: ['Paris', 'London', 'Berlin', 'Madrid'],
              type: 'Single-choice',
              answer: 'Paris',
            },
            {
              question: 'What is the largest planet in our solar system?',
              options: ['Mars', 'Saturn', 'Jupiter', 'Neptune'],
              type: 'Multiple-choice',
              answer: 'Jupiter',
            }
        ];
        let boxQuestions = [],
            boxLinkQuestions = [];
        
            for (let i = 0; i < 2; i++) {
                boxQuestions.push(<BoxQuestion boxquestion={quizData[i]} idquestion={i} />)
                boxLinkQuestions.push(<div className='box-link-question'><a href={'#question' + i.toString()}>{i}</a></div>)
            }

        window.addEventListener("scroll", this.handleScroll);
        return (<>
            <aside>
                <img src={logo} className='Logo' alt='' style={{width: '100px', height: '100px'}}/>
                <div className='column center' id='information'>
                    <label for='countdown-timer'><p id='countdown-timer'>Timer 12:00:00</p></label>
                    <fieldset id='box-link' className='center'>
                        {boxLinkQuestions}
                    </fieldset>
                </div>
            </aside>
            <main className='center column'>
                {boxQuestions}
            </main>
        </>);
    }
}

export default Test;