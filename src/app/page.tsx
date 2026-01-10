import { getPageContent } from '@/lib/api';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesList } from '@/components/FeaturesList';
import ReactMarkdown from 'react-markdown';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface PageData {
  title: string;
  seo_description?: string;
  hero_image: string;
  features?: Feature[];
  content: string;
}

export default function Home() {
  const pageData = getPageContent('home') as unknown as PageData | null;

  if (!pageData) {
    return <div>Page not found</div>;
  }

  const { title, seo_description, hero_image, features, content } = pageData;

  return (
    <div>
      <HeroSection
        title={title}
        subtitle={seo_description || ""}
        image={hero_image}
      />

      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="prose prose-lg prose-slate mx-auto">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>

      {features && <FeaturesList features={features} />}
    </div>
  );
}
