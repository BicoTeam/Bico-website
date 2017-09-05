---
layout: page
title: FAQ
permalink: /faq/
---
<div class="faq__content">
  {% for category in site.translations[site.lang].faq.categories %}
  <div class="faq__category">
    <h2>{{ category.name }}</h2>
    {% for item in category.questions %}
    <div class="faq__qa">
      <p class="faq__q">{{ item.question }}</p>
      <p class="faq__a">{{ item.answer }}</p>
    </div>
    {% endfor %}
  </div>
  {% endfor %}
</div>
