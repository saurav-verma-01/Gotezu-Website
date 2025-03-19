import React, {useState} from 'react'
import Faq1 from '../assets/Faq1.png';
import Accordion from "../components/Accordion.jsx";
import CtaBtn from "../components/CtaBtn.jsx";

const faqs = [
    {
        id: 1,
        question: "How do you customize training programs to fit our company's specific needs?",
        answer: "We begin by conducting a thorough needs assessment, engaging with your team to understand your unique challenges and objectives. This collaborative approach allows us to design tailored training solutions that align with your organizational goals and culture."
    },
    {
        id: 2,
        question: "What qualifications and experience do your trainers possess?",
        answer: "Our trainers are seasoned professionals with extensive industry experience and relevant certifications. They bring practical insights and a deep understanding of adult learning principles, ensuring that the training is both engaging and impactful."
    },
    {
        id: 3,
        question: "Can training sessions be scheduled to accommodate our business hours?",
        answer: "Absolutely. We offer flexible scheduling options, including on-site, virtual, and hybrid sessions, to minimize disruption to your operations. Our goal is to provide training at times that are most convenient for your team."
    },
    {
        id: 4,
        question: "How do you measure the success of your programs?",
        answer: "We employ a variety of evaluation methods, such as pre- and post-training assessments, feedback surveys, and performance metrics, to gauge the training's impact. This data-driven approach ensures that we meet your desired outcomes and identify areas for continuous improvement."
    },
    {
        id: 5,
        question: "Do you offer post-training support to reinforce learning?",
        answer: "Yes, we provide ongoing support through follow-up sessions, access to additional resources, and continuous learning opportunities. This ensures that your team can effectively apply new skills and sustain improvements over time."
    }
];

const Faqs = () => {
    const [openID, setOpenID] = useState(null)

    const toggleAccordion = (id) => {
        setOpenID(prev => (prev === id ? null : id));
    }
    return (
        <section className="my-8 lg:my-16 w-full min-h-screen md:px-8 md:py-16">
            <div className="max-w-7xl mx-auto ">
            <div className="flex justify-center my-8">
                <h2 className="subheading">Frequently Asked Questions</h2>
            </div>
            <div className="md:rounded-xl bg-gradient  md:pt-4">
                <div className="flex flex-col gap-8 md:flex-row  items-center justify-center ">
                    <div className="flex items-center justify-center py-8 md:justify-end">
                        <img src={Faq1} alt="FAW Image" className="max-w-100 w-full"/>
                    </div>
                    <div className=" px-4 flex flex-col items-center gap-5 py-8 md:py-0 md:gap-3">
                        {faqs.map((faq) => <Accordion key={faq.id} {...faq} isOpen={openID === faq.id} toggleAccordion={() => toggleAccordion(faq.id)} />)}
                    </div>
                </div>
                <div className="flex justify-center flex-col items-center pb-8">
                    <h2 className="text-honeysuckle-100 text-lg">Got Questions? Let's Clarify!</h2>
                    <CtaBtn title="Contact Us" />
                </div>
            </div>
            </div>
        </section>
    )
}
export default Faqs
