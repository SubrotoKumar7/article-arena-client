import React from 'react';
import Container from '../Shared/Container/Container';
import Heading from '../Shared/Heading/Heading';

const faqs = [
        {
        question: "How do I participate in a contest?",
        answer:
            "To participate, simply choose a contest from the 'Contests' section, submit your article or essay by the given deadline, and you are good to go! Make sure to read the submission guidelines before entering.",
        },
        {
        question: "What are the prizes for winners?",
        answer:
            "Prizes vary depending on the contest. However, the winners can earn cash prizes, gift vouchers, and even a feature on our homepage.",
        },
        {
        question: "Is there an entry fee for the contests?",
        answer:
            "Yes, there is an entry fee for all of our contests. The fee helps us maintain a fair and high-quality competition, with exciting prizes and rewards for the winners. You can find the fee details on each contest page before submitting your entry.",
        },
        {
        question: "Can I submit more than one article?",
        answer:
            "Yes, you can submit multiple articles in different contests. However, each article must be original and meet the guidelines for the respective contest.",
        },
        {
        question: "How are the winners selected?",
        answer:
            "Winners are selected by a panel of judges who evaluate the creativity, originality, and quality of the submissions. The selection process is fair, transparent, and impartial.",
        },
    ];

const FAQ = () => {
    return (
        <div className='py-10'>
            <Container>
                <Heading position={"text-center"} title={'Frequently Asked Questions'} subtitle={'Find answers to some of the most common questions about our contests'}></Heading>

                <div className='py-10'>
                    {
                        faqs.map((faq, index) => 
                        <div key={index} className="collapse collapse-plus bg-base-100 my-2 border border-base-300 duration-500">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title font-semibold bg-primary text-white">{faq.question}</div>
                            <div className="collapse-content text-sm">{faq.answer}</div>
                        </div>
                        )
                    }
                </div>
            </Container>
        </div>
    );
};

export default FAQ;