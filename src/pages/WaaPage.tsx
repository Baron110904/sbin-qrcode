
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const WaaPage = () => {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col md:flex-row">
      {/* Partie gauche - Contenu textuel et CTA */}
      <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-between">
        {/* Logo en haut */}
        <div className="mb-10 md:mb-0">
          <div className="font-bold text-xl">
            <span className="text-black">teknesis</span>
          </div>
          <div className="text-sm">branding agency</div>
        </div>

        {/* Texte principal */}
        <div className="my-8 md:my-0">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Deploy<br />
            your<span className="relative">
              <span className="relative z-10 ml-2">App</span>
              <span className="absolute -top-1 -left-2 w-[90px] h-[90px] bg-[#0099ff] rounded-full z-0"></span>
            </span><br />
            with us.
          </h1>
          
          <div className="mt-8">
            <Button 
              className="rounded-full bg-[#0099ff] hover:bg-[#0088ee] text-white font-medium px-8 py-6 h-12"
            >
              Hire Us
            </Button>
          </div>
        </div>

        {/* Boutons de téléchargement en bas */}
        <div className="space-y-3 mt-10">
          <Button 
            variant="outline"
            className="w-full md:w-64 bg-[#0099ff] text-white border-none flex items-center gap-2 h-12 rounded-full px-6"
            onClick={() => window.open("https://play.google.com/store", "_blank")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 3L19 12L5 21V3Z" fill="white"/>
            </svg>
            <span className="font-medium">Google Play</span>
          </Button>

          <Button 
            variant="outline"
            className="w-full md:w-64 bg-[#00459e] text-white border-none flex items-center gap-2 h-12 rounded-full px-6"
            onClick={() => window.open("https://www.apple.com/app-store", "_blank")}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C16.41 2 20 5.59 20 10C20 14.41 16.41 18 12 18C7.59 18 4 14.41 4 10C4 5.59 7.59 2 12 2ZM12 0C6.48 0 2 4.48 2 10C2 15.52 6.48 20 12 20C17.52 20 22 15.52 22 10C22 4.48 17.52 0 12 0ZM12 14C14.21 14 16 12.21 16 10C16 7.79 14.21 6 12 6C9.79 6 8 7.79 8 10C8 12.21 9.79 14 12 14Z" fill="white"/>
            </svg>
            <span className="font-medium">Apple Store</span>
          </Button>
        </div>
      </div>

      {/* Partie droite - Image du téléphone */}
      <div className="hidden md:flex w-1/2 bg-[#0099ff] relative overflow-hidden items-center justify-center">
        <div className="relative">
          <img 
            src="https://i.postimg.cc/tJkxp88n/iphone-mockup.png" 
            alt="iPhone avec applications" 
            className="object-contain max-w-md transform translate-x-1/4 scale-125"
            style={{ filter: "drop-shadow(0 0 15px rgba(0,0,0,0.2))" }}
          />
        </div>
      </div>

      {/* Version mobile de l'image de téléphone */}
      <div className="md:hidden w-full bg-[#0099ff] h-64 flex items-center justify-center mt-6">
        <img 
          src="https://i.postimg.cc/tJkxp88n/iphone-mockup.png" 
          alt="iPhone avec applications" 
          className="object-contain h-full"
        />
      </div>
    </div>
  );
};

export default WaaPage;
