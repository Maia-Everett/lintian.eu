---
layout: post
title: "Introducing Central Archives: Cross-Region Character Profiles and Single Sign-On"
categories: [ Chaos Archives, Development, Final Fantasy XIV ]
---

With the recent launch of [Crystal Archives](https://lintian.eu/2024/02/13/crystal-archives/), FFXIV roleplayers in the North America region can enjoy the same roleplay features as European roleplayers could via Chaos Archives. Both websites use the same user accounts, and it's possible to register characters from both regions on the same account and switch between them.

However, you still had to log in separately on both websites, and it was still not possible to register characters in the Oceania and Japan regions. This ends now!

Today I launched **[Central Archives](https://centralarchives.org/)**, a cross-region, centralized website for account management and character profiles. It lacks the community features of the other two websites, so it doesn't show Free Companies, venues, or image galleries.[^disabled] However, it allows claiming characters from *all* regions: Europe, North America, Oceania, and Japan.

And that's not all.


## For Existing Users: Single Sign-On

If you're using Chaos Archives or Crystal Archives, nothing changes for you. You can continue using them as before. However, existing Chaos Archives accounts and existing Crystal Archives accounts are now both known as **Central Archives accounts**, and you will now use Central Archives to log in. It's now your [single sign-on](https://en.wikipedia.org/wiki/Single_sign-on) provider --- think Google or Facebook accounts, but for the Archives ecosystem.

I'm sure that with both CA and CA users using CA to log in, there will be minimal confusion!

![Central Archives SSO](/assets/screenshots/centralarchives_login.jpg)

When you click the login button on Chaos or Crystal Archives, you will be redirected to Central Archives to log in. Simply input your old credentials (sadly, for the first time after this change, you'll have to input them manually if you use a password manager). You will then be redirected back to the exact page you came from, which is a small improvement I made as part of the single sign-on rework.

By the way, the Chaos Archives companion newspaper [The Harborwatch](https://theharborwatch.org/) has also been switched to the new login system and no longer has its own login form. I'll get back to writing for it one of these decades, I promise!


## For Existing Users: Account Management

The "Account and Security" page has been moved and now redirects to Central Archives as well. If you previously had two-factor authentication enabled, you can continue using your existing authenticator as before.

![Central Archives account management](/assets/screenshots/centralarchives_account_management.jpg)


## For Everyone: All the World's a Stage

The main page of Central Archives has an overview of all your characters across all regions. You can still access characters from Europe and North America via Chaos and Crystal Archives, as before. Now you can **also claim characters in Oceania and Japan**, which is only possible via Central Archives.

![Central Archives character list](/assets/screenshots/centralarchives_characters.jpg)

As of the writing of this post, the RPP plugin already supports all regions, but I haven't yet updated its text to reflect this.


## And More to Come...

This is only the beginning. Eventually I'll turn Central Archives into a full-fledged [identity provider](https://en.wikipedia.org/wiki/Identity_provider), like Google or Facebook. In practical terms, this means that developers of third-party websites and apps will be able to add a "Sign in with Central Archives" button and see, *with your consent*, which characters you have claimed, eliminating the need for them to add their own support for claiming characters via Lodestone.

Stay tuned!


[^disabled]: There's nothing stopping me from enabling these features cross-region, but I'd like to maintain a sense of community for both EU and NA.
