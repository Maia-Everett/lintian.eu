---
layout: page
title: RP Projects
description: Vielle (Linneris)'s RP software projects
permalink: /projects/
---

Since discovering Final Fantasy XIV and its RP scene in 2021, I've written some software for the needs of roleplayers.

All my projects are open source, licensed under [GPLv3](https://en.wikipedia.org/wiki/GNU_General_Public_License) (for Dalamud plugins) and [AGPLv3](https://en.wikipedia.org/wiki/GNU_Affero_General_Public_License) (for Chaos Archives). In plain English, this means that you can freely copy, modify, and deploy your own copies of the software, as long as you release your modifications to the source code under the same license.

## Chaos Archives

![Screenshot of Chaos Archives](/assets/projects/chaos_archives.jpg)

**[Chaos Archives](https://chaosarchives.org)** is a roleplay portal for the Chaos (EU) roleplaying community in Final Fantasy XIV, heavily inspired by [Argent Archives](https://argentarchives.org) for WoW's Argent Dawn RP server, but built from scratch to cater to the needs of FFXIV roleplayers.

It was made for the [Chaos EU roleplaying community](https://discord.gg/rCHdUdSVsr) and has since expanded to both the Chaos and Light datacenters when cross-datacenter travel arrived in FFXIV. I have plans to expand the Chaos Archives platform to other regions as well, launching a cross-region RP profiles website.

The open source Chaos Archives codebase can be used for running other similar websites. [Elpisgarten](https://elpisgarten.de/) is one such website, using a heavily modified fork for the German RP community on the Light datacenter.


## Roleplay Profiles

![Screenshot of Roleplay Profiles](/assets/projects/rpp.jpg)

**Roleplay Profiles (RPP)** is a [Dalamud](/bits/xivlauncher-and-dalamud/) plugin replicating some functionality of the [Total RP (TRP)](https://wago.io/totalrp) addon for WoW. It shows character profiles from Chaos Archives in-game and allows you to edit yours if you have the character registered on Chaos Archives.

A nice feature of RPP is that it shows character profiles even if the player isn't using the plugin. Like TRP, it shows updates to other players' profiles instantly.

Currently it's limited to the Europe region, because so is Chaos Archives (artificially). When I launch Chaos Archives counterparts for other regions, I'll make the plugin available there as well.


## Snooper

![Screenshot of Snooper](/assets/projects/snooper.jpg)

**Snooper** is a [Dalamud](/bits/xivlauncher-and-dalamud/) plugin replicating the functionality of the [Listener](https://addons.wago.io/addons/listener) WoW addon. (Seeing a pattern here?)

It opens separate windows that show only the chat log from the player you're targeting or moving your mouse over. It also:

* allows opening additional chat windows to track specific players or groups of players;
* allows copying conversation history to the clipboard;
* plays a sound effect when your target writes a chat message;
* saves chat logs to the disk;
* loads chat logs from the disk for Snooper windows when you relog, allowing you to see conversations as they were before you logged out.
