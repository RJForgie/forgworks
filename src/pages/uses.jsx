import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Ryan Forgie</title>
        <meta name="description" content="Software I use and would recommend" />
      </Head>
      <SimpleLayout
        title="Software I use and would recommend"
        intro="These are the tools that work for me; some may work for you."
      >
        <div className="space-y-20">
          <ToolsSection title="Development tools">
            <Tool title="Visual Studio Code">
              Does everything I want from an editor, one day i will try Vim
              again when I can summon the energy to configure it properly.
            </Tool>
            <Tool title="iTerm2">Replacment for the MacOS terminal.</Tool>
            <Tool title="RunJS">
              A JavaScript scratchpad/playground for working things out in
              isolation from large codebases.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="RayCast">
              A productivity focussed alternative to Spotlight. I use it to
              check my schedule and launch applications.
            </Tool>
            <Tool title="Ensō">
              A writing application that encourages focus and flow. Beats
              everything else I have tried for reducting friction for first
              drafts.
            </Tool>
            <Tool title="Sit">
              Blacks out my screen for a selected period of time to force me to
              focus and think though a problem or task.
            </Tool>
            <Tool title="Cold Turkey Blocker">
              I use this to block distracting websites and applications when I
              am trying to get things done.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
