Below is the **professional, industry-standard atomic design atom list** used in design systems like Radix, Chakra, Material, Shopify Polaris, etc.

We will keep the atoms:

* **Generic** (usable across all your clients)
* **Themeable** (easy to brand for each client)
* **Accessible** (build once, use everywhere)
* **Small + composable** (molecules/organisms combine these atoms, not vice versa)

---

# ✅ **Full Professional Atom List**

## 🎨 1. **Foundational Atoms (Utility Components)**

These are low-level but extremely powerful building blocks.

### **Layout / Primitive atoms**

* **Box** — generic `div` wrapper with polymorphic `as` support (later)
* **Flex** — preset Flexbox wrapper
* **Stack** — vertical spacing helper
* **HStack / VStack** — horizontal & vertical layout primitives
* **Container** — max-width content wrapper
* **Grid** — semantic grid wrapper
* **Spacer** — auto expand push element

*(We can start with Box + Stack and add more later.)*

### **Typography atoms**

* **Text** — inline/paragraph text
* **Heading** — H1–H6 with variants
* **Link** — branded link element with states
* **Label** — for forms

---

## 🧩 2. **Form Atoms**

You already created `Input` — good!

### **Core Form Atoms**

* **Input** (done)
* **Textarea**
* **Select (native)** — HTML `<select>`
* **Checkbox**
* **Radio**
* **Switch / Toggle**
* **Slider**
* **Range Slider**
* **FileInput / Upload zone**

### **Form Helpers (still atoms)**

* **HelperText** — small line below inputs
* **ErrorText** — red version of helper text

*(These remain atoms; they get composed inside the `TextField` molecule.)*

---

## 🧱 3. **Interactive Control Atoms**

* **Button** (done)
* **IconButton** (or just use `Button size="icon"`)
* **Badge**
* **Tag / Pill**
* **Chip**
* **Avatar**

---

## 🪟 4. **Feedback/Status Atoms**

* **Spinner / Loader** (you already built a simple internal one inside Button, but eventually we’ll extract a `Loader` atom)
* **Progress Bar**
* **Skeleton**
* **Alert (base atom)** — just visual styles (full component becomes a molecule)

---

## 🗂 5. **Surface Atoms**

These are UI surfaces you build bigger components on top of.

* **Card** — base container
* **Divider / Separator** — thin line for grouping
* **PopoverSurface** (optional as atom, but often used with molecules)

---

# 🌟 Summary of All Atoms

### **Foundations**

* Box
* Flex
* Stack
* Container
* Grid
* Spacer
* Text
* Heading
* Label
* Link

### **Forms**

* Input (done)
* Textarea
* Select
* Checkbox
* Radio
* Switch
* Slider
* FileInput
* HelperText
* ErrorText

### **Controls**

* Button (done)
* IconButton (optional)
* Badge
* Tag/Pill
* Chip
* Avatar

### **Feedback**

* Spinner
* ProgressBar
* Skeleton
* AlertBase

### **Surfaces**

* Card
* Divider

---
