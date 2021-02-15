import { useState } from 'react'
import { ReactComponent as ArrowIcon } from '../assets/icon-arrow-down.svg'
import './Faq.css'

const accordionTexts = [
    {
        title: "How many team members can I invite?",
        content: `You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.`,
        id: 1
    },
    {
        title: "What is the maximum file upload size?",
        content: 'No more than 2GB. All files in your account must fit your allotted storage space.',
        id: 2
    },
    {
        title: "How do I reset my password?",
        content: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
        id: 3
    },
    {
        title: "Can I cancel my subscription?",
        content: `Yes! Send us a message and we’ll process your request no questions asked.`,
        id: 4
    },
    {
        title: "Do you provide additional support?",
        content: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
        id: 5
    },
]

const AccordionItem = ({ title, content, id, handleClick, toggled }) => (
    <div className="accordion__item" onClick={() => handleClick(id)}>
        <div className={`accordion__item__title ${toggled ? 'accordion__item__title--open' : ''}`}>
            <p>{title}</p>
            <ArrowIcon className={`arrow rotate`} />
        </div>
        <p className={`accordion__item__content ${toggled ? 'accordion__item__content--open' : ''}`}>{content}</p>
    </div>  
)

function Faq() {
    const [toggleText, setToggleText] = useState(null)

    const handleClick = (id) => {
        setToggleText(id === toggleText ? null : id)
    }

    return (
        <div className="faq">
            <div className="faq__container">
                <h1 className="faq__title">FAQ</h1>
                <div className="accordion">
                {accordionTexts.map(text => (
                    <AccordionItem 
                        key={text.id}
                        id={text.id}
                        title={text.title}
                        content={text.content} 
                        toggled={text.id === toggleText} 
                        handleClick={handleClick}    
                    />
                ))}
                </div>

            </div>
        </div>
    )
}

export default Faq
