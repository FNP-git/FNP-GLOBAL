import React from 'react';
import { useNavigate } from 'react-router-dom';
import FullCard from './FullCard';
import './BlogContainer.css';
import img1 from '../assets/financial.png';

const blogs = [
  {
    image: img1,
    title: "Mastering SEO in 2025: What's Changed and What Matters Most",
    text: "Indeed official future would speak whose almost knowledge become. Grow summer two rise win offer base skin. Director myself fear listen opportunity war fine...",
    content: `Indeed official future would speak whose almost knowledge become. Grow summer two rise win offer base skin. Director myself fear listen opportunity war fine.\n\nSignificant let spring rule. Art seek general now while difference later class. White join already raise site result share rule rich.\n\nQuality production ever democratic experience. Fill social close analysis. Here soon include establish weight first project mission. Save kind amount share finally international cost.\n\n...` // truncated for brevity
  },
  {
    image: img1,
    title: "The Future of Web Development: JAMstack, Headless CMS, and Beyond",
    text: "Produce president property nor general garden live specific rule. Bed think reflect western tend cover. Another Democrat into surface general girl ever father...",
    content: `Produce president property nor general garden live specific rule. Bed think reflect western tend cover. Another Democrat into surface general girl ever father.\n\nPerformance experience national whose too give minute strategy. Care music foot second machine theory himself every.\n\nJoin necessary fill build young mother technology economy. Pull culture turn local too.\n\n...`
  },
  {
    image: img1,
    title: "AI in Digital Marketing: Hype or Game-Changer?",
    text: "Government chair dark call appear doctor baby. Believe financial social five age personal beautiful skill. Visit claim entire should wear indicate moment...",
    content: `Government chair dark call appear doctor baby. Believe financial social five age personal beautiful skill. Visit claim entire should wear indicate moment.\n\nCompare sit herself serious democratic challenge central. Task raise represent avoid tax leader fact including strong. Watch tend adult among window candidate site.\n\n...`
  },
  {
    image: img1,
    title: "Crafting Conversion-Focused Websites: Psychology Meets UX",
    text: "Focus over travel by begin. First physical popular involve way reduce establish. Structure later determine individual. Rule theory center artist man...",
    content: `Focus over travel by begin. First physical popular involve way reduce establish. Structure later determine individual. Rule theory center artist man.\n\nThus campaign yourself issue test difference notice teacher. Food side end president Congress. Describe bag board start group south movement...\n\n...`
  },
  {
    image: img1,
    title: "From Clicks to Clients: Building an Effective PPC Funnel",
    text: "Stand opportunity point reach something century continue official. Respond safe describe let bag. Almost ready nor she might official exactly. Budget relate rich...",
    content: `Stand opportunity point reach something century continue official. Respond safe describe let bag. Almost ready nor she might official exactly. Budget relate rich.\n\nBecause deal board shake. Course today force themselves series happy. Real marriage hot child later center others art dark.\n\n...`
  },
  {
    image: img1,
    title: "Content Marketing in the Age of Algorithms",
    text: "Today section off himself stay push season recently. Nearly where maintain boy series cell. Approach everyone information site report occur view shoulder...",
    content: `Today section off himself stay push season recently. Nearly where maintain boy series cell. Approach everyone information site report occur view shoulder.\n\nPush nor imagine true force music success statement energy. Owner total tonight friend mouth notice rock western.\n\n...`
  },
  {
    image: img1,
    title: "Building Scalable Web Apps with React and Node.js",
    text: "Capital economic plant late least action consumer. Nice both thus short audience. Worker check within check number artist contain agent. Organization bar good worry...",
    content: `Capital economic plant late least action consumer. Nice both thus short audience. Worker check within check number artist contain agent. Organization bar good worry.\n\nYourself nearly above specific project human energy. Energy theory fall central worry fight much skin similar. Alone month smile those class.\n\n...`
  },
  {
    image: img1,
    title: "Email Automation Strategies That Actually Convert in 2025",
    text: "Cup anyone end purpose business add same. Up food relationship team agree second. See pattern top big artist admit pretty. Person into prevent mother daughter...",
    content: `Cup anyone end purpose business add same. Up food relationship team agree second. See pattern top big artist admit pretty. Person into prevent mother daughter.\n\nChurch fine cause civil rather next. Billion happen case list measure hold art. Hold fall magazine movie responsibility weight guess message.\n\n...`
  },
  {
    image: img1,
    title: "How to Choose the Right CMS for Your Business",
    text: "Push employee direction again. Audience book against their phone build. Show beat book image door leave sense night. Lawyer western magazine popular election...",
    content: `Push employee direction again. Audience book against their phone build. Show beat book image door leave sense night. Lawyer western magazine popular election.\n\nAvailable address establish cold. Raise well less successful daughter continue. Report none explain finish themselves middle page.\n\n...`
  },
  {
    image: img1,
    title: "The Rise of No-Code/Low-Code Platforms in Business Strategy",
    text: "Bill whom blue newspaper eight election nation. Even camera second heart history line describe. System radio teach check allow company show become...",
    content: `Bill whom blue newspaper eight election nation. Even camera second heart history line describe. System radio teach check allow company show become.\n\nManager act themselves pressure Republican. Address sell hot population. Firm window wait budget relate decade. Better money indeed during sing personal.\n\n...`
  },
];


const BlogContainer = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="trend-heading">Trend Talks</h1>
      <div className="blog-container">
        {blogs.map((blog, index) => (
          <FullCard
            key={index}
            {...blog}
            onClick={() => navigate(`/blog/${index}`, { state: blog })}
          />
        ))}
      </div>
    </>
  );
};

export default BlogContainer;
