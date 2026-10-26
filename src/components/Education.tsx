import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  { qualification: "M.A.", institution: "RDVV University, Bhopal", year: "2023", result: "70%" },
  { qualification: "B.A.", institution: "RDVV University, Bhopal", year: "2020", result: "67%" },
  { qualification: "D.El.Ed.", institution: "Madhya Pradesh Board", year: "2019", result: "78%" },
  { qualification: "12th – Science (PCM)", institution: "Madhya Pradesh Board", year: "2017", result: "55%" },
  { qualification: "10th – General", institution: "Madhya Pradesh Board", year: "2015", result: "70%" },
];

const Education = () => (
  <section id="education" className="py-20 px-6">
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Education &amp;{" "}
          <span className="bg-text-gradient bg-clip-text text-transparent">
            Qualifications
          </span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Academic background and professional program knowledge
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {education.map((item) => (
          <Card
            key={`${item.qualification}-${item.year}`}
            className="p-6 bg-card-gradient border-border shadow-elegant"
          >
            <GraduationCap className="w-7 h-7 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">{item.qualification}</h3>
            <p className="text-muted-foreground">{item.institution}</p>
            <div className="flex justify-between mt-4 text-sm">
              <span className="text-muted-foreground">{item.year}</span>
              <span className="font-medium text-primary">{item.result}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
