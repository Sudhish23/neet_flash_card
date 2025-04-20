import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const flashcards = [
  { question: "What is the carbylamine test used for?", answer: "Detection of primary amines. Positive test gives foul-smelling isocyanide." },
  { question: "Which amines react with HNO2 to form stable diazonium salts?", answer: "Primary aromatic amines. Aliphatic ones give unstable diazonium salts." },
  { question: "Which type of reaction is typical in amines: nucleophilic or electrophilic?", answer: "Nucleophilic substitution is more common due to lone pair on nitrogen." },
  { question: "Where is ATP consumed in glycolysis?", answer: "1st step: Glucose to G6P; 3rd step: F6P to F1,6BP." },
  { question: "What is the role of NAD+ in cellular respiration?", answer: "It acts as an electron carrier, accepting electrons during glycolysis and TCA cycle." },
  { question: "Which step of TCA does not involve oxidation?", answer: "Succinyl-CoA to succinate — substrate level phosphorylation." },
  { question: "In which phase does centriole duplication occur?", answer: "G2 phase of cell cycle." },
  { question: "How much DNA is in a somatic cell after S-phase compared to a gamete?", answer: "Four times the DNA content." },
  { question: "What epithelium lines the PCT in nephron?", answer: "Brush border cuboidal epithelium." },
  { question: "Why do skeletal muscles appear striated?", answer: "Due to alternating pattern of actin and myosin filaments." },
  { question: "What is stored in the sarcoplasmic reticulum?", answer: "Calcium ions for muscle contraction." },
  { question: "What is a fascicle?", answer: "A bundle of muscle fibers wrapped in connective tissue." },
  { question: "Which enzyme breaks peptide bonds?", answer: "Protease." },
  { question: "Which bond does amylase act on?", answer: "Glycosidic bonds in starch." },
  { question: "Which amino acid is non-essential?", answer: "Alanine." },
  { question: "Which is a unicellular alga: Chlorella or Laminaria?", answer: "Chlorella." },
  { question: "Which plant group does Psilotum belong to?", answer: "Psilopsida (Pteridophyte)." },
  { question: "What is imbricate aestivation?", answer: "Overlapping sepals/petals without regular pattern." },
  { question: "What does Lucas test differentiate?", answer: "Primary, secondary, and tertiary alcohols by turbidity speed." },
  { question: "What is metamerism?", answer: "Isomerism due to different alkyl groups on either side of a functional group." },
  { question: "Which reactions show electrophilic substitution?", answer: "Typically aromatic compounds like benzene." }
];

export default function Home() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">NEET Flashcards: Weak Subtopics</h1>
      <Accordion type="single" collapsible className="space-y-4">
        {flashcards.map((card, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger className="text-lg font-semibold">{card.question}</AccordionTrigger>
            <AccordionContent>
              <Card className="bg-white p-4 border rounded-xl shadow-md">
                <CardContent><p>{card.answer}</p></CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}