# Design System & Aesthetic Specification — DopaMint Renaissance Edition 🎨

## Core Visual Direction
Inspired by the **Shopify Editions "The Renaissance Edition"** flagship design:
- **Canvas Base:** Soft warm parchment & natural editorial cream (`#EBEAE5`, `#E6E5DF`, `#F4F3EE`).
- **Sidebar:** Persistent fixed left chapter rail with Roman numerals (`I` to `XII`), active scrollspy dot, and brand mark.
- **Typography:**
  - **Serif Accents & Headings:** `Playfair Display`, `Cormorant Garamond`, `Fraunces` (High-editorial Italian/French renaissance serif with italic ligatures).
  - **Modern Grotesk Headings:** `Cabinet Grotesk`, `Plus Jakarta Sans` for bold chapter portal titles (`Agents`, `Trust`, `Voice`, `Onchain`).
  - **Clean Microcopy:** `Plus Jakarta Sans` & `Inter Variable` for readable 2-column and 3-column feature tables.
  - **Technical Code:** `JetBrains Mono` for cryptographic receipts, hashes, and policy JSON.
- **Color Palette:**
  - Parchment Light: `#EBEAE5`
  - Parchment Deep: `#E2E1DA`
  - Charcoal Primary: `#141820`
  - Slate Muted: `#525866`
  - Imperial Violet / Purple Accent: `#7C3AED` / `#9333EA`
  - Emerald Verified: `#059669` / `#10B981`
  - Terracotta Warm: `#C2410C`

---

## Layout Components
1. **`ChapterSidebar`:** Left rail fixed (w-48) displaying edition title, 12 numbered chapters with Roman numerals, active indicator dot, and legal footer.
2. **`RenaissanceNavbar`:** Glassmorphic top navigation with edition badge, edition switcher, search modal trigger, and primary action pill.
3. **`ChapterPortal`:** Fullscreen/large-format visual break cards with classical renaissance artwork, bold display category name, and subtle particle/grain animation.
4. **`PromptPill`:** Frosted glass input pill floating on top of painterly backdrops with send arrow `↑` and simulated agent responses.
5. **`EditorialGrid`:** 2-column and 3-column clean feature blocks with bold title, concise description, and `Read help doc ↗` style links.
