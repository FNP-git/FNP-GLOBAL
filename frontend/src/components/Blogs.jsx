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
    title: 'Building Consortiums: The Future of Collaborative Consulting',
    content: `In an era defined by rapid transformation and hyper-specialization, the consulting world is undergoing its own quiet revolution. Independent consultants, once isolated practitioners navigating the complexities of client work solo, are increasingly banding together to form consulting consortiums—a dynamic model that is reshaping how value is delivered in today’s business environment.

Why Consortiums Are Gaining Momentum
Clients today aren’t just looking for one-off advice or piecemeal solutions. They seek holistic strategies that touch on everything from digital transformation and talent management to regulatory compliance and change leadership. One consultant—no matter how experienced—simply can't wear all the hats. This is where consortiums step in.

A consulting consortium brings together specialists from diverse fields under a flexible, collaborative umbrella. Rather than building a formal firm with heavy infrastructure, independent experts pool their strengths to provide comprehensive, integrated solutions without the overhead of a traditional agency.

The Melisa Liberman Influence
Melisa Liberman, a leading voice in the independent consulting space, has long championed the power of mindset, marketing, and business systems for solo consultants. While she doesn’t run a consortium herself, her frameworks have empowered thousands to think bigger—beyond individual engagements—and to adopt more scalable, collaborative models.

Her philosophy is clear: Independent doesn’t mean isolated.

By building strategic partnerships with other consultants, independents can offer services that rival those of the big firms—without compromising their autonomy or niche expertise.

Benefits of Consortium-Based Consulting
Here are some compelling reasons why this model is the future:

Broader Solutions, Better Results: Clients benefit from multidisciplinary input, leading to more innovative and sustainable outcomes.

Agility Without Bureaucracy: Without the layers of management found in large firms, consortiums move fast—ideal for businesses facing rapid change.

Shared Risk and Reward: Large engagements can be shared among members, allowing for bigger projects and shared accountability.

Scalable Growth: Consultants can scale their business without hiring staff, opting instead to grow their network.

How to Start or Join a Consortium
If you’re an independent consultant considering this model, start with these steps:

Clarify Your Niche – Know your core offering so you can partner with complementary experts.

Build Relationships – Look for professionals who share your values and work ethic.

Define Roles & Processes – Set expectations around project leadership, revenue sharing, client communication, and quality control.

Brand Collectively, Deliver Individually – Create a unified presence that still allows each consultant to retain their identity.

Final Thoughts
The future of consulting is collaborative, not competitive. As clients seek more value and less complexity, consortiums offer the best of both worlds: the breadth of a full-service firm with the agility of a boutique consultant.

For independent professionals ready to expand their impact, this is more than a trend—it’s a movement. One that could redefine your consulting practice, your revenue potential, and your legacy.
`,
  },
  {
    image: img1,
    title: 'Procurement as a Driver of Innovation',
    content: `Transforming Spend into Strategy
Traditionally viewed as a cost-controlling, back-office function, procurement is undergoing a radical transformation. Today, it sits at the intersection of value creation and innovation, emerging as a strategic engine that powers business growth, agility, and competitiveness. Far from merely sourcing supplies, modern procurement teams are shaping how organizations innovate, adapt, and thrive in a rapidly evolving global landscape.

The Shift: From Cost-Centric to Value-Oriented
The old narrative around procurement focused largely on negotiating the lowest prices and maintaining operational efficiency. However, in an era driven by technological disruption, sustainability demands, and global supply chain volatility, the procurement function is being reimagined as a strategic enabler of innovation.

This shift involves moving from transactional relationships to collaborative partnerships, where suppliers are not just vendors but co-creators. Organizations are now investing in supplier ecosystems that bring fresh thinking, niche capabilities, and cutting-edge technologies to the table.

Strategic Sourcing for Innovation
Forward-thinking companies are embedding innovation KPIs into their procurement strategies. This includes:

Evaluating suppliers not just on cost and compliance, but on their innovation potential.

Building supplier innovation programs that reward new product ideas, sustainability breakthroughs, and digital transformation solutions.

Tapping into startups and emerging tech companies for agile, out-of-the-box thinking.

These practices position procurement teams as curators of innovation rather than gatekeepers of cost.

Data-Driven Decision Making
The rise of procurement analytics, AI, and digital tools is revolutionizing how procurement professionals identify opportunities and make strategic decisions. Predictive analytics can now uncover emerging trends, optimize supplier selection, and even forecast future innovation hotspots.

Smart procurement teams are using data to:

Spot innovation clusters in specific regions or industries.

Monitor supplier performance in real-time.

Identify risk factors before they disrupt operations.

These insights allow businesses to act with agility and build innovation into the procurement lifecycle itself.

Co-Innovation: Building Value Together
A growing number of organizations are embracing co-innovation models, where procurement actively facilitates collaboration between internal teams and external suppliers. This co-creation approach results in:

Custom solutions tailored to business needs.

Faster time-to-market for new products and services.

Greater alignment between R&D, marketing, and procurement.

In this model, procurement becomes a bridge — not a barrier — to innovation.

Sustainability and Innovation Go Hand-in-Hand
Sustainability is no longer a checkbox — it’s a catalyst for innovation. Procurement plays a pivotal role in helping companies meet their environmental, social, and governance (ESG) goals by:

Sourcing eco-friendly materials.

Partnering with sustainable suppliers.

Driving the adoption of circular economy models.

Through sustainable sourcing strategies, procurement fuels innovation that is not only profitable but also responsible.

The Road Ahead
As the global business environment becomes more complex, procurement’s role will continue to evolve. Companies that recognize procurement as a strategic lever — not just a functional necessity — will be better positioned to unlock innovation, build resilience, and maintain competitive advantage.

Procurement is no longer just about buying things — it’s about buying into the future.`,
  },
  {
    image: img1,
    title: 'Empowering Business Through ESG',
    content: `1. Strategic Integration of ESG Principles
Leading consulting firms are assisting businesses in embedding ESG considerations into their strategic planning and decision-making processes. By aligning sustainability goals with business objectives, companies can drive innovation, enhance resilience, and create long-term value. This holistic approach ensures that ESG factors are not just add-ons but integral to the company's mission and operations. ​

2. Navigating Regulatory Landscapes
With the global surge in ESG-related regulations, consultants play a pivotal role in helping companies understand and comply with these evolving requirements. For instance, in India, the Securities and Exchange Board (SEBI) is reviewing ESG disclosure mandates for listed firms, emphasizing the need for accurate and meaningful reporting. Consultants provide the expertise to ensure that businesses not only meet these standards but also leverage them for competitive advantage.​

3. Enhancing ESG Reporting and Transparency
Accurate and transparent ESG reporting is crucial for stakeholder trust and investment decisions. Consultants assist organizations in developing robust reporting frameworks, utilizing advanced technologies to streamline data collection and analysis. Tools like AI-driven platforms are being employed to reduce reporting time and enhance accuracy, enabling companies to present a clear picture of their sustainability efforts. ​

4. Building Sustainable Organizational Cultures
Beyond compliance, consultants are instrumental in fostering a culture of sustainability within organizations. This involves training leadership and employees, setting performance incentives aligned with ESG goals, and integrating sustainability into the company's values and daily operations. Such cultural shifts are essential for the long-term success of ESG initiatives. 
​
5. Leveraging ESG for Innovation and Growth
Consultants help businesses identify opportunities where ESG initiatives can drive innovation and open new markets. By focusing on sustainable product development, circular economy models, and responsible sourcing, companies can differentiate themselves and meet the growing consumer demand for ethical and sustainable products. 

Conclusion
The integration of ESG principles into business strategies is no longer optional but a necessity in the modern corporate world. Consultants serve as vital partners in this journey, providing the expertise, tools, and guidance needed to navigate the complexities of sustainability. By embedding ESG into the fabric of their operations, companies not only contribute positively to society and the environment but also position themselves for enduring success in a conscientious marketplace.​`,
  },
  {
    image: img1,
    title: 'Integrating Generative AI into Consulting Practices',
    content: `The consulting industry is undergoing a quiet revolution—and at the heart of it lies Generative AI. From crafting personalized strategies to automating research-heavy processes, consultants are now unlocking new levels of efficiency and innovation by integrating generative tools like ChatGPT, DALL·E, and other large language models (LLMs) into their day-to-day workflows.

Why Generative AI Matters in Consulting
Consulting has always been about solving complex problems, creating tailored strategies, and delivering impactful insights. However, with generative AI, these capabilities are expanding exponentially.

Here’s how consultants are leveraging this technology:

1. Accelerated Research & Insight Generation
Generative AI can rapidly analyze large volumes of industry data, generate summaries, and suggest actionable insights. This allows consultants to spend less time on manual research and more time focusing on high-level strategic thinking.

2. Enhanced Client Deliverables
Consultants are now using AI tools to create custom reports, presentations, and strategy decks in a fraction of the time it used to take. Generative AI enables the rapid drafting of content that is not only data-informed but also well-structured and visually coherent.

3. Improved Client Interaction
AI-driven chatbots and co-pilots are helping consultants provide 24/7 support, answer FAQs, and even conduct initial client interviews. This automation improves responsiveness while maintaining a human-centric approach through guided oversight.

4. Personalized Coaching and Strategy Development
For coaches and independent consultants, AI helps personalize programs by analyzing client progress, behavior patterns, and preferences—offering real-time guidance and content tailored to each individual’s needs.

The Ethical Lens: A Non-Negotiable Priority
With great power comes great responsibility—and the use of generative AI in consulting is no exception. As AI continues to evolve, ethical considerations must take center stage.

Key Concerns Include:
Data Privacy: Consultants must ensure that confidential client data is not shared with or processed by public AI models without consent.

Bias & Fairness: AI-generated insights can reflect historical biases present in the data. Human oversight is critical to ensure recommendations are equitable and inclusive.

Transparency: Clients should be informed when AI-generated content is being used, especially in decision-critical situations.

A responsible consultant doesn’t just adopt AI tools—they do so transparently, ethically, and strategically.

The Future Is Hybrid: AI + Human Expertise
Generative AI isn’t here to replace consultants—it’s here to amplify their value. The future of consulting lies in hybrid intelligence, where AI handles the repetitive and analytical tasks, while human consultants provide creativity, empathy, and strategic intuition.

Consultants who embrace this shift—and do so ethically—will be best positioned to lead in a rapidly evolving marketplace.

Final Thoughts

As Melisa Liberman Coaching and similar forward-thinking firms integrate AI into their toolkits, the goal remains unchanged: empowering clients to succeed. With generative AI as a powerful ally, the consulting experience becomes not just faster or smarter—but more impactful than ever before.

`,
  },
  {
    image: img1,
    title: 'The Rise of Independent Consultants in 2025',
    content: `In 2025, a profound shift is transforming the landscape of the consulting industry—the rise of independent consultants. As businesses increasingly seek flexible, specialized, and cost-effective expertise, the number of professionals venturing out as solo consultants is surging like never before.

A Growing Movement
Fueled by the global rise of remote work and the demand for niche expertise, more professionals are choosing autonomy over traditional employment. According to industry insights, the number of full-time independent consultants has grown significantly in the past 18 months. This trend is reshaping the way consulting services are delivered, consumed, and valued.

Today’s independent consultants are not just freelancers — they are strategic partners, often with years or decades of industry experience. They're leveraging technology, personal branding, and digital platforms to market themselves and deliver high-quality services to clients across the globe.

Why This Shift is Happening
Several factors are accelerating this trend:

Digital Transformation: Cloud tools, collaboration platforms, and AI-based research assistants have made it easier than ever to consult independently, without the infrastructure of a big firm.

Client Preferences: Businesses are seeking agility. They want experts who can jump in, solve problems, and move on — without long onboarding or high overhead costs.

Lifestyle Choices: Many professionals crave flexibility, autonomy, and the ability to choose their clients and projects. Consulting independently offers that freedom.

The Value Proposition of Independent Consultants
Independent consultants are often seen as more adaptable, innovative, and directly accountable than their counterparts in larger firms. They offer:

Specialized Expertise: Many have carved out micro-niches, offering razor-sharp insight into very specific business challenges.

Cost Efficiency: Without the layers of management and overhead, their services often come at a more attractive price point.

Speed and Flexibility: Leaner operations mean quicker turnarounds and the ability to pivot as client needs evolve.

Challenges and Considerations
Despite the appeal, going solo isn’t without hurdles. Independent consultants face challenges like:

Client Acquisition: Building a reliable pipeline of clients requires marketing savvy and persistence.

Inconsistent Income: Unlike salaried roles, income can fluctuate, making financial planning essential.

Loneliness and Burnout: Working independently can be isolating and demanding without the right support systems.

To combat these issues, many are joining consultant networks, coworking communities, and investing in personal coaching or peer groups to stay motivated and supported.

What This Means for the Industry
The rise of independent consultants doesn’t signal the end of traditional firms, but it does indicate a more hybrid, decentralized future for the industry. Large firms are even beginning to partner with independent experts to access their insights and agility.

As we move through 2025, companies will likely adopt a blended approach—using internal teams, big consulting firms, and independent specialists based on the nature and urgency of each challenge.

Conclusion
The independent consulting boom is not just a passing trend — it’s a reflection of broader changes in work culture, technology, and business strategy. As more professionals take the leap into independence, the consulting world is becoming more dynamic, diverse, and decentralized.

For businesses, this is an exciting opportunity to tap into on-demand expertise like never before. And for consultants, it’s a moment to shape careers on their own terms.`,
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
