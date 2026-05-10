import { useLocation, Link, Navigate } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import IQMeter from "@/components/IQMeter";
import ComparisonChart from "@/components/ComparisonChart";
import WikiImage from "@/components/WikiImage";
import FamousPersonIcon from "@/components/FamousPersonIcon";
import Breadcrumb from "@/components/Breadcrumb";
import { getFamousPersonBySlug, famousIQData } from "@/data/famousIQData";
import { careerIQData } from "@/data/careerIQData";


const seoTitles: Record<string, string> = {
  "cristiano-ronaldo": "Cristiano Ronaldo's IQ: How Smart Is the GOAT? | MyIQScores",
  "elon-musk": "Elon Musk's IQ: Estimated at 150-155 | MyIQScores",
  "albert-einstein": "Albert Einstein's IQ: Estimated at 160 | MyIQScores",
  "stephen-hawking": "Stephen Hawking's IQ: Estimated at 160 | MyIQScores",
  "taylor-swift": "Taylor Swift's IQ: How Smart Is She Really? | MyIQScores",
  "lebron-james": "LeBron James' IQ: Basketball Genius Breakdown | MyIQScores",
  "donald-trump": "Donald Trump's IQ: Claims, Estimates & Analysis | MyIQScores",
  "mark-zuckerberg": "Mark Zuckerberg's IQ: Estimated at 140-152 | MyIQScores",
  "kim-kardashian": "Kim Kardashian's IQ: Smarter Than You Think? | MyIQScores",
  "bill-gates": "Bill Gates' IQ: Estimated at 150-160 | MyIQScores",
  "kanye-west": "Kanye West's IQ: Creative Genius or Overrated? | MyIQScores",
  "lionel-messi": "Lionel Messi's IQ: Football Genius Analyzed | MyIQScores",
  "jeff-bezos": "Jeff Bezos' IQ: Estimated at 145-155 | MyIQScores",
  "joe-rogan": "Joe Rogan's IQ: What We Know | MyIQScores",
  "beyonce": "Beyoncé's IQ: How Smart Is Queen Bey? | MyIQScores",
  "nikola-tesla": "Nikola Tesla's IQ: Estimated at 160-200+ | MyIQScores",
  "jeffrey-epstein": "Jeffrey Epstein's IQ: How Smart Was He Really? | MyIQScores",
  "andrew-tate": "Andrew Tate's IQ: Estimated at 120-132 | MyIQScores",
  "michael-jordan": "Michael Jordan's IQ: Basketball Genius Breakdown | MyIQScores",
  "drake": "Drake's IQ: The Mind Behind Music's Biggest Brand | MyIQScores",
  "rihanna": "Rihanna's IQ: Business Genius Behind Fenty Beauty | MyIQScores",
  "michael-jackson": "Michael Jackson's IQ: The King of Pop's Genius | MyIQScores",
  "sam-altman": "Sam Altman's IQ: OpenAI's Visionary CEO Analyzed | MyIQScores",
  "jensen-huang": "Jensen Huang's IQ: The Mind That Built the AI Era | MyIQScores",
  "tiger-woods": "Tiger Woods' IQ: Golf Genius on and off the Course | MyIQScores",
  "vladimir-putin": "Vladimir Putin's IQ: KGB Agent to World Leader | MyIQScores",
  "joe-biden": "Joe Biden's IQ: 46th President's Estimated Intelligence | MyIQScores",
  "kamala-harris": "Kamala Harris's IQ: Prosecutor, VP, Estimated Intelligence | MyIQScores",
  "xi-jinping": "Xi Jinping's IQ: China's President Analyzed | MyIQScores",
  "the-weeknd": "The Weeknd's IQ: Self-Taught Music Genius Breakdown | MyIQScores",
  "dua-lipa": "Dua Lipa's IQ: Multilingual Pop Star's Intelligence Analyzed | MyIQScores",
  "barron-trump": "Barron Trump's IQ: What We Know So Far | MyIQScores",
  "sabrina-carpenter": "Sabrina Carpenter's IQ: Songwriter and Pop Star Analyzed | MyIQScores",
  "ishowspeed": "IShowSpeed's IQ: The World's Most Watched Streamer | MyIQScores",
  "kai-cenat": "Kai Cenat's IQ: Twitch's Most Subscribed Streamer Analyzed | MyIQScores",
  "harry-styles": "Harry Styles's IQ: From One Direction to Solo Genius | MyIQScores",
  "ryan-reynolds": "Ryan Reynolds's IQ: Actor, Entrepreneur, Marketing Genius | MyIQScores",
  "pedro-pascal": "Pedro Pascal's IQ: The Mandalorian Star Analyzed | MyIQScores",
  "chappell-roan": "Chappell Roan's IQ: The Rise of a Midwest Princess | MyIQScores",
  "peso-pluma": "Peso Pluma's IQ: Corridos Tumbados Pioneer Analyzed | MyIQScores",
  "jungkook-bts": "Jung Kook's IQ: BTS's Golden Artist Analyzed | MyIQScores",
};

const seoDescs: Record<string, string> = {
  "cristiano-ronaldo": "What is Cristiano Ronaldo's IQ? Explore estimates of CR7's intelligence, how it compares to other athletes, and what makes him a genius on the pitch.",
  "elon-musk": "Elon Musk's IQ is estimated at 150-155. See how his physics background, first-principles thinking, and multi-company leadership reflect exceptional cognitive ability.",
  "albert-einstein": "Einstein's IQ is estimated at 160 — never officially tested. Learn about his thought experiments, the late-bloomer myth, and what made him history's most iconic genius.",
  "stephen-hawking": "Hawking's IQ is estimated at 160. He famously said IQ-boosters are losers. See what his physics work actually reveals about his extraordinary intellectual ability.",
  "taylor-swift": "Taylor Swift's IQ is estimated at 120-130. Her re-recording strategy, lyrical complexity, and billion-dollar brand show intelligence far beyond what most people expect.",
  "lebron-james": "LeBron's IQ is estimated at 110-120. His legendary basketball IQ, photographic memory claims, and business empire reveal a uniquely gifted mind beyond the court.",
  "donald-trump": "Donald Trump's IQ: what Wharton, his business career, and his own bold claims suggest. A factual, politically neutral analysis of his estimated cognitive ability.",
  "mark-zuckerberg": "Zuckerberg's IQ is estimated at 140-152. His 1590 SAT score, Harvard dorm-room coding, and Meta/AI pivot reveal the mind behind the world's largest social network.",
  "kim-kardashian": "Kim Kardashian passed the baby bar — a 20% pass-rate exam. Her IQ is estimated at 110-120. Discover the real business intelligence behind her billion-dollar empire.",
  "bill-gates": "Bill Gates scored 1590/1600 on the SAT. His IQ is estimated at 150-160. See what Microsoft, his legendary reading habits, and philanthropy reveal about his exceptional mind.",
  "kanye-west": "Kanye West's IQ is estimated at 115-125. Musical innovator, fashion mogul, controversial genius — a balanced look at the cognitive profile behind one of music's biggest names.",
  "lionel-messi": "Messi's IQ is estimated at 110-120. His spatial intelligence and split-second decisions on the pitch are analyzed and compared to his long-time rival Cristiano Ronaldo.",
  "jeff-bezos": "Bezos graduated Princeton summa cum laude. IQ estimated at 145-155. See how his long-term thinking and data-driven strategy reveal one of the sharpest minds in business.",
  "joe-rogan": "Joe Rogan's IQ is estimated at 110-120. He calls himself average, but his curiosity-driven learning and podcast depth tell a more interesting story. What the data shows.",
  "beyonce": "Beyoncé's IQ is estimated at 120-130. Behind the performances is a business strategist, visual album pioneer, and empire-builder who is far more than a pop star.",
  "nikola-tesla": "Tesla's IQ is estimated at 160-200+. His eidetic memory, AC electricity mastery, rivalry with Edison, and ability to mentally simulate machines set him apart from every peer.",
  "jeffrey-epstein": "What was Jeffrey Epstein's IQ? Examining the financial genius, MIT connections, and dark intelligence behind one of history's most controversial figures.",
  "andrew-tate": "What is Andrew Tate's IQ? Estimated at 120-132, the 4x kickboxing champion and entrepreneur breaks down his chess background and business intelligence.",
  "michael-jordan": "What is Michael Jordan's IQ? His basketball genius, psychological dominance, and billion-dollar business empire reveal a mind far beyond the court.",
  "drake": "What is Drake's IQ? Estimated at 112-125, the most charted artist in Billboard history reveals a remarkably consistent commercial and creative intelligence.",
  "rihanna": "What is Rihanna's IQ? The Fenty Beauty billionaire's business genius disrupted the beauty industry and made her the world's wealthiest female musician.",
  "michael-jackson": "What was Michael Jackson's IQ? The King of Pop's musical genius, Beatles catalog purchase, and studio perfectionism reveal a remarkably high IQ.",
  "sam-altman": "What is Sam Altman's IQ? The OpenAI CEO who launched ChatGPT — the fastest-growing app in history — shows signs of an exceptional IQ of 145-160.",
  "jensen-huang": "What is Jensen Huang's IQ? Nvidia's CEO built a $3 trillion company by betting on GPU computing before anyone else — suggesting an IQ of 145-155.",
  "tiger-woods": "What is Tiger Woods' IQ? His 15 majors, Stanford education, and course management intelligence suggest an IQ well above average for athletes.",
  "vladimir-putin": "What is Vladimir Putin's IQ? The former KGB officer and Russian president has been estimated at 127-135 by intelligence analysts.",
  "joe-biden": "Joe Biden's IQ is estimated at 128–140. His 36-year Senate foreign policy career and presidential record reveal an intellectual profile far more sophisticated than his verbal gaffes suggest.",
  "kamala-harris": "Kamala Harris's IQ is estimated at 125–140. Her prosecutorial career, California AG tenure, and historic Vice Presidency reflect systematic analytical and legal intelligence.",
  "xi-jinping": "Xi Jinping's IQ is estimated at 130–145. His Tsinghua engineering degree, four-decade rise through the CCP, and Belt and Road Initiative reflect exceptional strategic intelligence.",
  "the-weeknd": "The Weeknd's IQ is estimated at 112–125. He dropped out at 17 and taught himself everything — building one of music's biggest careers through self-directed intelligence and creative vision.",
  "dua-lipa": "Dua Lipa's IQ is estimated at 115–128. Trilingual, a former Strategic Management student, and the mind behind Future Nostalgia's calculated retro-pop revival and Service95 media platform.",
  "barron-trump": "Barron Trump's IQ is estimated at 120–140 — though with high uncertainty. He grew up bilingual in English and Slovenian and attends NYU Stern, but remains deliberately private.",
  "sabrina-carpenter": "Sabrina Carpenter's IQ is estimated at 118–128. Homeschooled while working professionally from age 11, she wrote every album and engineered one of pop's most strategic career transitions.",
  "ishowspeed": "IShowSpeed's IQ is estimated at 105–118. Building a 20M+ subscriber channel as a teenager through pure real-time improvisation reflects strong practical and social intelligence.",
  "kai-cenat": "Kai Cenat's IQ is estimated at 108–120. Three-time Streamer of the Year and most subscribed Twitch streamer in history — his social intelligence is among the highest in entertainment.",
  "harry-styles": "Harry Styles's IQ is estimated at 115–128. From One Direction dropout to Grammy winner, Oscar-adjacent actor, and fashion icon — his deliberate artistic risk-taking reflects rare integrative intelligence.",
  "ryan-reynolds": "Ryan Reynolds's IQ is estimated at 125–138. Selling Aviation Gin for $610M and Mint Mobile for $1.35B reveals a marketing and business intelligence that transcends his acting career.",
  "pedro-pascal": "Pedro Pascal's IQ is estimated at 118–130. His ability to play The Mandalorian entirely without facial expressions — and make it iconic — reflects extraordinary emotional and performative intelligence.",
  "chappell-roan": "Chappell Roan's IQ is estimated at 115–128. The Rise and Fall of a Midwest Princess and her articulate public statements about fame reveal theatrical and self-reflective intelligence beyond her years.",
  "peso-pluma": "Peso Pluma's IQ is estimated at 110–122. He pioneered corridos tumbados and became the most streamed Mexican artist in history — a genre-creating achievement requiring genuine musical intelligence.",
  "jungkook-bts": "Jung Kook's IQ is estimated at 118–130. BTS's Golden vocalist mastered dance, vocals, and production simultaneously while helping make Korean-language pop a global mainstream force.",
};

const FamousIQ = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace("/famous-iq/", "");
  const person = slug ? getFamousPersonBySlug(slug) : undefined;

  if (!person) return <Navigate to="/what-is-iq" replace />;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: person.faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.myiqscores.com" },
      { "@type": "ListItem", position: 2, name: "Famous IQs", item: "https://www.myiqscores.com/famous-iq" },
      { "@type": "ListItem", position: 3, name: `${person.name}'s IQ`, item: `https://www.myiqscores.com/famous-iq/${person.slug}` },
    ],
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    description: person.description,
    url: `https://www.myiqscores.com/famous-iq/${person.slug}`,
  };

  const personIQ = parseInt(person.estimatedIQ);
  const otherPeople = famousIQData.filter((p) => p.slug !== person.slug);
  const similarIQPeople = otherPeople
    .filter((p) => Math.abs(parseInt(p.estimatedIQ) - personIQ) <= 10)
    .slice(0, 6);
  const displayComparisons = similarIQPeople.length >= 3 ? similarIQPeople : otherPeople.slice(0, 6);
  const relatedCareers = careerIQData.filter((c) => personIQ >= c.minIQ - 5 && personIQ <= c.maxIQ + 5).slice(0, 3);

  const relatedPages = [
    { title: "Famous People IQ Scores (Full List)", href: "/famous-iq" },
    { title: `Is ${personIQ} IQ Good?`, href: `/is-${personIQ}-iq-good` },
    { title: "Highest IQ Ever Recorded", href: "/highest-iq-ever" },
    ...displayComparisons.slice(0, 2).map((p) => ({ title: `${p.name}'s IQ (${p.estimatedIQ})`, href: `/famous-iq/${p.slug}` })),
    { title: "IQ by Career Chart", href: "/iq-by-career" },
  ];

  return (
    <ContentPage ctaText="How does your IQ compare? Take the free test" relatedPages={relatedPages}>
      <SEOHead
        title={seoTitles[person.slug] ?? `${person.name}'s IQ: ${person.estimatedIQ} — What It Means | MyIQScores`}
        description={seoDescs[person.slug] ?? `${person.name}'s IQ is estimated at ${person.estimatedIQ}. Learn what this means, how it compares, and what made ${person.name} a genius.`}
        canonicalUrl={`/famous-iq/${person.slug}`}
        ogType="article"
        jsonLd={[faqSchema, breadcrumbSchema, personSchema]}
      />

      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Famous IQs", href: "/famous-iq" }, { label: `${person.name}'s IQ` }]} />

      <h1>
        <span className="gradient-text">{person.name}'s IQ</span>: {person.estimatedIQ}
      </h1>

      {/* Person visual */}
      {person.imageUrl ? (
        <WikiImage
          src={person.imageUrl}
          alt={`${person.name} photo`}
          caption={`${person.name} — estimated IQ: ${person.estimatedIQ}`}
        />
      ) : (
        <FamousPersonIcon name={person.name} />
      )}

      {/* IQ Meter */}
      <IQMeter score={parseInt(person.estimatedIQ)} label={person.name} />

      <div className="grid grid-cols-2 gap-4 my-6">
        <div className="glass-card p-5 text-center rounded-xl">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Estimated IQ</p>
          <p className="font-heading font-bold text-3xl gradient-text">{person.estimatedIQ}</p>
        </div>
        <div className="glass-card p-5 text-center rounded-xl">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Known For</p>
          <p className="font-heading font-medium text-sm text-foreground">{person.knownFor}</p>
        </div>
      </div>

      <h2>About {person.name}</h2>
      <p>{person.description}</p>

      <h2>What an IQ of {person.estimatedIQ} Means</h2>
      <p>{person.iqContext}</p>

      {/* Visual comparison with other famous people */}
      <ComparisonChart
        title={`How ${person.name} Compares`}
        items={[
          { label: person.name, value: parseInt(person.estimatedIQ), highlight: true },
          ...otherPeople.slice(0, 5).map((p) => ({
            label: p.name,
            value: parseInt(p.estimatedIQ),
            href: `/famous-iq/${p.slug}`,
          })),
        ]}
        maxValue={210}
      />

      <p>
        To understand where this falls on the IQ scale, see our{" "}
        <Link to="/iq-score-ranges">complete IQ score ranges guide</Link>, or learn{" "}
        <Link to="/what-is-iq">what IQ actually measures</Link>.
      </p>

      <h2>Famous IQ Comparison</h2>
      <table>
        <thead>
          <tr>
            <th>Person</th>
            <th>Estimated IQ</th>
            <th>Known For</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[rgba(0,229,255,0.05)]">
            <td><strong>{person.name}</strong></td>
            <td><strong>{person.estimatedIQ}</strong></td>
            <td>{person.knownFor}</td>
          </tr>
          {displayComparisons.map((p) => (
            <tr key={p.slug}>
              <td><Link to={`/famous-iq/${p.slug}`}>{p.name}</Link></td>
              <td>{p.estimatedIQ}</td>
              <td>{p.knownFor}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-sm text-muted-foreground">
        See the <Link to="/famous-iq">complete famous IQ list</Link> or check{" "}
        <Link to={`/is-${personIQ}-iq-good`}>what an IQ of {personIQ} means</Link>.
      </p>

      {relatedCareers.length > 0 && (
        <>
          <h2>Careers That Match an IQ of {personIQ}</h2>
          <ul>
            {relatedCareers.map((c) => (
              <li key={c.slug}>
                <Link to={`/iq-needed-for/${c.slug}`}>{c.career}</Link> — typical IQ range: {c.avgIQRange}
              </li>
            ))}
          </ul>
          <p>Explore the full <Link to="/iq-by-career">IQ by career chart</Link>.</p>
        </>
      )}

      <h2>Frequently Asked Questions</h2>
      {person.faqItems.map((item, i) => (
        <div key={i}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}

      <h2>Explore More Famous IQs</h2>
      <div className="flex flex-wrap gap-3 my-4">
        {displayComparisons.map((p) => (
          <Link
            key={p.slug}
            to={`/famous-iq/${p.slug}`}
            className="glass-card px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-[rgba(255,255,255,0.08)] transition-colors no-underline"
          >
            {p.name} ({p.estimatedIQ})
          </Link>
        ))}
      </div>

      <p className="mt-6">
        <Link to="/test">Take our free IQ test</Link> to discover your own score, or explore{" "}
        <Link to={`/is-${personIQ}-iq-good`}>what an IQ of {personIQ} means</Link>.
      </p>
    </ContentPage>
  );
};

export default FamousIQ;
