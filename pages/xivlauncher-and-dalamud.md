---
layout: page
title: XIVLauncher and Dalamud
description: A description of XIVLauncher, fan-made FFXIV launcher, and Dalamud, its in-game plugin system
permalink: /bits/xivlauncher-and-dalamud/
---

[XIVLauncher](https://goatcorp.github.io/) is a very nice alternate Windows launcher for Final Fantasy XIV. It completely replaces the clunky and buggy official launcher, and is actively developed and tested. There is also a native Linux version called [XIVLauncher Core](https://github.com/goatcorp/XIVLauncher.Core), which takes over installation hassle and Wine management for you and lets you just focus on launching the game.

![XIVLauncher](/assets/screenshots/xivlauncher.png)

However, the biggest advantage of XIVLauncher is its in-game plugin system, Dalamud. It comes with a ton of plugins that offer quality of life updates, with automated in-game installation and updates. Some [examples](https://goatcorp.github.io/DalamudPlugins/plugins.html) include improved chat, sound and visual notifications, in-game databases, customizing the soundtrack, extra map markers, and more.

Dalamud plugins fill a somewhat analogous role to WoW addons for FFXIV, with the caveat that they are a third-party service not supported by the game developers.

I myself have written two Dalamud plugins for roleplayers: [RPP (Roleplay Profiles) and Snooper](/projects/).

-------

**Disclaimer:** XIVLauncher and Dalamud are third-party software, which technically goes against the FFXIV terms of service. However, the *official* Dalamud plugin repository is carefully curated and forbids plugins that automate gameplay. For more details, see [the XIVLauncher and Dalamud FAQ](https://goatcorp.github.io/faq/xl_troubleshooting#q-are-xivlauncher-dalamud-and-dalamud-plugins-safe-to-use).

Also, keep in mind that while WoW plugins are <abbr title="A sandbox is a security mechanism that runs untrusted code with lower permissions than the rest of the system. For example, website JavaScript code running in web browsers has no access to the file system of the host computer.">sandboxed</abbr>, Dalamud plugins are not. A Dalamud plugin can run *arbitrary code* from inside the FFXIV game process, including wiping your disk drive, collecting your data and uploading it to a third-party server, mining cryptocurrency, and so on. Dalamud developers review all plugins in the official repository, but for third-party ones you're on your own. I am not responsible for any harm inflicted.

