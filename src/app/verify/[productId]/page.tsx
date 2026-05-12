import { PRODUCTS } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import VerifyClient from "./VerifyClient";

export default async function VerifyPage(props: PageProps<'/verify/[productId]'>) {
  const { productId } = await props.params;
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) notFound();

  return <VerifyClient product={product} />;
}

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ productId: p.id }));
}
