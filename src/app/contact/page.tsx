import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { pageMetadata } from "@/lib/metadata";
export const metadata=pageMetadata("/contact");
export default function Contact(){const copy=site.contact;const hasContact=site.email||site.phone||site.address;return <Container><div className="page-intro"><SectionHeading h1 eyebrow={copy.eyebrow} title={copy.title} description={copy.intro}/></div><section className="empty-state">{hasContact?<><h2>Get in touch.</h2>{site.email&&<p><a href={"mailto:"+site.email}>{site.email}</a></p>}{site.phone&&<p><a href={site.phone.href}>{site.phone.label}</a></p>}{site.address&&<p style={{whiteSpace:"pre-line"}}>{site.address}</p>}</>:<><h2>{copy.emptyTitle}</h2><p>{copy.emptyText}</p></>}<Button href="/collections">Explore the collections</Button></section></Container>;}
