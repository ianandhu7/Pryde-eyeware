import { collectionCopy } from "@/content/collections";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CollectionGrid } from "@/components/collections/CollectionGrid";
import { pageMetadata } from "@/lib/metadata";
export const metadata=pageMetadata("/collections");
export default function Collections(){return <Container><section className="page-intro"><SectionHeading h1 eyebrow={collectionCopy.eyebrow} title={collectionCopy.title} description={collectionCopy.intro}/><h2 className="sr-only">{collectionCopy.categoryHeading}</h2><CollectionGrid/></section></Container>;}
