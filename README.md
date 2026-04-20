# browser-programming

# Lecture 02 – Semantic HTML & Structure

## 1. What I Implemented in This Lecture

### Semantic Header
I created a well-structured header section using `<h1>` for my name and included a detailed personal introduction presenting myself as an IT Network Engineer.

### Portfolio Section
I added a separate portfolio area by using `<section>`, `<figure>`, and `<figcaption>` so that project content and descriptions are connected in a proper semantic way.

### Accessibility Navigation
I placed a **"Skip to content"** link at the beginning of the page to make keyboard navigation easier and improve accessibility.

## 2. Semantic Decisions I Made (REQUIRED)

### Decision 1
**Element(s) used:** `<header>` and `<footer>`  
**Where in the page:** At the top and bottom parts of the page.  
**Why this element is semantically correct:** These elements clearly mark the introduction part of the page and the ending section with common site information. They are more meaningful than using general `<div>` elements because screen readers and search engines can understand their purpose more easily.

### Decision 2
**Element(s) used:** `<main>` with `id="main"`  
**Where in the page:** Around the main portfolio content.  
**Why this element is semantically correct:** This tells the browser where the main unique content of the page starts. It also allows the **"Skip to content"** link to work properly for accessibility purposes.

## 3. Accessibility Considerations

### Skip Link
I included a link that stays hidden by default and allows keyboard users or screen reader users to skip the top section and move directly to the main portfolio content.

### Link Clarity
I used meaningful link text such as **"GitHub Profile"** instead of unclear text like **"Click Here."**

## 4. What I Learned

I learned how to organize media and captions correctly by using semantic elements like `<figure>` instead of only using nested `<div>` tags. This gives the code better meaning, especially for browsers and tools that do not rely on visual layout.

## 5. What I Still Need to Improve

I still need more practice with advanced table structures, especially for showing network configurations. I also need to improve my understanding of form accessibility, including labels, fieldsets, and ARIA roles.

## 6. Notes about AI Usage

**Tool used:** Gemini  
**What I accepted as-is:** The basic HTML5 boilerplate structure and the first markdown layout.  
**What I modified manually:** I changed the personal bio information, added my own degree details from Savonia UAS, and fixed the social media links so they match my real accounts.

Week 1 GitHub Pages assignment.

Live page:
https://mollah3030.github.io/browser-programming/week-1/
