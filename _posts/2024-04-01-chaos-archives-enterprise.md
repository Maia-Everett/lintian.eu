---
layout: post
title: "Introducing Chaos Archives Enterprise Cloud Pro!"
categories: [ Chaos Archives, Development, Final Fantasy XIV ]
excerpt_separator: <!--more-->
---

Hello everyone! As you all know, I'm constantly looking for ways to improve Chaos Archives in accordance with the best practices of modern website design and software industry. As the roleplay portal grows in popularity, so should its technologies mature.

I have done extensive research into the trends of contemporary websites and Internet platforms, and with them in mind, I'm happy to present the next iteration of Chaos Archives, named **Chaos Archives Enterprise Cloud Pro**.

![](/assets/screenshots/ca_enterprise/0.jpg?v=1)

<!--more-->

This is what users will now see when they open the main page of the redesigned Chaos Archives. As you can see, all visual clutter has been removed, and the new landing page presents all the information that a corporate executive with twenty seconds to evaluate each Enterprise Solution Provider needs to quickly judge prospective return on investment!

But this is just the beginning. Chaos Archives has been improved with enterprise-grade features not just for corporate executives, but for you too, fellow FFXIV roleplayers! Let me go through the new and exciting features.


## Cookie Consent

First of all, I'm proud to present Chaos Archives' brand new **cookie consent popup**. The lack of one has long prevented the Archives from being a truly enterprise-grade website. Since there were originally no cookies to consent to in the first place, I went through the industry-leading data tracking platforms and selected one hundred of them to install cookies in your browser. Coming soon is a consent customization dialog where you'll be able to meticulously deny Google, Facebook, Amazon, and other Trusted Partners the permission to install cookies, one by one.

Or better not. Think how much AI research will benefit from being trained on your Chaos Archives character profiles and stories. Next you know, the AI will be writing *your* characters for you, and you won't even need to lift a finger!

![](/assets/screenshots/ca_enterprise/1.jpg)


## AI Assistant

Speaking of AI, Chaos Archives now includes a brand new AI Assistant based on OpenAI's ChatGPT technology. I have tried to make the experience of interacting with your little AI friend as friendly, welcoming and unassuming as possible, and to ensure that you spend time on healthy bonding with "Gippy", as I like to call the Assistant, this feature cannot be disabled through the regular user interface.

Power users can opt out of this feature by sending an HTTP POST request to `https://chaosarchives.org/api/secret/optout` with the JSON payload `{ "urn:chaosarchives:feature.enterprise.ai.enable": false }`. Users who do not do that will be considered to have opted in into AI technology and consented to using their data in machine learning.

![](/assets/screenshots/ca_enterprise/2.jpg)


## Extended Personal Information

To comply with enterprise software certification requirements, Chaos Archives now includes an extended personal information form, as asking for your email and password alone does not suffice to establish your identity beyond all doubt.

Your Archives region (Europe, North America, Oceania or Japan) will now be determined based on the country specified at your registration. You will only be allowed to change that country (and therefore your region) after uploading scans of your national ID, birth certificate, and a utility bill with your street address.

![](/assets/screenshots/ca_enterprise/3.jpg)


## Third-Party App Authorization

Previously, the Roleplay Profiles plugin would ask for your Chaos Archives password to let you edit your character profiles in-game. This does not align with current industry standards for authorization. Now, all external apps will have to go through your browser to get permissions to your account, because research shows that users love being prompted with jargon-heavy consent screens.

![](/assets/screenshots/ca_enterprise/4.png)

Of course, an authorization screen simply isn't enterprise enough without occasionally showing cryptic error messages that leave you confused whom to even blame for it, and what you can do besides resignedly cursing.

![](/assets/screenshots/ca_enterprise/5.png)


## Paid Subscription Services

A truly successful website needs paid features, and Chaos Archives has felt incomplete without any. Now, the existing free functionality will be redesignated as the **Free Plan**, to be distinguished from the new **Membership Plan**. Chaos Archives users can designate their stories and roleplay-profiles as accessible to paid members only, and you can now set up a monthly subscription in your account settings.

Paid subscribers will also be able to edit the Archives wiki. Of course, you could always just ask to be granted that access for free, but there's no reason to interact with a human being when paying a monthly subscription is what MMO roleplay is really about!

![](/assets/screenshots/ca_enterprise/6.png)


## NFTs

No modern social platform is complete without NFTs. For just a small fee, you can upload a custom avatar and buy its hyperlink as an NFT, giving you a cool hexagonal avatar that makes you stand out from the plebs who probably don't even know the word "blockchain".

Unlike regular images, Chaos Archives NFTs will be prevented from being saved via right clicking through a browser extension that will be mandatory for all users.

![](/assets/screenshots/ca_enterprise/7.png)


## Newsletter Popups

As the last, but not least important industry standard practice, to make sure you will be up to date with all *other* projects that might even vaguely concern you, Chaos Archives will now display news and ask you to subscribe to newsletters when you least expect it.

![](/assets/screenshots/ca_enterprise/8.jpg)


## Performance

One complaint that Chaos Archives users have had is that link navigation is so fast that it feels like there's no communication with the server at all. Therefore, I have made sure to insert delays and loading screens, as well as pack React, Vue, Angular and Svelte together into the Archives' JavaScript code, so the users will be able to feel the power (and loading times) of all of the modern's world leading JavaScript frameworks at once, approximating the performance of typical present-day Rich Internet Applications.


## Conclusion

That's all for now. Later on, to properly qualify as an Enterprise Solution, I will be migrating Chaos Archives from a single virtual machine into an Enterprise Cloud ready Kubernetes environment making use of Amazon EC2, RDS, S3, R34, and SGML. This will no doubt cause my hosting expenses to skyrocket, but it's a small price to pay for knowing that my hobby project is now proudly hosted in The Cloud.

As always, I'm interested in your feedback!
