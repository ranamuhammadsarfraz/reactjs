"use client"
import { useState } from "react"
import Link from "next/link"
import { HeadProvider, Title, Meta } from 'react-head';

export default function page() {
  return (
    <div>
      <HeadProvider>
        <Title>NextJs Practice</Title>
        <Meta name="example" content="whatever" />
      </HeadProvider>
      <p>Hello world!</p>
    </div>
  )
}