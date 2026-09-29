import { collections } from "@/content/collections";
import { CollectionDetail } from "@/components/collections/CollectionDetail";
import { pageMetadata } from "@/lib/metadata";
export const metadata=pageMetadata("/collections/optical");
export default function Optical(){return <CollectionDetail collection={collections[0]}/>;}
