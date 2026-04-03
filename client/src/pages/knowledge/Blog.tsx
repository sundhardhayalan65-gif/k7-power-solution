import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import MobileCTA from "@/components/MobileCTA";
import SEO from "@/components/SEO";

const posts = [
  { title: "How to Choose the Right Inverter for Your Home", date: "March 20, 2026", excerpt: "A simple guide to calculating your power load and picking the right VA rating for your household needs." },
  { title: "Tubular vs Flat Plate Battery — Which is Better?", date: "March 5, 2026", excerpt: "We compare the two most popular battery types to help you decide which one suits your usage and budget." },
  { title: "Top Signs Your Inverter Battery Needs Replacement", date: "February 18, 2026", excerpt: "Frequent low backup, overheating, or unusual smell — here's how to know when it's time for a new battery." },
  { title: "How to Extend the Life of Your Inverter Battery", date: "February 3, 2026", excerpt: "Simple maintenance habits that can double the lifespan of your inverter battery and save you money." },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SEO
        title="Inverter & Battery Blog | Tips & Guides | K7 Power Solution Puducherry"
        description="Read K7 Power Solution's blog for inverter buying guides, battery maintenance tips, and power backup advice for Puducherry homes and businesses."
        keywords="inverter tips Puducherry, battery maintenance guide, inverter buying guide India, power backup tips"
        canonical="https://k7powersolution.in/knowledge/blog"
        breadcrumbs={[
          { name: "Home", url: "https://k7powersolution.in/" },
          { name: "Knowledge", url: "https://k7powersolution.in/knowledge/blog" },
          { name: "Blog", url: "https://k7powersolution.in/knowledge/blog" },
        ]}
      />
      <Navbar isScrolled={true} />
      <div className="pt-28 pb-20 container max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-gray-600 mb-10">Tips, guides, and updates from the K7 Power Solution team.</p>
        <div className="space-y-6">
          {posts.map((post, i) => (
            <Card key={i} className="p-6 hover:shadow-md transition-shadow border border-gray-200">
              <p className="text-xs text-gray-400 mb-2">{post.date}</p>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm">{post.excerpt}</p>
              <button className="mt-4 text-sm font-semibold text-blue-700 hover:underline">Read more →</button>
            </Card>
          ))}
        </div>
      </div>
      <MobileCTA />
    </div>
  );
}
