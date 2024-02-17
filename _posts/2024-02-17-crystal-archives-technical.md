---
layout: post
title: "Chaos and Crystal Archives: Frigging Regions, How Do They Work?"
categories: [ Chaos Archives, Development, Final Fantasy XIV ]
---

This is a more technical post for people who are interested in the inner workings of systems they use. For the kind of people who, upon buying a laser printer, go to Wikipedia for a popular explanation of [how it actually works](https://en.wikipedia.org/wiki/Laser_printing#Printing_process). (Spoiler: similar to a photocopier, which is why the two are often combined into [one device](https://en.wikipedia.org/wiki/Multi-function_printer).)

As I said [before](/2024/02/13/crystal-archives/), Chaos Archives and Crystal Archives share the same database. Indeed, if you visit the [My Content](https://chaosarchives.org/my-content) page on either site, you will see all your content across both regions, and can edit it from either site. The perceived separation is essentially accomplished with a parlor trick: the client and the server cooperate to create an illusion of two platforms where there is actually only one.


## The Server

If you do a [DNS](https://en.wikipedia.org/wiki/Domain_Name_System) lookup for both domains, you'll find that they actually point to the same IP address. As far as Internet protocols are concerned, both domains are different names for the same host.

```
$ dig chaosarchives.org

<...>
;; ANSWER SECTION:
chaosarchives.org.      900     IN      A       139.162.142.220
```

```
$ dig crystalarchives.org

<...>
;; ANSWER SECTION:
crystalarchives.org.    900     IN      A       139.162.142.220
```

When the Archives server receives a request for data that should be filtered by region, such as main page content or the event calendar, it looks at the domain name used for the request, and determines which region it corresponds to. (Technically, it looks at the [HTTP Host header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host)).

```ts
export function getRegionByHostname(hostname: string): SiteRegion {
  for (const region of Object.values(SiteRegion)) {
    const regionConfig = SharedConstants.regions[region];

    if (regionConfig && hostname.endsWith(regionConfig.domain)) {
      return region;
    }
  }

  return SiteRegion.GLOBAL;
}
```

The database has an auto-updated list of all FFXIV world servers in a single table. From there, it's a simple matter of adding a region restriction on query results for all public lists and search-style queries.

```
SELECT name, datacenter, region FROM server ORDER BY name ASC LIMIT 10;

+---------------+------------+--------+
| name          | datacenter | region |
+---------------+------------+--------+
| Adamantoise   | Aether     | na     |
| Aegis         | Elemental  | jp     |
| Alexander     | Gaia       | jp     |
| Alpha         | Light      | eu     |
| Anima         | Mana       | jp     |
| Asura         | Mana       | jp     |
| Atomos        | Elemental  | jp     |
| Bahamut       | Gaia       | jp     |
| Balmung       | Crystal    | na     |
| Behemoth      | Primal     | na     |
+---------------+------------+--------+
```

This is in fact all the region separation is: a search filter. For any piece of content you know the name for, the server is perfectly happy to let you view and edit it regardless of the domain name. You can, for example, view the character profile of [my RP main](/vielle/), who resides on the Omega (EU) server, via either [Chaos Archives](https://chaosarchives.org/Omega/Vielle_Janlenoux) or [Crystal Archives](https://crystalarchives.org/Omega/Vielle_Janlenoux), though you can only do the latter by manually editing the URL address, not by link navigation.

In fact, the server lets you change the region of your content on the fly where it makes sense. For example, if you create an event on Crystal Archives located on an NA server, then edit it on Chaos Archives and select an EU server, the event will immediately disappear on Crystal Archives and appear on Chaos Archives.

Incidentally, this is also how the associated game plugin [Roleplay Profiles](/projects/#roleplay-profiles) now works with both EU and NA characters without any special coding on my part.


## The Client

The client code is a single set of files located in a single directory. Therefore, a single deploy command updates the code of both sites. If you look at the HTML, CSS and JavaScript returned to your browser, you will see that it's identical for both sites. Region is instead determined on the client side.

When the page loads, a small bit of JavaScript code determines the region, selects the site name accordingly so it can be used in user interface text, and sets a CSS class so the page's stylesheets can select the appropriate branding.

```ts
export default boot(({ app }) => {
  region = determineRegion();
  regionConfig = SharedConstants.regions[region];
  app.config.globalProperties.$region = region;
  app.config.globalProperties.$regionConfig = regionConfig;
  app.config.globalProperties.$siteName = regionConfig.name;
  document.title = regionConfig.name;
  document.body.classList.add(`region-${region}`);
});
```

And finally, based on that class, a few CSS rules override the color scheme and the logo.

```css
.q-header .q-toolbar {
  background: #10579e;
}

.region-na .q-header .q-toolbar {
  background: #106777;
}
```

This is why you see Chaos Archives in blue with one logo, and Crystal Archives in teal with another logo.

![Two Archives](/assets/screenshots/two-archives.jpg)


## So Why Two Websites?

The reason is practical. FFXIV doesn't currently allow character travel between regions, so all characters are region-bound; it's a limitation of the game itself. Therefore, NA and EU roleplaying communities are largely separate, and each website filters out content that is only relevant to the other region. With the community's feedback, I might revisit the decision in the future, as the architecture would allow the two sites to be very easily merged.
