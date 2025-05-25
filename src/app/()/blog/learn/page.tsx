import { BlogLayout } from '../(components)/BlogLayout';
import { BlogSidebar } from '../(components)/BlogSidebar';
import { LearningContent } from '../(components)/LearningContent';

export default function AprendePage() {
  return (
    <BlogLayout>
      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <BlogSidebar activeSection="aprende" />
        </div>
        <div className="lg:col-span-3">
          <LearningContent />
        </div>
      </div>
    </BlogLayout>
  );
}
