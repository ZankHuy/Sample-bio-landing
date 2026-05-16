import BioBackground from "@/components/bio/BioBackground";
import BioCard from "@/components/bio/BioCard";
import { bioConfig } from "@/config/personal-info";

export default function BioPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <BioBackground config={bioConfig.background} />
      <BioCard
        name={bioConfig.name}
        title={bioConfig.title}
        avatar={bioConfig.avatar}
        links={bioConfig.links}
      />
    </main>
  );
}
