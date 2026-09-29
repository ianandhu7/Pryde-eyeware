import { collections } from "@/content/collections";
import { CollectionDetail } from "@/components/collections/CollectionDetail";
import { pageMetadata } from "@/lib/metadata";
export const metadata=pageMetadata("/collections/sunglasses");
export default function Sunglasses(){return <CollectionDetail collection={collections[1]}/>;}
