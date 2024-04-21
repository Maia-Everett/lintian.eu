---
layout: post
title: "Introducing Central Archives Single Sign-On! (For Real)"
categories: [ Chaos Archives, Development, Final Fantasy XIV ]
excerpt_separator: <!--more-->
---

My [last post](/2024/04/01/chaos-archives-enterprise/) made on April 1, with "enterprisey" or just stupid fad (NFTs) features, was of course an April Fools joke.

What I didn't tell you was that one of these features, external app authorization, was in fact a real feature in development, and the screenshots were real, too. And now, I'm proud to annouce that Central Archives now provides an OAuth 2.0 authorization server and an identity provider for single sign-on!

What it means is that external websites and plugins can now provide a "Sign in with Central Archives" button that will act similarly to signing in with Google, Facebook, or Discord. You can even, if you choose to, share information about your verified Archives characters, so you won't have to verify them again.

For a demo, see [the demo client page](https://oauth-demo.centralarchives.org/).

<!--more-->

![Sign in with CA](/assets/screenshots/sign_in_with_ca.png)


## For Users

For most people, this feature will not be immediately obvious. The one thing you'll notice, however, is that the [Roleplay Profiles plugin](/projects/#roleplay-profiles) no longer asks for your password in-game. Instead, when you install the latest version of the plugin, you will be prompted to grant it access to your roleplay profiles in the browser.

![RPP consent page](https://docs.centralarchives.org/img/device-flow-consent.png)

This is a consent screen, with the likes of which you should be all too familiar now. A similar screen will be shown to you when you press "Sign in with Central Archives" on an external website or in another plugin.

This is important for security. An app that has your password can do absolutely anything that you yourself can do. It can delete or deface all your Archives pages, flood Discord with spam in event announcements, lock you out of your own account by changing your password, and so on. When answering users' support requests, I never ask for their passwords (and I don't know them, either), and neither should [Ackbar's Perfectly Safe Raid Feed](https://tvtropes.org/pmwiki/pmwiki.php/Script/ShadowjackWatchesSailorMoon) ever ask for your Archives password, either.


### Your Privacy is Paramount

When developing the Archives, it is of utmost importance to me that you remain in control of your data all the time. This is why, for example, the site doesn't use *any* kind of third-party cookies that could be potentially used to track you. A feature as powerful as allowing external apps access to a subset of Archives functionality (with your consent!) needs similarly powerful access control.

The Central Archives sidebar now has a "Manage app permissions" link. If you ever change your mind, you can revoke any app's access to any function you've previously allowed it to use.

![Manage App Permissions](/assets/screenshots/ca_manage_app_permissions.png)

Another feature of the Archives design is that nobody but you knows whether your characters belong to the same user account, unless you yourself explicitly opt in to listing specific characters in your public player profile. This continues into the single sign-on design. When external apps offer to sign you in with Central Archives, they have a choice between:

1. Signing you in with your *user account*, like they would with a Google or Discord account. In this case, the app won't be able to list your characters unless you allow it to.
2. Signing you in *as a character* or getting a list of characters you own. In this case, you control which of your characters the app is and isn't allowed to see, and it cannot link them to your Central Archives user account, either.

For example, I could offer my character Vielle Janlenoux to one website for sign-in, and Astree Givrevent to another, without them being able to learn that the two characters are registered on the same Archives account. And then a third website would be interested in linking its account to my Archives account, but wouldn't care about my characters at all.


## For Developers

In short: there's now a service to which you can offload character authentication and verification.

If you're writing a website, desktop app, or Dalamud plugin that you would like to integrate with Central Archives, I've written hopefully-extensive **[API documentation](https://docs.centralarchives.org/)**. If you've ever worked with OAuth 2.0, you should feel right at home, and if not, the documentation will guide you through everything. If you still have questions, feel free to contact me [on Discord](https://discord.com/users/229300241910857729) or [by email](mailto:vielle@centralarchives.org).

To register your apps for integration, all you need is a regular Archives account with a verified email and character. Then, you will see a "For Developers" section on Central Archives (but not Chaos or Crystal Archives):

![CA for Developers](/assets/screenshots/ca_for_developers.png)

Registering your app is pretty standard, as far as OAuth client configuration goes, and is [covered in the documentation](https://docs.centralarchives.org/oauth/registering-app/) as well.

![Register app](https://docs.centralarchives.org/img/register-app.png)

Your app can request access to the Identity API, which works with Central Archives as an identity provider, or the Roleplay API, which allows editing character roleplay profiles. Or both. And users who are only interested in Central Archives as an identity and character verification service won't need to engage with any roleplay features at all.

In the future, I'll write dedicated client libraries that will hopefully hide some of the complexity of OAuth and raw API calls from you as the developer.


## Smaller Things

This is the single biggest update to the system deployed all at once since the initial launch of Chaos Archives in December 2021. I've reviewed security and user experience across the board, fixed some bugs, moved away from some obsolete libraries and formats, and so on. Here are some things you will notice:

* The three websites --- Chaos Archives, Crystal Archives, and Central Archives --- now use more consistent designs between each other, and the colors have been slightly tweaked as well.

![Three Archives](/assets/screenshots/three_archives.jpg)

* Everything related to user accounts --- signing up, logging in, password reset --- has been consolidated under Central Archives. These three pages also now use a new "minimal UI" page design without sidebars and other clutter.
* The login page now links to the signup page.
* As some users with `@yahoo.com` email accounts have reported problems with delivery of verification emails, I've switched to a different, hopefully more reliable email provider.
* Security of the browser client has been tightened across the board. The HTML editor (TinyMCE) is now self-hosted instead of being loaded from an external website, all external and inline JavaScript is now blocked, and browser client code cannot communicate in background with any servers other than the Archives server itself.

And other small improvements and fixes I may be forgetting about.

With this major feature set landed, I'll probably take a break from Archives development for a short while, then focus on new roleplay features, such as content transfer between characters, character deletion, private events, maps, and possibly an event calendar plugin. Of course, I can offer no hard deadlines for any of these features, other than *when it's done™*.

Stay tuned for more announcements to come!


## Acknowledgements

The [inventor's paradox](https://en.wikipedia.org/wiki/Inventor%27s_paradox) is a funny thing. You may be solving a specific problem, and then it turns out that it would be more convenient to solve a more general problem of which this problem is a special case.

And this was what happened here.

<img src="/assets/screenshots/ca_identity_domino_meme.png" width="500" />

I'd like to thank [KazWolfe](https://github.com/KazWolfe) for designing the [XIVAuth](https://kazwolfe.notion.site/Documentation-128e77f0016c4901888ea1234678c37d) specification, which the Central Archives Identity API is heavily based on. Central Archives is not meant to make the XIVAuth project obsolete --- rather, it's a stopgap solution until XIVAuth is production-ready, after which the two services will integrate with each other. KazWolfe has also been indispensible in commenting on API design and implementation and security considerations.

I'd like to thank Azure Gem, notnite, Meoiswa, and wildwolf for giving feedback on the project and on API design.

Finally, even though he doesn't know this project even exists, I'd like to thank Aaron Parecki for writing a ton of guides and documentation on OAuth 2.0, most notably the book [OAuth 2.0 Simplified](https://www.oauth.com/), which I heavily recommend to anyone implementing an OAuth client or server.

And all of you --- a thousand users of Chaos and Crystal Archives, and more coming every day --- for helping make the FFXIV community such an active, vibrant, and welcoming place to be in!
