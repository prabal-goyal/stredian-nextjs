import ImageGallery from "@/components/ImageGallery";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4 sm:p-8">
        <h1 className="text-4xl font-bold text-center text-black mb-8 pt-8">Welcome to Steridian</h1>
        <ImageGallery />
      </div>
    </div>
  );
}
