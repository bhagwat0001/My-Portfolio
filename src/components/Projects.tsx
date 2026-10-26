import { Card } from "@/components/ui/card";
import { BriefcaseBusiness, MapPin } from "lucide-react";

const experience = [
  {
    role: "Placement Manager",
    organization: "Sarthak Educational Trust",
    location: "Ahmedabad, Gujarat",
    period: "August 10, 2026 – Present",
    highlights: [
      "Manage end-to-end placement activities and build employer relationships to generate suitable opportunities for candidates.",
      "Coordinate recruitment drives, interviews, candidate shortlisting, selection, and joining.",
      "Guide candidates on job opportunities, interview preparation, and employment requirements.",
      "Maintain placement records, candidate and employer databases, and placement reports.",
      "Work with training teams and follow up with candidates and employers to track outcomes and support placement targets.",
    ],
  },
  {
    role: "Quality Head",
    organization: "Avaan Intellect Pvt. Ltd. (formerly Gati Academy)",
    location: "DDU-GKY Training Center, Surat",
    period: "April 1, 2024 – July 31, 2026",
    highlights: [
      "Monitored training quality, trainee attendance, batch documentation, and placement support.",
      "Maintained monthly placement-retention data and organized placement records.",
      "Supported candidates throughout training and placement, including identifying suitable job opportunities.",
      "Participated in internal and external audits and maintained compliance with program standards.",
    ],
  },
  {
    role: "Placement Coordinator",
    organization: "SAM Skills Development & IT Solution Pvt. Ltd.",
    location: "DDU-GKY Centre, Bhopal",
    period: "May 1, 2023 – March 30, 2024",
    highlights: [
      "Mobilized and counseled rural youth about job roles, training outcomes, and career opportunities under DDU-GKY.",
      "Organized job drives, employer meetings, campus interviews, and pre-placement sessions.",
      "Built employer relationships in logistics, retail, and other sectors and coordinated the transition from training to placement.",
      "Achieved a 30% increase in placements through stronger employer tie-ups and candidate support.",
      "Tracked candidate retention for three months after placement and coordinated travel, accommodation, and onboarding for out-of-station roles.",
    ],
  },
  {
    role: "Logistics Trainer → Quality Head",
    organization: "ICA Edu Skills Pvt. Ltd.",
    location: "DDU-GKY Centre, Bhopal",
    period: "December 1, 2021 – April 30, 2023",
    highlights: [
      "Delivered training in logistics operations, warehouse management, supply-chain fundamentals, and employability skills.",
      "Promoted to Quality Head within six months in recognition of performance and training results.",
      "Monitored training quality, documentation, SOP compliance, and DDU-GKY standards; supported audits and accurate records.",
      "Coordinated with trainers, placement teams, and management to keep batches training-, audit-, and placement-ready.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A career spanning placement coordination, training delivery, and
            program quality
          </p>
        </div>

        <div className="space-y-6">
          {experience.map((job) => (
            <Card
              key={`${job.organization}-${job.role}`}
              className="p-6 md:p-8 bg-card-gradient border-border shadow-elegant"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <BriefcaseBusiness className="w-5 h-5 text-primary" />
                    <h3 className="text-xl md:text-2xl font-semibold text-primary">
                      {job.role}
                    </h3>
                  </div>
                  <p className="font-medium">{job.organization}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </p>
                </div>
                <span className="text-sm font-medium text-muted-foreground md:text-right">
                  {job.period}
                </span>
              </div>
              <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                {job.highlights.map((highlight) => (
                  <li key={highlight} className="leading-relaxed">
                    {highlight}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <Card className="mt-8 p-6 bg-hero-gradient shadow-glow border border-primary/20">
          <h3 className="text-xl font-semibold text-primary-foreground mb-2">
            Recognition
          </h3>
          <p className="text-primary-foreground/85">
            Received awards twice for performance in attendance, placement,
            mobilization, and enrollment.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
