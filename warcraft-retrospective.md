---
layout: page
title: Warcraft Retrospective
permalink: /warcraft-retrospective/
---

In the Warcraft Retrospective series, I will be examining all Warcraft games in order, especially focusing on storytelling from a roleplayer's perspective.

<ul>
  {% for post in site.categories["Warcraft Retrospective"] %}
    {% if post.url %}
        <li><a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date: "%Y-%m-%d" }})</li>
    {% endif %}
  {% endfor %}
</ul>
