import { about } from "@/content/about";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { pageMetadata } from "@/lib/metadata";
export const metadata=pageMetadata("/about");
export default function About(){return <Container><div className="page-intro"><SectionHeading h1 eyebrow={about.eyebrow} title={about.title} description={about.intro}/></div><div className="prose"><h2>{about.approachTitle}</h2><p>{about.approach}</p><h2>{about.storyTitle}</h2><p>{about.story}</p><small>{about.note}</small></div><section className="cta-row"><h2>Find your perspective.</h2><Button href="/collections">Explore the collections</Button></section></Container>;}
