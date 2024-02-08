---
layout: "post"
title: Lessons Building Software
date: 2024-02-08
categories: essay
description: The lessons learned from building customer facing software for FGX's customers.
permalink: lessons-building-software
image:
image-description:
---
[@fgx](https://www.fgx.com) we have hundreds of businesses that ship their IT hardware with us and that's the way they’ve engaged with us since forever is email. In 2024.

Client wants a quote? Email. They want to book a shipment? Email. Tracking? Email.

We're about to ship the first iteration of our customer facing application (will update this post with the product launch link when we do) and here's what I learned.

### Designing software forces you to focus.

At FGX, our customers come to us with a thousand different kinds of problems. When email was the main medium of resolution, we could solve every problem under the sun.

But once we decided that we wanted to design software for our customers, we realized that we couldn’t design for every use case. **Designing software forced us to choose the problems we really wanted to solve as opposed to solving every problem we knew how to.**

It also seems that in software design, the more problems you try to solve, the more difficult it becomes to solve any of those problems well.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The more narrow your focus, the clearer your identity becomes. The clearer your identity becomes, the faster you move. The faster you move, the faster you can iterate and improve quality. <a href="https://t.co/P0uyF8Wa6s">https://t.co/P0uyF8Wa6s</a></p>&mdash; James Wong (@jwazen1) <a href="https://twitter.com/jwazen1/status/1755220281910612270?ref_src=twsrc%5Etfw">February 7, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### It’s hard to design and build software.

FGX’s DNA is in solving a very specific subset of logistical problems. None of us are software developers or designers by trade and this definitely resulted in a less than optimal app, both from a visual and technical perspective. But we have one thing going for us that will make up for that in spades - we know what our customers want.

We’re not guessing which features will be useful, we’ve already resolved thousands of requests.  We “just” needed to choose the most important problems to solve and abstract them into common software patterns. In many ways, I can’t imagine designing the software prior to us having all this experience. If we did, we would probably have to go back and redesign entire tranches of how the application fundamentally worked sooner rather than later.

### For service-based businesses, software can’t replace expertise and attention.

If you provide a service behind software, like FGX (IT shipping), Boundless (a visa immigration service), and TurboTax (tax filing) does, no matter how great your software is, a critical amount of users will want expert “human” attention [1]. They know that software is a proxy for getting what they want and they’ll always feel worried that they aren’t getting serviced well. It’s an emotional human problem that’s difficult to address without another human.

It’s why Boundless highlights the step in their process where their attorneys [review your visa application](https://www.boundless.com/services/k-1-fiance-visa-boundless/). Even if their software could (and I bet it already does) review your visa application more thoroughly than a human, customers would feel a lot better thinking that a human was doing it.

TurboTax has pages entirely dedicated to their [expert help](https://turbotax.intuit.com/personal-taxes/online/live/how-it-works.htm) even though most users would probably be fine with just using the software. This also gives their standard service a stronger frame; "if they can do complicated tax returns, they can definitely handle mine."

For FGX, some of our long-time customers were worried about switching to a software interface because they were used to having a direct line to someone who could actually get something done. It’s why we made sure to assign dedicated experts to those accounts and future ones in the same profile.

---
[1] From a business perspective, as long as you can keep service quality high, this is good, because you can charge more. With AI’s progress, especially because its primary medium is natural language, I can see “expert customer service” becoming replaced with software; [Intercom is on the right track](https://www.intercom.com/believe).