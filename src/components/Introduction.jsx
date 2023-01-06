import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-labelledby="introduction-title"
      className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
    >
      <h2
        id="introduction-title"
        className="sr-only flex justify-center text-2xl font-bold text-slate-800"
      >
        Introduction
      </h2>
      <Container>
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Welcome to my world! <br></br>I hope you weren't disappointed with the
          gift.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          This message and gift are just between us, okay? I'd appreciate it if
          you could keep it to yourself. Reason: I don't want to make anyone
          feel left out.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Hey everyone, I just wanted to take a moment to say how much I
          appreciate each and every one of you. Your friendship means so much to
          me and you've had such a good impact. I know we're all unique and have
          our own quirks, but I try to focus on the things that make me special,
          rather than dwelling on negative labels or self-perception. If I'm
          ever feeling uncertain about how I come across to others, I know I can
          always turn to you guys for honest and supportive feedback. And when
          giving a gift to you, my focus is on the sentiment behind it rather
          than trying to be overly creative.. and I try to express my
          appreciation and affection with a heartfelt message. Thanks for being
          such wonderful friends.
        </p>

        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Here's hoping the new year brings us all the things we really need,
          like a never-ending supply of caffeine and the ability to solve
          differential equations in our sleep, successfully pulling all-nighters
          and sufficient attendance etc. Let's make it a great year!
        </p>
      </Container>
    </section>
  )
}
