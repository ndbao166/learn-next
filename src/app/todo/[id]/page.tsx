'use client'

import { useParams } from "next/navigation";

export default function TodoPage() {
  const { id } = useParams();
  
    return <div>TodoPage {id}</div>;
}