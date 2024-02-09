---
layout: post
title: "New Security Features on Chaos Archives"
categories: [ Chaos Archives, Development, Final Fantasy XIV ]
---

With the recent spree of Discord account theft by hackers, I implemented some security features I long planned to add to Chaos Archives. In light of this, I've renamed the "My Account" page to "Account and Security" to better indicate its function.


## Two-Factor Authentication

Most importantly of all, Chaos Archives now supports **two-factor authentication**. It uses exactly the same kind of six-digit one-time passwords that you're likely already using to log in to FFXIV itself, and if you aren't, I [recommend](https://www.square-enix-games.com/en_US/seaccount/otp) enabling them. 

<img src="/assets/screenshots/ca_2fa_setup.png" alt="CA 2FA setup" width="500" />

Once your authenticator app is registered, you will be shown a backup code. Save it somewhere. You can use it to log in **once** if you lose access to your authenticator app.

<img src="/assets/screenshots/ca_2fa_setup_finish.png" alt="CA 2FA setup finish" width="500" />


Once you have two-factor authentication set up, the next time you try to log in to Chaos Archives or [The Harborwatch](https://theharborwatch.org/), the login form will extend to let you input your one-time password.

<img src="/assets/screenshots/ca_extended_login.png" alt="CA extended login" width="500" />


## Log Out on Other Devices

It is now possible to log out on all other devices with a single button click. Note that this will log you out on *everything* that uses your Chaos Archives login credentials, including the Harborwatch and the Roleplay Profiles plugin.

<img src="/assets/screenshots/ca_logout_everywhere.png" alt="CA logout everywhere" width="500" />


## Logout Only on Inactivity

Finally, as a convenience feature, users will no longer be forcibly logged out every 30 days. As long as you visit the site at least once every 15 days, you will stay logged in indefinitely.

There are more features to come to Chaos Archives, not related to security, in the near future. Stay tuned!
