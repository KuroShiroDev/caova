import { BlogLayout } from '../(components)/BlogLayout';
import { BlogSidebar } from '../(components)/BlogSidebar';
import { FAQContent } from '../(components)/FAQContent';

export default function FAQsPage() {
  return (
    <BlogLayout>
      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <BlogSidebar activeSection="faqs" />
        </div>
        <div className="lg:col-span-3">
          <FAQContent />
        </div>
      </div>
    </BlogLayout>
  );
}
