export const assessmentQuestions = [
  {
    id: 1,
    title: "FSSAI Registration / Licence",
    importance: "MANDATORY",
    question:
      "Do you have an appropriate and valid FSSAI Registration/Licence for your present food business?",
    guidance:
      "Consider whether your current FSSAI details reflect your actual business activity, premises and applicable activities.",
    answers: [
      { value: "yes", label: "YES" },
      { value: "partly", label: "PARTLY / NEEDS UPDATE" },
      { value: "no", label: "NO" },
      { value: "unsure", label: "NOT SURE" },
    ],
  },

  {
    id: 2,
    title: "Documented FSMS",
    importance: "MANDATORY WHERE APPLICABLE",
    question:
      "Do you have a documented Food Safety Management System (FSMS) appropriate to your food business?",
    guidance:
      "And is it actually implemented in your day-to-day operations?",
    answers: [
      { value: "yes", label: "YES — DOCUMENTED & IMPLEMENTED" },
      {
        value: "partly",
        label: "PARTLY — DOCUMENTS EXIST, IMPLEMENTATION IS INCOMPLETE",
      },
      { value: "no", label: "NO" },
      { value: "unsure", label: "NOT SURE" },
    ],
  },

  {
    id: 3,
    title: "Food Handler Hygiene",
    importance: "MANDATORY",
    question:
      "Do your food handlers follow proper personal hygiene and safe food-handling practices?",
    guidance:
      "This includes, where applicable: hand hygiene, suitable protective clothing, illness control/reporting, hygienic handling of food and prevention of contamination.",
    answers: [
      { value: "yes", label: "YES" },
      { value: "partly", label: "PARTLY" },
      { value: "no", label: "NO" },
      { value: "unsure", label: "NOT SURE" },
    ],
  },

  {
    id: 4,
    title: "Cleaning & Sanitation",
    importance: "MANDATORY",
    question:
      "Do you have a defined cleaning and sanitation system for your food premises, equipment and food-contact surfaces — and is it actually followed?",
    guidance:
      "Consider whether cleaning and sanitation procedures are defined, implemented and monitored.",
    answers: [
      { value: "yes", label: "YES — IMPLEMENTED" },
      { value: "partly", label: "PARTLY" },
      { value: "no", label: "NO" },
      { value: "unsure", label: "NOT SURE" },
    ],
  },

  {
    id: 5,
    title: "Raw Material & Food Input Control",
    importance: "IMPORTANT",
    question:
      "Do you have controls to ensure that the food ingredients and raw materials entering your business are safe and suitable for use?",
    guidance:
      "For example: approved/reliable suppliers, incoming checks, date/condition checks and appropriate records, where applicable.",
    answers: [
      { value: "yes", label: "YES" },
      { value: "partly", label: "PARTLY" },
      { value: "no", label: "NO" },
      { value: "unsure", label: "NOT SURE" },
    ],
  },

  {
    id: 6,
    title: "Storage & Temperature Control",
    importance: "IMPORTANT / WHERE APPLICABLE",
    question:
      "Are your food products stored under appropriate conditions, including temperature control where required?",
    guidance:
      "For example: refrigerated food, frozen food, temperature-sensitive food, dry storage and hot holding, where applicable.",
    answers: [
      { value: "yes", label: "YES" },
      { value: "partly", label: "PARTLY" },
      { value: "no", label: "NO" },
      { value: "unsure", label: "NOT SURE" },
      { value: "na", label: "NOT APPLICABLE" },
    ],
  },

  {
    id: 7,
    title: "Contamination & Cross-Contamination",
    importance: "IMPORTANT",
    question:
      "Do your food-handling practices prevent contamination and cross-contamination?",
    guidance:
      "Consider raw vs. cooked food, equipment and utensils, food handlers, storage and handling, and allergens where applicable.",
    answers: [
      { value: "yes", label: "YES" },
      { value: "partly", label: "PARTLY" },
      { value: "no", label: "NO" },
      { value: "unsure", label: "NOT SURE" },
    ],
  },

  {
    id: 8,
    title: "Pest Control & Waste",
    importance: "MANDATORY / IMPORTANT",
    question:
      "Do you have effective pest-control and waste-management arrangements for your food premises?",
    guidance:
      "And where records are applicable, are they maintained?",
    answers: [
      { value: "yes", label: "YES" },
      { value: "partly", label: "PARTLY" },
      { value: "no", label: "NO" },
      { value: "unsure", label: "NOT SURE" },
    ],
  },

  {
    id: 9,
    title: "Food Safety Training",
    importance: "IMPORTANT",
    question:
      "Are your food handlers appropriately trained in food safety and hygiene, with evidence/records maintained where applicable?",
    guidance:
      "Consider whether appropriate training has been completed and supporting evidence or records are maintained where applicable.",
    answers: [
      { value: "yes", label: "YES" },
      { value: "partly", label: "PARTLY" },
      { value: "no", label: "NO" },
      { value: "unsure", label: "NOT SURE" },
    ],
  },

  {
    id: 10,
    title: "Monitoring & Records",
    importance: "MANDATORY / IMPORTANT",
    question:
      "Do you maintain appropriate food-safety records to demonstrate that your controls are being followed and monitored?",
    guidance:
      "Examples may include cleaning records, temperature records, pest-control records, training records, receiving/storage records and corrective-action records.",
    answers: [
      { value: "yes", label: "YES" },
      { value: "partly", label: "PARTLY" },
      { value: "no", label: "NO" },
      { value: "unsure", label: "NOT SURE" },
    ],
  },
]

export const tobaccoQuestion = {
  id: "tobacco",
  title: "Special Regulatory Flag — Tobacco",
  importance: "SPECIAL FLAG",
  question:
    "Do you sell tobacco or tobacco-related products from the same premises where food is prepared, handled or sold?",
  guidance:
    "For example: cigarettes, beedi or tobacco-containing products.",
  answers: [
    { value: "yes", label: "YES" },
    { value: "no", label: "NO" },
    { value: "unsure", label: "NOT SURE" },
  ],
}