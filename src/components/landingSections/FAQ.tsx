import { ChartArea } from "lucide-react";

const faqItems = [
  {
    id: '1',
    question: 'What is Trade Lenda?',
    answer: ` Trade Lenda is a digital bank for SMEs that provides access to fast, affordable loans and business support across Nigeria.`,
  },
  {
    id: '2',
    question: 'Who can use Trade Lenda?',
    answer: ` Any registered or unregistered business owner, trader, artisan, cooperative member, or entrepreneur seeking working capital or business support services.`,
  },

  {
    id: '3',
    question: 'Where is Trade Lenda available?',
    answer: ` We operate nationwide in Nigeria through our digital platform. `,
  },
  {
    id: '15',
    question: '  What happens when I cannot repay my loan on time?',
    answer: `   Trade Lenda charges a one-off default fee of 1% and waived for women. `,
  },
  {
    id: '4',
    question: 'What types of loans does Trade Lenda offer?',
    answer: (
      <>
        We offer:
        <ul>
          <li>• Working Capital Loans</li>
          <li>• Shariah-Compliant Loans</li>
          <li>• Invoice Discounting</li>
          <li>• Asset Financing</li>
          <li>• Inventory Loans</li>
        </ul>
      </>
    ),
  },
  {
    id: '5',
    question: 'What is the interest rate?',
    answer: `  Interest rate is 6%. `,
  },
  {
    id: '6',
    question: 'What are the loan requirements?',
    answer: (
      <>
        You’ll need:
        <ul>
          <li>• Valid means of ID</li>
          <li>• Proof of business (e.g., pictures, customer records)</li>
          <li>• Bank statement (where applicable)</li>
          <li>• Phone number linked to your BVN</li>
        </ul>
      </>
    ),
  },
  {
    id: '7',
    question: 'Do I need collateral?',
    answer:
      ' No collateral is required. However, business and cash flow history may be reviewed.',
  },
  {
    id: '8',
    question: 'How much can I borrow?',
    answer:
      '  Loans range from ₦50,000 to ₦10,000,000 and above, depending on your business needs, repayment capacity, and history.',
  },
  {
    id: '9',
    question: 'How quickly can I get a loan?',
    answer:
      '  Loan approvals take 1 - 6 hours, provided documentation is complete.',
  },
  {
    id: '10',
    question: 'Can I reapply after repaying a loan?',
    answer:
      '  Yes! You can reapply and may qualify for a higher amount based on your repayment performance.',
  },
  {
    id: '11',
    question: 'What is a Shariah-Compliant Loan?',
    answer:
      '   It’s a non-interest loan based on Islamic finance principles like Murabaha (cost-plus) or Musharakah (profit-sharing).',
  },
  {
    id: '12',
    question: 'Who is eligible for it?',
    answer:
      '  Muslim-owned businesses or anyone seeking ethical financing based on non-interest models. Specific eligibility terms apply.',
  },
  {
    id: '13',
    question: 'Does Trade Lenda offer training or capacity building?',
    answer:
      ' Yes. We offer free training, mentorship, and coaching through virtual sessions, one-on-one clinics, and SME Fairs.',
  },
  {
    id: '18',
    question: 'Do I have to be a loan customer to access training?',
    answer:
      ' No. Our capacity-building programs are open to all small business owners who register through our platform or events.',
  },
  {
    id: '14',
    question: 'What topics are covered in your training?',
    answer: (
      <>
        Topics include but not limited to:
        <ul>
          <li>• Budgeting & Cash Flow</li>
          <li>• Credit Management</li>
          <li>• Pricing & Profit</li>
          <li>• Bookkeeping</li>
          <li>• Digital Tools for Business</li>
        </ul>
      </>
    ),
  },
  {
    id: '16',
    question: 'How do I apply for a loan?',
    answer: (
      <span
        dangerouslySetInnerHTML={{
          __html:
            ' Visit <a href="https://www.tradelenda.com" target="_blank" rel="noopener noreferrer" style="text-decoration: underline; cursor: pointer;">www.tradelenda.com</a> or Google Play Store or Apple App Store; register, complete your profile, and submit your loan request.',
        }}
      />
    ),
  },
  {
    id: '17',
    question: 'Can I use my phone to apply?',
    answer: ' Yes. Our platform is mobile-friendly.',
  },

  {
    id: '19',
    question: 'How do I repay my loan?',
    answer:
      '  Repayments can be made through your dashboard using direct debit from your wallet.',
  },
  {
    id: '20',
    question: 'What happens if I miss a payment?',
    answer:
      ' We encourage prompt payments. If you miss a deadline, we’ll reach out to reschedule. However, late payments may affect your eligibility for future loans. ',
  },
  {
    id: '21',
    question: 'Can I repay early?',
    answer:
      ' Yes! Early repayment is allowed, and may improve your credit profile with us.',
  },
  {
    id: '22',
    question: 'Do you report to credit bureaus?',
    answer:
      '  Yes. Timely repayment helps improve your credit score and builds financial credibility.',
  },
  {
    id: '23',
    question: 'What is the SME Fair and Clinic?',
    answer:
      ' This is a community outreach program where Trade Lenda offers on-the-spot business advice, funding, and training in underserved areas.',
  },
  {
    id: '24',
    question: 'How can I attend an SME Fair?',
    answer:
      ' Follow us on social media or check our website for announcements. Registration is usually free and open to the public.',
  },
  {
    id: '25',
    question: 'Is my information safe with Trade Lenda?',
    answer:
      '  Absolutely. We use encrypted systems and comply with data privacy laws to protect all user information.',
  },
  {
    id: '26',
    question: 'Do you sell user data?',
    answer:
      ' No. We do not sell or share user data with third parties without your consent.',
  },

  {
    id: '27',
    question: 'How can I contact Trade Lenda?',
    answer: (
      <>
        <ul>
          <li>• Email: support@tradelenda.com</li>
          <li>• Phone: 02017000064</li>
          <li>• Whatsapp Lines: +234 805 516 4970; +234 805 516 6987</li>
          <li>• Live Chat: Via our website or App</li>
        </ul>
      </>
    ),
  },
  {
    id: '28',
    question: 'What are your support hours?',
    answer:
      'Our support team is available Monday to Sunday, 9am–11pm, however, responses might be slow on the weekends. You can also reach us via email(support@tradelenda.com)  ',
  },
];


export default function FAQ() {
  return (
   <div className="container">
        <div
          className="ss-wous position-relative"
          style={{ marginBottom: '5rem', marginTop: '5rem' }}>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="lp-faq">
                <h1>Common questions people ask</h1>
                <div className="lp-faq-abs">
                  <p>Have more questions?</p>
                  <p>
                    Chat with us
                    <ChartArea/>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="lp-inwy-accordion">
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample">
                  {faqItems.map((item) => (
                    <div className="accordion-item" key={item.id}>
                      <h2
                        className="accordion-header"
                        id={`flush-heading${item.id}`}>
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#flush-collapse${item.id}`}
                          aria-expanded="false"
                          aria-controls={`flush-collapse${item.id}`}>
                          {item.question}
                        </button>
                      </h2>
                      <div
                        id={`flush-collapse${item.id}`}
                        className="accordion-collapse collapse"
                        aria-labelledby={`flush-heading${item.id}`}
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">{item.answer}</div>
                      </div>
                    </div>
                  ))}
                </div>
               
              </div>
            </div>
          </div>
          <div className="lp-faq-block">
            <p>Have more questions?</p>
            <p>
              Chat with us
              <ChartArea/>
            </p>
          </div>
        </div>
      </div>
  )
}