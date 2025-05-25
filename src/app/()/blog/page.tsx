import { BlogCategories } from './(components)/BlogCategories';
import { BlogHero } from './(components)/BlogHero';
import { BlogLayout } from './(components)/BlogLayout';

export default function BlogPage() {
  return (
    <BlogLayout>
      <div className="space-y-12">
        <BlogHero />
        <BlogCategories />
      </div>
    </BlogLayout>
  );
}
