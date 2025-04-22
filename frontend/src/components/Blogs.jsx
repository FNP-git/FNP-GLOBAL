import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import './Blogs.css';
import img1 from '../assets/financial.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const blogData = [
  {
    image: img1,
    title: 'The Importance of Digital Marketing for MNCs',
    content: `Digital marketing helps MNCs reach global audiences in a cost-effective manner.\n\nIt enables real-time performance tracking, brand visibility, and a personalized user experience — all of which are critical in the modern landscape.`,
  },
  {
    image: img1,
    title: '5 Trends in Global Business Strategy',
    content: `Here are the top trends:\n1. Remote collaboration across borders\n2. AI-driven decision-making\n3. Sustainable business practices\n4. Global market diversification\n5. Agile organizational structures`,
  },
  {
    image: img1,
    title: 'AI Tools Changing Marketing Game',
    content: `AI has transformed marketing:\n\nFrom chatbots to personalized recommendations, brands are leveraging AI to predict customer behavior, automate campaigns, and maximize ROI.`,
  },
  {
    image: img1,
    title: 'Building Brand Identity in 2025',
    content: `A brand’s identity in 2025 will be shaped by authenticity, customer engagement, and digital storytelling.\n\nIt’s not just about logos anymore — it's about values and community.`,
  },
  {
    image: img1,
    title: 'Why Your Business Needs SEO',
    content: `SEO drives organic traffic, improves credibility, and gives businesses a competitive edge in search visibility.\n\nIt’s an essential part of every long-term digital strategy.`,
  },
  {
    image: img1,
    title: 'The Rise of Remote Work in Startups',
    content: `Startups are adopting remote-first models to access global talent and reduce operational costs.\n\nTools like Slack, Notion, and Zoom have made this easier than ever.`,
  },
  {
    image: img1,
    title: 'Content Marketing: A Deep Dive',
    content: `In today's fast-paced digital era, businesses must evolve and adapt to new marketing strategies to remain competitive. Multinational corporations (MNCs) operate in a highly competitive environment where digital marketing plays a crucial role in driving brand awareness, customer engagement, and revenue growth. Traditional marketing methods alone are no longer sufficient; businesses must leverage digital platforms to reach a global audience effectively.


  Why Digital Marketing is Necessary for Businesses

    1. Global Reach and Brand Visibility
MNCs operate in multiple countries and require a marketing strategy that can cater to diverse audiences. Digital marketing allows businesses to expand their reach beyond geographical boundaries, ensuring that their products and services are visible to customers worldwide. With tools like social media marketing, search engine optimization (SEO), and pay-per-click (PPC) advertising, companies can enhance their brand presence and connect with potential customers globally.


    2. Cost-Effective Marketing Strategy
Compared to traditional advertising methods such as television, radio, and print media, digital marketing is significantly more cost-effective. Businesses can allocate budgets more efficiently by using targeted advertising, content marketing, and email campaigns to reach specific audiences. This not only reduces unnecessary expenses but also ensures higher returns on investment (ROI).


    3. Data-Driven Decision Making
One of the most significant advantages of digital marketing is the ability to collect and analyze customer data. With analytics tools like Google Analytics and social media insights, businesses can track user behavior, preferences, and engagement levels. This data enables MNCs to optimize their marketing campaigns, personalize customer experiences, and make informed business decisions.


    4. Improved Customer Engagement
Modern consumers expect personalized and interactive experiences with brands. Digital marketing enables businesses to engage with customers through various channels such as social media, email marketing, and chatbots. By responding to customer queries, addressing concerns, and providing valuable content, MNCs can build long-term relationships and enhance customer loyalty.


    5. Search Engine Optimization (SEO) for Organic Growth
SEO is a crucial component of digital marketing that helps businesses improve their online visibility. By optimizing website content with relevant keywords, businesses can rank higher on search engines like Google, making it easier for potential customers to find them. A strong SEO strategy can drive organic traffic, increase brand credibility, and improve conversion rates.


    6. Social Media Influence
Social media platforms like Facebook, Instagram, LinkedIn, and Twitter have become powerful marketing tools. MNCs can use these platforms to launch targeted advertising campaigns, engage with audiences, and showcase their brand values. Social media marketing not only boosts brand awareness but also drives website traffic and leads.


    7. Flexibility and Scalability
Digital marketing strategies can be easily adjusted based on performance and market trends. MNCs can experiment with different advertising formats, content types, and marketing channels to determine what works best for their target audience. This flexibility ensures that businesses can scale their efforts based on market demand and evolving business goals.


  Conclusion
Digital marketing is no longer optional for MNCs; it is a necessity for survival and growth in today's competitive landscape. By leveraging digital tools and strategies, businesses can enhance brand visibility, reach a global audience, engage with customers, and drive higher ROI. Companies that invest in digital marketing will stay ahead of the competition and continue to thrive in an ever-changing market.

Are you ready to transform your business with digital marketing? Start leveraging digital strategies today and watch your brand soar to new heights!`,
  },
  {
    image: img1,
    title: 'Blog BPO',
    content: `The Power of Business Process Outsourcing (BPO) for Modern Businesses

In the rapidly evolving business landscape, companies face increasing pressure to optimize operations, reduce costs, and enhance efficiency. Business Process Outsourcing (BPO) has emerged as a strategic solution, allowing organizations to delegate non-core functions to specialized third-party service providers. By leveraging BPO, businesses can focus on their core competencies while achieving greater productivity and scalability.

What is Business Process Outsourcing (BPO)?

Business Process Outsourcing refers to contracting specific business functions or processes to external service providers. These outsourced processes can be back-office operations like accounting, payroll, and HR management, or front-office tasks like customer support, sales, and marketing. BPO services are commonly categorized into two types:

Back-Office BPO – Includes administrative tasks such as finance, accounting, data management, and human resources.

Front-Office BPO – Covers customer-facing functions such as customer support, telemarketing, and technical assistance.

Why Businesses Choose BPO

1. Cost Savings

One of the primary advantages of BPO is cost reduction. Outsourcing allows companies to cut operational expenses by leveraging the expertise of external vendors, often located in countries with lower labor costs. This eliminates the need for in-house teams, infrastructure, and technology investments.

2. Access to Specialized Talent

BPO providers employ professionals with specialized skills in various domains, ensuring high-quality service delivery. This expertise enhances efficiency and allows businesses to benefit from industry best practices without investing in extensive training and development.

3. Enhanced Focus on Core Business Activities

By outsourcing non-core functions, businesses can concentrate on strategic initiatives, innovation, and customer relationships. This improved focus leads to better decision-making, faster growth, and increased competitiveness in the market.

4. Scalability and Flexibility

BPO services provide businesses with the ability to scale operations up or down based on demand. Whether handling seasonal spikes in customer inquiries or expanding global operations, outsourcing offers the flexibility to adapt without significant financial or operational constraints.

5. Improved Efficiency and Productivity

BPO providers use advanced technology, automation, and optimized workflows to enhance operational efficiency. This results in faster turnaround times, reduced errors, and improved customer satisfaction.

6. 24/7 Operations and Global Reach

Many BPO firms operate around the clock, ensuring continuous business operations. This is particularly beneficial for customer support, IT services, and other time-sensitive processes. Additionally, BPO enables businesses to expand into new markets by leveraging global talent and multilingual support.

7. Risk Management and Compliance

Outsourcing firms adhere to industry regulations and compliance standards, mitigating risks related to data security, financial reporting, and legal requirements. This ensures that businesses meet regulatory obligations without the burden of managing complex compliance frameworks internally.

Industries That Benefit from BPO

BPO services are utilized across various industries, including:

Banking & Finance – For fraud detection, loan processing, and customer support.

Healthcare – For medical billing, claims processing, and patient support.

E-commerce – For order processing, customer service, and inventory management.

Telecommunications – For technical support, billing inquiries, and customer retention.

IT & Software – For IT helpdesk services, application support, and cloud management.

The Future of BPO

With advancements in artificial intelligence (AI), robotic process automation (RPA), and cloud computing, the BPO industry is undergoing a transformation. Companies are shifting from traditional outsourcing models to digital-first approaches, integrating automation and analytics to enhance service delivery.

Conclusion

Business Process Outsourcing is a powerful tool for businesses seeking efficiency, cost savings, and scalability. By partnering with the right BPO provider, organizations can streamline operations, focus on strategic growth, and remain competitive in an increasingly globalized economy.


Are you ready to optimize your business operations with BPO? Explore the benefits of outsourcing and unlock new opportunities for growth!`,
  },
  {
    image: img1,
    title: 'Blog IT and ITES',
    content: `Understanding IT and ITES: The Backbone of Digital Transformation

In today’s digital era, Information Technology (IT) and Information Technology Enabled Services (ITES) play a crucial role in driving business growth, innovation, and operational efficiency. Companies across industries rely on IT and ITES to streamline operations, enhance customer experience, and stay competitive in an ever-evolving market.

What is IT (Information Technology)?

Information Technology (IT) refers to the use of computers, software, networks, and other digital systems to manage, process, and store data. IT infrastructure includes hardware, software applications, cloud computing, cybersecurity, and data management tools that help businesses operate efficiently.

Key Components of IT:

Hardware – Servers, computers, storage devices, and networking equipment.

Software – Operating systems, enterprise applications, cloud platforms, and AI-driven solutions.

Networking – Internet, intranet, VPNs, and data centers.

Cybersecurity – Firewalls, encryption, data protection, and threat detection.

Cloud Computing – Scalable storage and computing services like AWS, Google Cloud, and Microsoft Azure.

What is ITES (Information Technology Enabled Services)?

Information Technology Enabled Services (ITES) refers to services that leverage IT to improve business processes. ITES includes customer support, data processing, business process outsourcing (BPO), knowledge process outsourcing (KPO), and other digital services that enhance productivity and efficiency.

Key ITES Services:

Customer Support & Call Centers – Managing inbound/outbound customer inquiries and technical support.

BPO (Business Process Outsourcing) – Outsourcing non-core functions like HR, finance, and payroll.

KPO (Knowledge Process Outsourcing) – High-value services like research, analytics, and consulting.

E-commerce Support – Order processing, inventory management, and digital payments.

Healthcare ITES – Medical billing, telemedicine, and patient record management.

Importance of IT & ITES in Business

1. Improved Efficiency & Productivity

IT solutions automate business operations, reducing manual effort and increasing efficiency. ITES enhances customer experience by providing seamless and fast service delivery.

2. Cost-Effectiveness

Businesses save costs by outsourcing IT-enabled services, reducing the need for in-house teams and infrastructure. Cloud computing also minimizes expenses by offering flexible, pay-as-you-go models.

3. Data-Driven Decision Making

Advanced IT tools provide data analytics and insights that help businesses make informed decisions. ITES solutions like market research and data processing contribute to strategic planning.

4. Enhanced Security & Risk Management

Cybersecurity solutions protect businesses from cyber threats, data breaches, and hacking attempts. ITES providers ensure compliance with industry regulations and data protection standards.

5. Scalability & Global Reach

IT and ITES allow businesses to scale operations, expand to international markets, and provide 24/7 support to customers worldwide.

Future Trends in IT & ITES

Artificial Intelligence & Automation – AI-driven chatbots, robotic process automation (RPA), and machine learning will enhance ITES efficiency.

Cloud Computing Expansion – More businesses will migrate to cloud platforms for enhanced scalability and security.

Cybersecurity Innovations – AI-powered security tools will improve threat detection and response.

Remote Work Solutions – ITES will continue to support virtual teams with cloud collaboration tools.

Big Data & Analytics – Businesses will rely more on real-time data processing and predictive analytics.

Conclusion

IT and ITES are the backbone of modern businesses, enabling digital transformation, cost efficiency, and improved customer experiences. Organizations that invest in cutting-edge IT solutions and ITES services will stay ahead in the competitive digital economy.

Is your business leveraging IT and ITES to its full potential? Explore the latest digital solutions and drive growth in today’s tech-driven world!
`,
  },
  {
    image: img1,
    title: 'Top 10 Startup Marketing Mistakes ',
    content: `Avoid these:\n1. Skipping market research\n2. Poor branding\n3. Over-relying on paid ads\n4. Ignoring SEO\n5. No clear messaging\n6. Inconsistent content\n7. Not measuring ROI\n8. Ignoring mobile users\n9. No retargeting strategy\n10. Not understanding the audienceNot understanding the audience Not understanding the audience Not understanding the audience Not understanding the audience Not understanding the audience `,
  },
];

const Blogs = ({ showButton = true }) => {
  const totalCards = blogData.length;
  const [index, setIndex] = useState(0);
  const wrapperRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const navigate = useNavigate();
  const isMobile = window.innerWidth <= 768;

  const extendedBlogs = [
    ...blogData.slice(-3),
    ...blogData,
    ...blogData.slice(0, 3),
  ];

  const handleNext = () => {
    if (index >= totalCards) {
      setIsAnimating(false);
      setIndex(0);
      setTimeout(() => setIsAnimating(true), 50);
    } else {
      setIsAnimating(true);
      setIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (index <= 0) {
      setIsAnimating(false);
      setIndex(totalCards);
      setTimeout(() => setIsAnimating(true), 50);
    } else {
      setIsAnimating(true);
      setIndex((prev) => prev - 1);
    }
  };

  // Drag-to-scroll handlers
  useEffect(() => {
    const slider = wrapperRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    const mouseDownHandler = (e) => {
      isDown = true;
      slider.classList.add('dragging');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const mouseLeaveHandler = () => {
      isDown = false;
      slider.classList.remove('dragging');
    };

    const mouseUpHandler = () => {
      isDown = false;
      slider.classList.remove('dragging');
    };

    const mouseMoveHandler = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    };

    if (isMobile) {
      slider.addEventListener('mousedown', mouseDownHandler);
      slider.addEventListener('mouseleave', mouseLeaveHandler);
      slider.addEventListener('mouseup', mouseUpHandler);
      slider.addEventListener('mousemove', mouseMoveHandler);
    }

    return () => {
      if (isMobile) {
        slider.removeEventListener('mousedown', mouseDownHandler);
        slider.removeEventListener('mouseleave', mouseLeaveHandler);
        slider.removeEventListener('mouseup', mouseUpHandler);
        slider.removeEventListener('mousemove', mouseMoveHandler);
      }
    };
  }, [isMobile]);

  const cardWidth = `calc((100% - 4vh) / 3)`;

  return (
    <div className="blogs-section">
      <h1 className="blogs-heading">OUR LATEST BLOGS</h1>
      <div className="blogs-container">
        {!isMobile && (
          <button className="arw-button left" onClick={handlePrev}>
            <ChevronLeft />
          </button>
        )}

        <div className="slider-window">
          <div
            ref={wrapperRef}
            className={`blogs-wrapper ${isAnimating ? 'animate' : ''}`}
            style={{
              transform: !isMobile ? `translateX(-${index * (100 / 3)}%)` : 'none',
              overflowX: isMobile ? 'auto' : 'visible',
              cursor: isMobile ? 'grab' : 'default',
            }}
          >
            {extendedBlogs.map((blog, i) => (
              <div
                key={i}
                className="blog-card-container"
                style={{
                  width: isMobile ? '85vw' : cardWidth,
                }}
              >
                <BlogCard
                  image={blog.image}
                  title={blog.title}
                  onClick={() => navigate(`/blog/${i}`, { state: blog })}
                />
              </div>
            ))}
          </div>
        </div>

        {!isMobile && (
          <button className="arw-button right" onClick={handleNext}>
            <ChevronRight />
          </button>
        )}
      </div>

      {showButton && (
        <button className="show-more" onClick={() => navigate('/blogs')}>
          Show More
        </button>
      )}
    </div>
  );
};

export default Blogs;
